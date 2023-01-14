import type { ICreateOptionSchema } from '@egodb/core'
import { createOptionSchema, OptionId } from '@egodb/core'
import { Stack, TextInput, Group, Button, closeModal } from '@egodb/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { CREATE_OPTION_MODAL_ID } from '../../modals'
import { trpc } from '../../trpc'
import { OptionColorPicker } from '../fields/option-color-picker'
import type { ICreateOptionFormProps } from './create-option-form.props'

export const CreateOptionForm: React.FC<ICreateOptionFormProps> = ({ table, field, color }) => {
  const form = useForm<ICreateOptionSchema>({
    defaultValues: {
      name: '',
      color,
    },
    resolver: zodResolver(createOptionSchema),
  })

  const utils = trpc.useContext()

  const createOption = trpc.table.field.select.createOption.useMutation({
    onSuccess() {
      form.reset()
      utils.table.get.refetch()
    },
  })

  const onSubmit = form.handleSubmit((values) => {
    values.id = OptionId.create().value
    createOption.mutate({
      tableId: table.id.value,
      fieldId: field.id.value,
      option: values,
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <Group>
          <Controller
            name="color"
            control={form.control}
            render={(props) => (
              <OptionColorPicker {...props.field} option={{ name: form.watch('name'), color: props.field.value }} />
            )}
          />
          <TextInput data-autofocus variant="unstyled" placeholder="option name" {...form.register('name')} />
        </Group>
        <Group position="right">
          <Button variant="white" onClick={() => closeModal(CREATE_OPTION_MODAL_ID)}>
            Cancel
          </Button>
          <Button type="submit" disabled={!form.formState.isValid} loading={createOption.isLoading}>
            Done
          </Button>
        </Group>
      </Stack>
    </form>
  )
}
