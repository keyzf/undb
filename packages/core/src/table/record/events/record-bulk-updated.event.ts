import { BaseEvent } from '@undb/domain'
import type { Option } from 'oxide.ts'
import { z } from 'zod'
import { baseSchemaEventSchema } from '../../field/field.type.js'
import type { Table } from '../../table.js'
import { recordReadableMapper, recordReadableSchema } from '../record.readable.js'
import type { IQueryRecordSchema } from '../record.type.js'
import { baseEventSchema, baseRecordEventSchema, type BaseRecordEventName } from './base-record.event.js'

export const EVT_RECORD_BULK_UPDATED = 'record.bulk_updated' as const

export const recordsBulkUpdatedEventPayload = z
  .object({
    previousSchema: baseSchemaEventSchema.nullable(),
    schema: baseSchemaEventSchema,
    updates: z
      .object({
        previousRecord: recordReadableSchema,
        record: recordReadableSchema,
      })
      .array(),
  })
  .merge(baseRecordEventSchema)

type IRecordsBulkUpdatedEventPayload = z.infer<typeof recordsBulkUpdatedEventPayload>

export const recordsBulkUpdatedEvent = z
  .object({ name: z.literal(EVT_RECORD_BULK_UPDATED), payload: recordsBulkUpdatedEventPayload })
  .merge(baseEventSchema)

export class RecordBulkUpdatedEvent extends BaseEvent<IRecordsBulkUpdatedEventPayload, BaseRecordEventName> {
  public readonly name = EVT_RECORD_BULK_UPDATED

  static from(
    table: Table,
    previousTable: Option<Table>,
    operatorId: string,
    previousRecords: IQueryRecordSchema[],
    records: IQueryRecordSchema[],
    updatedFieldIds: Map<string, Set<string>>,
  ): RecordBulkUpdatedEvent {
    const recordsMap = new Map(records.map((r) => [r.id, r]))
    const fieldIds = new Set([...updatedFieldIds.values()].flatMap((f) => [...f.values()]))
    const schema = table.schema.fields.filter((f) => fieldIds.has(f.id.value)).map((f) => f.toEvent(records))
    const previousSchema = previousTable.isSome()
      ? previousTable
          .unwrap()
          .schema.fields.filter((f) => fieldIds.has(f.id.value))
          .map((f) => f.toEvent(previousRecords))
      : null
    return new this(
      {
        schema,
        previousSchema,
        tableId: table.id.value,
        tableName: table.name.value,
        updates: previousRecords.map((r) => {
          const fields = table.schema.fields.filter((f) => !!updatedFieldIds.get(r.id)?.has(f.id.value))
          return {
            previousRecord: recordReadableMapper(fields, r),
            record: recordReadableMapper(fields, recordsMap.get(r.id)!),
          }
        }),
      },
      operatorId,
    )
  }
}
