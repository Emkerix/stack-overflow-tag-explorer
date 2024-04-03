import { Provider } from "react-redux"
import TagTable from "../components/TagTable/TagTable"
import { store } from "../redux/store"

export default {
  component: TagTable,
  title: "TagTable",
  tags: ["autodocs"],
}

const Template = () => {
  return (
    <Provider store={store}>
      <TagTable />
    </Provider>
  )
}

export const Default = Template.bind({})
