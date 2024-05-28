import type { NoneSystemFieldType } from "./field.type"

export * from "./condition/field-condition.type"
export * from "./dto"
export * from "./field-constraint.vo"
export * from "./field-id.vo"
export * from "./field-name.vo"
export * from "./field.aggregate"
export * from "./field.type"
export * from "./field.util"
export * from "./field.visitor"
export * from "./variants"

export const fieldTypes: NoneSystemFieldType[] = ["string", "number"] as const
