import { NestGetRecordsQueryHandelr } from './get-records.query.handler'
import { NestGetTableQueryHandelr } from './get-table.query.handler'
import { NestGetTablesQueryHandelr } from './get-tables.query.handler'

export const queryHandlers = [NestGetTableQueryHandelr, NestGetTablesQueryHandelr, NestGetRecordsQueryHandelr]