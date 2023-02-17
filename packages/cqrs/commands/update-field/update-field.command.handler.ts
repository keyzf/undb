import { ITableRepository } from '@egodb/core'
import type { ICommandHandler } from '@egodb/domain'
import type { UpdateFieldCommand } from './update-field.command.js'

type IUpdateFieldCommandHandler = ICommandHandler<UpdateFieldCommand, void>

export class UpdateFieldCommandHandler implements IUpdateFieldCommandHandler {
  constructor(protected readonly tableRepo: ITableRepository) {}

  async execute(command: UpdateFieldCommand): Promise<void> {
    const table = (await this.tableRepo.findOneById(command.tableId)).unwrap()

    // const spec = table.updateField(command.field)

    // await this.tableRepo.updateOneById(table.id.value, spec)
  }
}
