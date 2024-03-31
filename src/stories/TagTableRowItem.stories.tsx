import TagTableRowItem from "../components/TagTable/TagTableBody/TagTableRowItem"

export default {
  component: TagTableRowItem,
  title: "TagTableRow/Item",
  tags: ["autodocs"],
}

export const Default = {
  args: {
    tag: {
      has_synonyms: false,
      is_moderator_only: false,
      is_required: false,
      count: 0,
      name: "announcement",
    },
  },
}
