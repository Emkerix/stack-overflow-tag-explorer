export interface TagResponseError {
  error_id: number
  error_message: string
  error_name: string
}

export interface TagResponseSuccess {
  items: TagItem[]
  total: number
}

export interface TagItem {
  count: number
  name: string
}

export interface TagExplorerState {
  page: number
  totalPages: number
  rowsPerPage: number
  order: "asc" | "desc"
  tags: TagItem[]
  isLoading: boolean
  error: Partial<TagResponseError>
}

export type TagResponse = TagResponseSuccess | TagResponseError
