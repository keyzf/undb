import { ValueObject } from "@undb/domain"
import * as z from "@undb/zod"

export const baseNameSchema = z.string().min(1)

export class BaseName extends ValueObject<z.infer<typeof baseNameSchema>> {
  static from(name: string): BaseName {
    return new BaseName({ value: baseNameSchema.parse(name) })
  }
}
