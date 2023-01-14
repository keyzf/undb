import type { ICreateDateFieldSchema } from '@egodb/core'
import { createDateFieldSchema } from '@egodb/core'
import { Button, Card, FocusTrap, Group, IconChevronLeft, Stack, Text, TextInput } from '@egodb/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSetAtom } from 'jotai'
import { useForm } from 'react-hook-form'
import { trpc } from '../../trpc'
import type { ITableBaseProps } from '../table/table-base-props'
import { kanbanStepZeroAtom } from './kanban-step.atom'

interface IProps extends ITableBaseProps {
  onSuccess?: () => void
}

export const CreateDateField: React.FC<IProps> = ({ table, onSuccess }) => {
  const form = useForm<ICreateDateFieldSchema>({
    defaultValues: {
      type: 'date',
      key: '',
      name: '',
    },
    resolver: zodResolver(createDateFieldSchema),
  })

  const utils = trpc.useContext()

  const setKanbanField = trpc.table.view.kanban.setField.useMutation({
    onSuccess() {
      utils.table.get.refetch()
      setStepZero()
      onSuccess?.()
    },
  })

  const createDateField = trpc.table.field.create.useMutation({
    onSuccess(_, variables) {
      const id = variables.field.key

      setKanbanField.mutate({
        tableId: table.id.value,
        field: id,
      })
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    createDateField.mutate({
      id: table.id.value,
      field: values,
    })
  })

  const setStepZero = useSetAtom(kanbanStepZeroAtom)
  const props = form.register('name')
  return (
    <form onSubmit={onSubmit}>
      <Card shadow="sm">
        <Card.Section withBorder inheritPadding py="sm">
          <Text>create new date field</Text>
        </Card.Section>

        <Card.Section withBorder inheritPadding py="sm">
          <Stack spacing="xs">
            <FocusTrap>
              <TextInput
                {...props}
                onChange={(e) => {
                  props.onChange(e)
                  form.setValue('key', e.target.value)
                }}
                placeholder="new date field name"
              />
            </FocusTrap>
          </Stack>
        </Card.Section>

        <Card.Section withBorder inheritPadding py="sm">
          <Group position="right">
            <Button leftIcon={<IconChevronLeft size={14} />} size="xs" variant="white" onClick={setStepZero}>
              Select Existing Field
            </Button>
            <Button size="xs" type="submit" disabled={!form.formState.isValid} loading={createDateField.isLoading}>
              Done
            </Button>
          </Group>
        </Card.Section>
      </Card>
    </form>
  )
}
