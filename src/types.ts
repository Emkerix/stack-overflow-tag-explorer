export interface TagResponseError {
  error_id: number
  error_message: string
  error_name: string
}

export interface TagResponseSuccess {
  items: TagItem[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
  total: number
}

export interface TagItem {
  has_synonyms: boolean
  is_moderator_only: boolean
  is_required: boolean
  count: number
  name: string
}

export type Tag = Pick<TagItem, "count" | "name">

export interface TagExplorerState {
  page: number
  totalPages: number
  rowsPerPage: number
  order: "asc" | "desc"
  tags: Tag[]
  isLoading: boolean
  error: Partial<TagResponseError>
}

export type TagResponse = TagResponseSuccess | TagResponseError
