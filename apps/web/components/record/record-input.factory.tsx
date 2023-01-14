import type { Field } from '@egodb/core'
import type { Table } from '@egodb/core'
import { NumberInput, DatePicker, DateRangePicker, Checkbox, TextInput } from '@egodb/ui'
import React from 'react'
import { Controller } from 'react-hook-form'
import { FieldInputLabel } from '../fields/field-input-label'
import { OptionPicker } from '../option/option-picker'

interface IProps {
  table: Table
  field: Field
  name: string
}

export const RecordInputFactory: React.FC<IProps> = ({ table, name, field }) => {
  const label = <FieldInputLabel>{field.key.value}</FieldInputLabel>
  if (field.type === 'number') {
    return (
      <Controller
        name={name}
        render={(form) => (
          <NumberInput {...form.field} label={label} onChange={(number) => form.field.onChange(number)} />
        )}
      />
    )
  }
  if (field.type === 'date') {
    return (
      <Controller
        name={name}
        render={(form) => <DatePicker label={label} {...form.field} onChange={(date) => form.field.onChange(date)} />}
      />
    )
  }
  if (field.type === 'date-range') {
    return (
      <Controller
        name={name}
        render={(form) => (
          <DateRangePicker
            label={label}
            {...form.field}
            value={form.field.value ?? [null, null]}
            onChange={(value) => form.field.onChange(value)}
          />
        )}
      />
    )
  }
  if (field.type === 'bool') {
    return (
      <Controller
        name={name}
        render={(form) => (
          <Checkbox lh={1} key={field.key.value} {...form.field} checked={form.field.value} label={label} />
        )}
      />
    )
  }
  if (field.type === 'select') {
    return (
      <Controller
        name={name}
        render={(form) => {
          return (
            <OptionPicker
              field={field}
              table={table}
              label={label}
              {...form.field}
              onChange={(value) => form.field.onChange(value)}
            />
          )
        }}
      />
    )
  }

  return <Controller name={name} render={(form) => <TextInput label={label} {...form.field} />} />
}
