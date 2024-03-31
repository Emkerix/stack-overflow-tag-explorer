import TagTableBody from "../components/TagTable/TagTableBody/TagTableBody"

export default {
  component: TagTableBody,
  title: "TagTableBody",
  tags: ["autodocs"],
}

const tags = [
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    count: 0,
    name: "announcement",
  },
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    count: 1,
    name: "deno-kv",
  },
  {
    has_synonyms: false,
    is_moderator_only: false,
    is_required: false,
    count: 1,
    name: "postbank-pdf2csv",
  },
]

export const Default = {
  args: {
    tags,
    error: {},
    isLoading: false,
  },
}

export const Error = {
  args: {
    error: {
      error_id: 404,
      error_message: "simulated",
      error_name: "no_method",
    },
  },
}

export const Loading = {
  args: {
    tags,
    isLoading: true,
    error: {},
  },
}
