import type { CommandProps } from '@egodb/domain'
import { Command } from '@egodb/domain'
import type { IViewDisplayType } from '../../view'
import type { ISwitchDisplayTypeCommandInput } from './switch-display-type.command.interface'

export class SwitchDisplayTypeCommand extends Command implements ISwitchDisplayTypeCommandInput {
  public readonly tableId: string
  public readonly viewKey?: string
  public readonly displayType: IViewDisplayType

  constructor(props: CommandProps<ISwitchDisplayTypeCommandInput>) {
    super(props)
    this.tableId = props.tableId
    this.viewKey = props.viewKey
    this.displayType = props.displayType
  }
}
