import { BulkDeleteRecordsCommandHandler } from './bulk-delete-record.command.handler'
import { BulkDuplicateRecordsCommandHandler } from './bulk-duplicate-record.command.handler'
import { CreateFieldCommandHandler } from './create-field.command.handler'
import { CreateOptionCommandHandler } from './create-option.command.handler'
import { CreateRecordCommandHandler } from './create-record.command.handler'
import { CreateTableCommandHandler } from './create-table.command.handler'
import { CreateViewCommandHandler } from './create-view.command.handler'
import { DeleteFieldCommandHandler } from './delete-field.command.handler'
import { DeleteOptionCommandHandler } from './delete-option.command.handler'
import { DeleteRecordCommandHandler } from './delete-record.command.handler'
import { DeleteTableCommandHandler } from './delete-table.command.handler'
import { DuplicateRecordCommandHandler } from './duplicate-record.command.handler'
import { EditTableCommandHandler } from './edit-table.command.handler'
import { MoveFieldCommandHandler } from './move-field.command.handler'
import { ReorderOptionsCommandHandler } from './reorder-options.command.handler'
import { SetCalendarFieldCommandHandler } from './set-calendar-field.command.handler'
import { SetFieldVisibilityCommandHandler } from './set-field-visibility.command.handler'
import { SetFieldWidthCommandHandler } from './set-field-width.command.handler'
import { SetFiltersCommandHandler } from './set-filters.command.handler'
import { SetKanbanFieldCommandHandler } from './set-kanban-field.command.handler'
import { SetSortsCommandHandler } from './set-sorts.command.handler'
import { SetTreeViewFieldCommandHandler } from './set-tree-view-field.command.handler'
import { SwitchDisplayTypeCommandHandler } from './switch-display-type.command.handler'
import { UpdateOptionCommandHandler } from './update-option.command.handler'
import { UpdateRecordCommandHandler } from './update-record.command.handler'

export const commandHandlers = [
  CreateTableCommandHandler,
  CreateRecordCommandHandler,
  DuplicateRecordCommandHandler,
  BulkDuplicateRecordsCommandHandler,
  CreateFieldCommandHandler,
  CreateViewCommandHandler,
  CreateOptionCommandHandler,
  SetFiltersCommandHandler,
  SetSortsCommandHandler,
  SetKanbanFieldCommandHandler,
  SetCalendarFieldCommandHandler,
  SetTreeViewFieldCommandHandler,
  SetFieldWidthCommandHandler,
  SetFieldVisibilityCommandHandler,
  MoveFieldCommandHandler,
  EditTableCommandHandler,
  ReorderOptionsCommandHandler,
  SwitchDisplayTypeCommandHandler,
  UpdateRecordCommandHandler,
  UpdateOptionCommandHandler,
  DeleteRecordCommandHandler,
  BulkDeleteRecordsCommandHandler,
  DeleteTableCommandHandler,
  DeleteOptionCommandHandler,
  DeleteFieldCommandHandler,
]
