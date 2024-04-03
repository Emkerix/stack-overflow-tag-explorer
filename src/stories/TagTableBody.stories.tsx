import TagTableBody from "../components/TagTable/TagTableBody/TagTableBody"

export default {
  component: TagTableBody,
  title: "TagTableBody",
  tags: ["autodocs"],
}

const tags = [
  {
    count: 74,
    name: ".net-client-profile",
  },
  {
    count: 45019,
    name: ".net-core",
  },
  {
    count: 30,
    name: ".net-core-1.1",
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
