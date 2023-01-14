import { ValueObject } from '@egodb/domain'
import { isBoolean, isNumber, isString } from '@fxts/core'
import { isDate } from 'date-fns'
import { None, Option, Some } from 'oxide.ts'
import type { FieldValue, ICreateFieldsSchema_internal, IFieldValue, UnpackedFieldValue } from '../../field'
import { DateRangeFieldValue } from '../../field/date-range-field-value'
import type { IDateRangeFieldValue } from '../../field/date-range-field.type'
import { SelectFieldValue } from '../../field/select-field-value'
import type { TableSchemaMap } from '../../value-objects'
import type { RecordValueJSON } from '../record.schema'
import type { IQueryRecordValues } from '../record.type'

export class RecordValues extends ValueObject<Map<string, FieldValue>> {
  static fromArray(inputs: ICreateFieldsSchema_internal): RecordValues {
    const values = new Map(inputs.map((v) => [v.field.key.value, v.field.createValue(v.value as never)]))
    return new RecordValues(values)
  }

  static fromObject(schema: TableSchemaMap, inputs: IQueryRecordValues): RecordValues {
    const values = new Map(
      Object.entries(inputs).map(([fieldKey, fieldValue]) => [
        fieldKey,
        // TODO: handler missing field
        schema.get(fieldKey)!.createValue(fieldValue as never),
      ]),
    )

    return new RecordValues(values)
  }

  static empty(): RecordValues {
    return new RecordValues(new Map())
  }

  public get value() {
    return this.props
  }

  public get valueJSON(): RecordValueJSON {
    return Object.fromEntries(this.value)
  }

  setValue(fieldKey: string, value: FieldValue) {
    this.value.set(fieldKey, value)
  }

  toObject() {
    const obj: Record<string, IFieldValue> = {}
    for (const [key, value] of this.value) {
      obj[key] = value.unpack()
    }
    return obj
  }

  /**
   * get unpacked field value
   *
   * @param id - field id
   * @returns unpacked field value
   */
  getUnpackedValue(id: string): Option<UnpackedFieldValue> {
    return Option.nonNull(this.value.get(id)).map((v) => v.unpack())
  }

  /**
   * get field string value by field name
   * - if field not exists returns option none
   * - if value is not stirng returns option none
   *
   * @param id - field id
   * @returns unpacked string value
   */
  getStringValue(id: string): Option<string> {
    return this.getUnpackedValue(id)
      .map((v) => (isString(v) ? Some(v) : None))
      .flatten()
  }

  getBoolValue(id: string): Option<boolean> {
    return this.getUnpackedValue(id)
      .map((v) => (isBoolean(v) ? Some(v) : None))
      .flatten()
  }

  /**
   * get field number value by field name
   * - if field not exists returns option none
   * - if value is not number returns option none
   *
   * @param id - field id
   * @returns unpacked number value
   */
  getNumberValue(id: string): Option<number> {
    return this.getUnpackedValue(id)
      .map((v) => (isNumber(v) ? Some(v) : None))
      .flatten()
  }

  getDateValue(id: string): Option<Date> {
    return this.getUnpackedValue(id)
      .map((v) => (isDate(v) ? Some(v as Date) : None))
      .flatten()
  }

  getDateRangeValue(id: string): Option<IDateRangeFieldValue> {
    return this.getUnpackedValue(id)
      .map((v) => (DateRangeFieldValue.isDateRange(v) ? Some(v) : None))
      .flatten()
  }

  getSelectValue(id: string): Option<SelectFieldValue> {
    const value = this.value.get(id)
    if (SelectFieldValue.isSelectFieldValue(value)) {
      return Some(value)
    }
    return None
  }
}
