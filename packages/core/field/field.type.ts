import type { Option } from 'oxide.ts'
import * as z from 'zod'
import type { IReferenceFilterValue } from '../filter/reference.filter.js'
import type { Options } from '../option/options.js'
import type { IRecordDisplayValues } from '../record/index.js'
import type { AutoIncrementFieldValue } from './auto-increment-field-value.js'
import type { AutoIncrementField } from './auto-increment-field.js'
import type { IAutoIncrementFieldValue } from './auto-increment-field.type.js'
import {
  autoIncrementFieldQuerySchema,
  autoIncrementQueryValue,
  autoIncrementTypeSchema,
  createAutoIncrementFieldSchema,
  createAutoIncrementFieldValue,
  createAutoIncrementFieldValue_internal,
} from './auto-increment-field.type.js'
import type { BoolFieldValue } from './bool-field-value.js'
import type { BoolField } from './bool-field.js'
import type { IBoolFieldValue } from './bool-field.type.js'
import {
  boolFieldQuerySchema,
  boolFieldQueryValue,
  boolTypeSchema,
  createBoolFieldSchema,
  createBoolFieldValue,
  createBoolFieldValue_internal,
} from './bool-field.type.js'
import type { ColorFieldValue } from './color-field-value.js'
import type { ColorField } from './color-field.js'
import type { IColorFieldValue } from './color-field.type.js'
import {
  colorFieldQuerySchema,
  colorFieldQueryValue,
  colorTypeSchema,
  createColorFieldSchema,
  createColorFieldValue,
  createColorFieldValue_internal,
} from './color-field.type.js'
import type { CreatedAtFieldValue } from './created-at-field-value.js'
import type { CreatedAtField } from './created-at-field.js'
import type { ICreatedAtFieldValue } from './created-at-field.type.js'
import {
  createCreatedAtFieldSchema,
  createCreatedAtFieldValue,
  createCreatedAtFieldValue_internal,
  createdAtFieldQuerySchema,
  createdAtFieldQueryValue,
  createdAtTypeSchema,
} from './created-at-field.type.js'
import type { DateFieldValue } from './date-field-value.js'
import type { DateField } from './date-field.js'
import type { IDateFieldValue } from './date-field.type.js'
import {
  createDateFieldSchema,
  createDateFieldValue,
  createDateFieldValue_internal,
  dateFieldQuerySchema,
  dateFieldQueryValue,
  dateTypeSchema,
} from './date-field.type.js'
import type { DateRangeFieldValue } from './date-range-field-value.js'
import type { DateRangeField } from './date-range-field.js'
import type { IDateRangeFieldValue } from './date-range-field.type.js'
import {
  createDateRangeFieldSchema,
  createDateRangeFieldValue,
  createDateRangeFieldValue_internal,
  dateRangeFieldQuerySchema,
  dateRangeFieldQueryValue,
  dateRangeTypeSchema,
} from './date-range-field.type.js'
import type { EmailFieldValue } from './email-field-value.js'
import type { EmailField } from './email-field.js'
import type { IEmailFieldValue } from './email-field.type.js'
import {
  createEmailFieldSchema,
  createEmailFieldValue,
  createEmailFieldValue_internal,
  emailFieldQuerySchema,
  emailFieldQueryValue,
  emailTypeSchema,
} from './email-field.type.js'
import { FIELD_TYPE_KEY } from './field.constant.js'
import type { IdFieldValue } from './id-field-value.js'
import type { IdField } from './id-field.js'
import type { IIdFieldValue } from './id-field.type.js'
import {
  createIdFieldSchema,
  createIdFieldValue,
  createIdFieldValue_internal,
  idFieldQuerySchema,
  idFieldQueryValue,
  idTypeSchema,
} from './id-field.type.js'
import type { NumberFieldValue } from './number-field-value.js'
import type { NumberField } from './number-field.js'
import {
  createNumberFieldSchema,
  createNumberFieldValue,
  createNumberFieldValue_internal,
  INumberFieldValue,
  numberFieldQuerySchema,
  numberFieldQueryValue,
  numberTypeSchema,
  updateNumberFieldSchema,
} from './number-field.type.js'
import type { ParentFieldValue } from './parent-field-value.js'
import type { ParentField } from './parent-field.js'
import type { IParentFieldValue } from './parent-field.type.js'
import {
  createParentFieldSchema,
  createParentFieldValue,
  createParentFieldValue_internal,
  parentFieldQuerySchema,
  parentFieldQueryValue,
  parentTypeSchema,
} from './parent-field.type.js'
import type { RatingFieldValue } from './rating-field-value.js'
import type { RatingField } from './rating-field.js'
import type { IRatingFieldValue } from './rating-field.type.js'
import {
  createRatingFieldSchema,
  createRatingFieldValue,
  createRatingFieldValue_internal,
  ratingFieldQuerySchema,
  ratingFieldQueryValue,
  ratingTypeSchema,
} from './rating-field.type.js'
import type { ReferenceFieldValue } from './reference-field-value.js'
import type { ReferenceField } from './reference-field.js'
import {
  createReferenceFieldSchema,
  createReferenceFieldValue,
  createReferenceFieldValue_internal,
  referenceFieldQuerySchema,
  referenceFieldQueryValue,
  referenceTypeSchema,
} from './reference-field.type.js'
import type { SelectFieldValue } from './select-field-value.js'
import type { SelectField } from './select-field.js'
import type { ISelectFieldValue } from './select-field.type.js'
import {
  createSelectFieldSchema,
  createSelectFieldValue,
  createSelectFieldValue_internal,
  selectFieldQuerySchema,
  selectFieldQueryValue,
  selectTypeSchema,
} from './select-field.type.js'
import type { StringFieldValue } from './string-field-value.js'
import type { StringField } from './string-field.js'
import {
  createStringFieldSchema,
  createStringFieldValue,
  createStringFieldValue_internal,
  IStringFieldValue,
  stringFieldQuerySchema,
  stringFieldQueryValue,
  stringTypeSchema,
  updateStringFieldSchema,
} from './string-field.type.js'
import type { TreeFieldValue } from './tree-field-value.js'
import type { TreeField } from './tree-field.js'
import type { ITreeFieldValue } from './tree-field.type.js'
import {
  createTreeFieldSchema,
  createTreeFieldValue,
  createTreeFieldValue_internal,
  treeFieldQuerySchema,
  treeFieldQueryValue,
  treeTypeSchema,
} from './tree-field.type.js'
import type { UpdatedAtFieldValue } from './updated-at-field-value.js'
import type { UpdatedAtField } from './updated-at-field.js'
import type { IUpdatedAtFieldValue } from './updated-at-field.type.js'
import {
  createUpdatedAtFieldSchema,
  createUpdatedAtFieldValue,
  createUpdatedAtFieldValue_internal,
  updatedAtFieldQuerySchema,
  updatedAtFieldQueryValue,
  updatedAtTypeSchema,
} from './updated-at-field.type.js'
import { fieldNameSchema } from './value-objects/field-name.schema.js'
import type { DisplayFields, FieldId, FieldName, FieldValueConstraints } from './value-objects/index.js'

export const createFieldSchema = z.discriminatedUnion(FIELD_TYPE_KEY, [
  createIdFieldSchema,
  createCreatedAtFieldSchema,
  createUpdatedAtFieldSchema,
  createAutoIncrementFieldSchema,
  createStringFieldSchema,
  createEmailFieldSchema,
  createColorFieldSchema,
  createNumberFieldSchema,
  createDateFieldSchema,
  createSelectFieldSchema,
  createBoolFieldSchema,
  createDateRangeFieldSchema,
  createReferenceFieldSchema,
  createTreeFieldSchema,
  createParentFieldSchema,
  createRatingFieldSchema,
])
export type ICreateFieldSchema = z.infer<typeof createFieldSchema>

export const updateFieldSchema = z.discriminatedUnion(FIELD_TYPE_KEY, [
  // TODO: fix all
  // updateIdFieldSchema,
  // updateUpdatedAtFieldSchema,
  // updateUpdatedAtFieldSchema,
  // updateAutoIncrementFieldSchema,
  updateStringFieldSchema,
  // updateEmailFieldSchema,
  // updateColorFieldSchema,
  updateNumberFieldSchema,
  // updateDateFieldSchema,
  // updateSelectFieldSchema,
  // updateBoolFieldSchema,
  // updateDateRangeFieldSchema,
  // updateReferenceFieldSchema,
  // updateTreeFieldSchema,
  // updateParentFieldSchema,
  // updateRatingFieldSchema,
])
export type IUpdateFieldSchema = z.infer<typeof updateFieldSchema>

export const queryFieldSchema = z.discriminatedUnion(FIELD_TYPE_KEY, [
  idFieldQuerySchema,
  createdAtFieldQuerySchema,
  updatedAtFieldQuerySchema,
  autoIncrementFieldQuerySchema,
  stringFieldQuerySchema,
  emailFieldQuerySchema,
  colorFieldQuerySchema,
  numberFieldQuerySchema,
  dateFieldQuerySchema,
  selectFieldQuerySchema,
  boolFieldQuerySchema,
  dateRangeFieldQuerySchema,
  referenceFieldQuerySchema,
  treeFieldQuerySchema,
  parentFieldQuerySchema,
  ratingFieldQuerySchema,
])
export type IQueryFieldSchema = z.infer<typeof queryFieldSchema>
export const querySchemaSchema = z.array(queryFieldSchema)
export type IQuerySchemaSchema = z.infer<typeof querySchemaSchema>

export const fieldTypes = z.union([
  idTypeSchema,
  createdAtTypeSchema,
  updatedAtTypeSchema,
  autoIncrementTypeSchema,
  stringTypeSchema,
  colorTypeSchema,
  emailTypeSchema,
  numberTypeSchema,
  dateTypeSchema,
  selectTypeSchema,
  boolTypeSchema,
  dateRangeTypeSchema,
  referenceTypeSchema,
  treeTypeSchema,
  parentTypeSchema,
  ratingTypeSchema,
])
export type IFieldType = z.infer<typeof fieldTypes>

export const createFieldValueSchema = z.union([
  createIdFieldValue,
  createCreatedAtFieldValue,
  createUpdatedAtFieldValue,
  createAutoIncrementFieldValue,
  createStringFieldValue,
  createEmailFieldValue,
  createColorFieldValue,
  createNumberFieldValue,
  createDateFieldValue,
  createDateRangeFieldValue,
  createSelectFieldValue,
  createBoolFieldValue,
  createReferenceFieldValue,
  createTreeFieldValue,
  createParentFieldValue,
  createRatingFieldValue,
])
export type ICreateFieldValue = z.infer<typeof createFieldValueSchema>

export const createFieldValueObject = z.record(fieldNameSchema, createFieldValueSchema)
export type ICreateFieldValueObject = z.infer<typeof createFieldValueObject>

export const createFieldValueSchema_internal = z.discriminatedUnion(FIELD_TYPE_KEY, [
  createIdFieldValue_internal,
  createCreatedAtFieldValue_internal,
  createUpdatedAtFieldValue_internal,
  createAutoIncrementFieldValue_internal,
  createStringFieldValue_internal,
  createEmailFieldValue_internal,
  createColorFieldValue_internal,
  createNumberFieldValue_internal,
  createDateFieldValue_internal,
  createSelectFieldValue_internal,
  createBoolFieldValue_internal,
  createDateRangeFieldValue_internal,
  createReferenceFieldValue_internal,
  createTreeFieldValue_internal,
  createParentFieldValue_internal,
  createRatingFieldValue_internal,
])
export type ICreateFieldValueSchema_internal = z.infer<typeof createFieldValueSchema_internal>

export const createFieldsSchema_internal = z.array(createFieldValueSchema_internal)
export type ICreateFieldsSchema_internal = z.infer<typeof createFieldsSchema_internal>

export interface IBaseField {
  id: FieldId
  system?: boolean
  name: FieldName
  valueConstrains: FieldValueConstraints
}

export type IIdField = IBaseField
export type ICreatedAtField = IBaseField
export type IUpdatedAtField = IBaseField
export type IAutoIncrementField = IBaseField
export type IStringField = IBaseField
export type IEmailField = IBaseField
export type IColorField = IBaseField
export type INumberField = IBaseField
export type IRatingField = IBaseField & { max?: number }

export type IDateField = IBaseField
export type IDateRangeField = IBaseField
export type ISelectField = IBaseField & {
  options: Options
}

export type IBoolField = IBaseField
export type IReferenceField = IBaseField & { displayFields?: DisplayFields }
export type ITreeField = IBaseField & { parentFieldId?: FieldId; displayFields?: DisplayFields }
export type IParentField = IBaseField & { treeFieldId: FieldId; displayFields?: DisplayFields }

export type SystemField = IdField | CreatedAtField | UpdatedAtField | AutoIncrementField

export type NoneSystemField =
  | StringField
  | NumberField
  | EmailField
  | ColorField
  | DateField
  | SelectField
  | BoolField
  | DateRangeField
  | ReferenceField
  | TreeField
  | ParentField
  | RatingField

export type Field = SystemField | NoneSystemField

export type FieldValue =
  | IdFieldValue
  | CreatedAtFieldValue
  | UpdatedAtFieldValue
  | AutoIncrementFieldValue
  | StringFieldValue
  | EmailFieldValue
  | ColorFieldValue
  | NumberFieldValue
  | DateFieldValue
  | SelectFieldValue
  | BoolFieldValue
  | DateRangeFieldValue
  | ReferenceFieldValue
  | TreeFieldValue
  | ParentFieldValue
  | RatingFieldValue

export type FieldValues = FieldValue[]

export type UnpackedFieldValue =
  | IIdFieldValue
  | ICreatedAtFieldValue
  | IUpdatedAtFieldValue
  | IAutoIncrementFieldValue
  | IStringFieldValue
  | IEmailFieldValue
  | IColorFieldValue
  | INumberFieldValue
  | IDateFieldValue
  | ISelectFieldValue
  | IBoolFieldValue
  | IDateRangeFieldValue
  | IReferenceFilterValue
  | ITreeFieldValue
  | IParentFieldValue
  | IRatingFieldValue

export const fieldQueryValue = z.union([
  treeFieldQueryValue,
  autoIncrementQueryValue,
  boolFieldQueryValue,
  colorFieldQueryValue,
  createdAtFieldQueryValue,
  dateFieldQueryValue,
  dateRangeFieldQueryValue,
  emailFieldQueryValue,
  idFieldQueryValue,
  numberFieldQueryValue,
  parentFieldQueryValue,
  referenceFieldQueryValue,
  selectFieldQueryValue,
  stringFieldQueryValue,
  updatedAtFieldQueryValue,
  ratingFieldQueryValue,
])

export type IFieldQueryValue = z.infer<typeof fieldQueryValue>

export const INTERNAL_COLUMN_ID_NAME = 'id'
export const INTERNAL_INCREAMENT_ID_NAME = 'auto_increment'
export const INTERNAL_COLUMN_CREATED_AT_NAME = 'created_at'
export const INTERNAL_COLUMN_UPDATED_AT_NAME = 'updated_at'
export const INTERNAL_DISPLAY_VALUES_NAME = 'display_values'

export interface IReference {
  get foreignTableId(): Option<string>
  get displayFieldIds(): FieldId[]
  getDisplayValues(values: IRecordDisplayValues): ((string | null)[] | undefined)[]
}
