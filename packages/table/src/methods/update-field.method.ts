import { Option, Some, applyRules } from "@undb/domain"
import { FieldUpdatedEvent } from "../events"
import { type IUpdateFieldDTO } from "../modules"
import { FieldNameShouldBeUnique } from "../modules/schema/rules/field-name-should-be-unique.rule"
import type { TableComositeSpecification } from "../specifications"
import type { TableDo } from "../table.do"

export function updateFieldMethod(this: TableDo, dto: IUpdateFieldDTO): Option<TableComositeSpecification> {
  const spec = this.schema.$updateField(dto)
  // TODO: update form
  spec.mutate(this)

  applyRules(new FieldNameShouldBeUnique(this.schema))

  const event = new FieldUpdatedEvent({
    tableId: this.id.value,
    field: spec.field.toJSON(),
    previous: spec.previous.toJSON(),
  })
  this.addDomainEvent(event)

  return Some(spec)
}
