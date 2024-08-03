import { SpaceMember, type ISpaceMemberRepository } from "@undb/authz"
import { singleton } from "@undb/di"
import { None, Some, type Option } from "@undb/domain"
import { getCurrentTransaction } from "../ctx"
import type { IQueryBuilder } from "../qb"
import { injectQueryBuilder } from "../qb.provider"

@singleton()
export class SpaceMemberRepository implements ISpaceMemberRepository {
  constructor(
    @injectQueryBuilder()
    private readonly qb: IQueryBuilder,
  ) {}

  async exists(email: string): Promise<boolean> {
    const user = await this.qb
      .selectFrom("undb_user")
      .selectAll()
      .where((eb) => eb.eb("undb_user.email", "=", email))
      .executeTakeFirst()
    return !!user
  }
  async findOneByUserId(userId: string): Promise<Option<SpaceMember>> {
    const member = await this.qb
      .selectFrom("undb_space_member")
      .selectAll()
      .where((eb) => eb.eb("undb_space_member.user_id", "=", userId))
      .executeTakeFirst()

    if (!member) {
      return None
    }

    return Some(
      new SpaceMember({
        id: member.id,
        role: member.role,
        userId: member.user_id,
        spaceId: member.space_id,
      }),
    )
  }
  findOneById(id: string): Promise<SpaceMember> {
    throw new Error("Method not implemented.")
  }
  async insert(member: SpaceMember): Promise<void> {
    const json = member.toJSON()
    await getCurrentTransaction()
      .insertInto("undb_space_member")
      .values({
        id: json.id,
        role: json.role,
        space_id: json.spaceId,
        user_id: json.userId,
      })
      .execute()
  }
}