import { trpc } from "$lib/trpc/client"
import type { Option } from "@undb/domain"
import { RecordComositeSpecification, RecordDO, TableDo, type IRecordValues, type Records } from "@undb/table"
import { getContext, setContext } from "svelte"
import { derived, writable } from "svelte/store"
import { queryParam, ssp } from "sveltekit-search-params"

type RecordStore = {
  lastUpdatedAt: number
  ids: string[]
  records: Map<string, RecordDO>
}

export const createRecordsStore = () => {
  const store = writable<RecordStore>({ lastUpdatedAt: 0, ids: [], records: new Map() })
  const data = writable<any[]>([])

  const { subscribe, set, update } = store

  const upsertRecords = (records: Records) => {
    store.update((store) => {
      for (const record of records) {
        const id = record.id.value
        if (store.records.has(id)) {
          store.records.set(id, record)
          data.update((data) => data.map((d) => (d.id === id ? record.flatten() : d)))
        } else {
          store.records.set(id, record)
          store.ids.push(id)
          data.update((data) => {
            data.push(record.flatten())
            return data
          })
        }
      }
      return store
    })
  }

  const setRecord = (record: RecordDO) => {
    return store.update((store) => {
      if (store.records.has(record.id.value)) {
        store.records.set(record.id.value, record)
        data.update((data) => {
          return data.map((d) => (d.id === record.id.value ? record.flatten() : d))
        })
        return store
      } else {
        store.records.set(record.id.value, record)
        store.ids.push(record.id.value)
        data.update((data) => {
          data.push(record.flatten())
          return data
        })
        return store
      }
    })
  }

  const setRecordValue = (id: string, key: string, value: any) => {
    return store.update((store) => {
      if (store.records.has(id)) {
        data.update((data) => {
          return data.map((d) => (d.id === id ? { ...d, [key]: value } : d))
        })
      }
      return store
    })
  }

  const setRecords = (initialRecords: Records, lastUpdatedAt: number) => {
    return store.update((store) => {
      if (store.lastUpdatedAt >= lastUpdatedAt) {
        return store
      }
      const ids: string[] = []
      const records = new Map<string, RecordDO>()
      for (const record of initialRecords) {
        ids.push(record.id.value)
        records.set(record.id.value, record)
      }

      data.set(initialRecords.records.map((record) => record.flatten()))

      return {
        lastUpdatedAt,
        ids,
        records,
      }
    })
  }

  const records = derived(store, ($store) => $store.ids.map((id) => $store.records.get(id)!))
  const hasRecord = derived(store, ($store) => !!$store.records.size)
  const count = derived(store, ($store) => $store.ids.length)

  const invalidateRecord = async (table: TableDo, recordId: string) => {
    const result = await trpc.record.get.query({ tableId: table.id.value, id: recordId })
    const record = (result as any)?.record
    if (!record) return
    const r = RecordDO.fromJSON(table, record)
    setRecord(r)
  }

  const getRecords = derived(store, ($store) => (spec: Option<RecordComositeSpecification>) => {
    return [...$store.records.values()].filter((record) => (spec.isSome() ? spec.unwrap().isSatisfiedBy(record) : true))
  })

  const clearRecords = () => {
    store.set({ lastUpdatedAt: 0, ids: [], records: new Map() })
    data.set([])
  }

  return {
    set,
    update,
    subscribe,

    setRecord,
    setRecords,
    setRecordValue,
    hasRecord,
    count,
    upsertRecords,
    getRecords,

    records,
    data,
    invalidateRecord,
    clearRecords,
  }
}

export type RecordsStore = ReturnType<typeof createRecordsStore>

export const defaultRecordValues = queryParam<IRecordValues>("rv", ssp.object())

export function setRecordsStore(store: RecordsStore) {
  setContext("records", store)
}

export function getRecordsStore() {
  return getContext<RecordsStore>("records")
}
