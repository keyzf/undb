import { BaseId, injectBaseRepository, WithBaseId, WithBaseSpaceId, type IBaseRepository } from "@undb/base"
import { queryHandler } from "@undb/cqrs"
import { singleton } from "@undb/di"
import type { IQueryHandler } from "@undb/domain"
import { GetTemplateQuery, type IGetTemplateOutput, type IGetTemplateQuery } from "@undb/queries"
import { injectShareRepository, ShareId, WithShareId, type IShareRepository } from "@undb/share"

@queryHandler(GetTemplateQuery)
@singleton()
export class GetTemplateQueryHandler implements IQueryHandler<IGetTemplateQuery, IGetTemplateOutput> {
  constructor(
    @injectBaseRepository()
    private readonly baseRepo: IBaseRepository,
    @injectShareRepository()
    private readonly shareRepo: IShareRepository,
  ) {}

  async execute({ shareId }: IGetTemplateQuery): Promise<IGetTemplateOutput> {
    const share = (await this.shareRepo.findOne(new WithShareId(new ShareId(shareId)))).expect("share not found")
    if (share.target.type !== "base") {
      throw new Error("share target is not base")
    }

    const baseId = share.target.id
    const spaceId = share.spaceId

    const base = (
      await this.baseRepo.findOne(new WithBaseId(new BaseId(baseId)).and(new WithBaseSpaceId(spaceId)))
    ).expect("base not found")

    return {
      baseId: base.id.value,
      spaceId: base.spaceId,
      name: base.name.value,
    }
  }
}
