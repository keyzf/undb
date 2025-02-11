import { z } from "@undb/zod"
import { tableRLSAction } from "../table-rls-action.vo"
import { tableRLSCondition } from "../table-rls-condition.vo"
import { rlsId } from "../table-rls-id.vo"
import { tableRLSSubject } from "../table-rls-subject.vo"

export const rlsDTO = z.object({
  id: rlsId,
  name: z.string().min(2),
  enabled: z.boolean(),
  action: tableRLSAction,
  allow: z.boolean(),
  subject: tableRLSSubject,
  condition: tableRLSCondition.optional(),
  updateCondition: tableRLSCondition.optional(),
})

export type IRLSDTO = z.infer<typeof rlsDTO>

export const rlsGroupDTO = rlsDTO.array()

export type IRLSGroupDTO = z.infer<typeof rlsGroupDTO>
