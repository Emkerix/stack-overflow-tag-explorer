import TagTableRowError from "../components/TagTable/TagTableBody/TagTableRowError"

export default {
  component: TagTableRowError,
  title: "TagTableRow/Error",
  tags: ["autodocs"],
}

export const UnexpectedError = {
  args: {
    error: {
      error_id: 0,
      error_message: "Unexpected Error",
      error_name: "Unexpected Error",
    },
  },
}

export const SimulatedError = {
  args: {
    error: {
      error_id: 404,
      error_message: "simulated",
      error_name: "no_method",
    },
  },
}
