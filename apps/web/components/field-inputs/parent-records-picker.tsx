import type { ParentField, Table } from '@egodb/core'
import type { SelectProps } from '@egodb/ui'
import { Select } from '@egodb/ui'
import { Group } from '@egodb/ui'
import { Loader } from '@egodb/ui'
import { forwardRef, useState } from 'react'
import { trpc } from '../../trpc'
import { RecordId } from '../field-value/record-id'
import { ReferenceValue } from '../field-value/reference-value'
import { FieldIcon } from './field-Icon'

interface IProps extends Omit<SelectProps, 'data'> {
  table: Table
  field: ParentField
  recordId?: string
}

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string
  values: string[]
  label: string
}

const ParentSelectItem = forwardRef<HTMLDivElement, ItemProps>(({ value, values, ...others }: ItemProps, ref) => (
  <Group ref={ref} p="xs" {...others}>
    <RecordId id={value} />
    {/* TODO: display values */}
    {/* <ReferenceValue values={values} /> */}
  </Group>
))

export const ParentRecordPicker: React.FC<IProps> = ({ table, field, recordId, ...rest }) => {
  const [focused, setFocused] = useState(false)
  const getRecords = trpc.record.parent.available.useQuery(
    { tableId: table.id.value, parentFieldId: field.id.value, recordId },
    { enabled: focused },
  )

  const data = [
    ...(getRecords.data?.records.map((record) => ({
      value: record.id,
      values: field.getDisplayValues(record.displayValues),
      label: record.id,
    })) ?? []),
  ]

  if (rest.value && !data.find((d) => d.value === rest.value)) {
    data.push({ value: rest.value, values: [], label: rest.value })
  }

  return (
    <Select
      {...rest}
      multiple
      searchable
      clearable
      description={focused && !getRecords.data?.records.length ? 'no more available record to select' : undefined}
      itemComponent={ParentSelectItem}
      data={data}
      onFocus={() => setFocused(true)}
      placeholder={focused && getRecords.isLoading ? 'loading records...' : undefined}
      disabled={focused && getRecords.isLoading}
      icon={focused && getRecords.isLoading ? <Loader color="gray" size={14} /> : <FieldIcon type={field.type} />}
    />
  )
}
