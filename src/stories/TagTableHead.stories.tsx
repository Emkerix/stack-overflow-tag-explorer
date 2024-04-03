import TagTableHead from "../components/TagTable/TagTableHead/TagTableHead"

export default {
  component: TagTableHead,
  title: "TagTableHead",
  tags: ["autodocs"],
}

const order = "asc"

export const Default = {
  args: {
    order,
    setOrder: () => (order === "asc" ? "desc" : "asc"),
  },
}
