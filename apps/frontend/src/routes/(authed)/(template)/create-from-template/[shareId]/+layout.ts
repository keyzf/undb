import { GetCreateFromTemplateDataStore } from "$houdini"
import type { LayoutLoad } from "./$types"

export const ssr = false
export const prerender = "auto"

export const load: LayoutLoad = async (event) => {
  const { shareId } = event.params

  const store = new GetCreateFromTemplateDataStore()

  await store.fetch({
    event,
    variables: { shareId },
  })

  return {
    store,
  }
}
