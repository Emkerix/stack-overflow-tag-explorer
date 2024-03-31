import { Provider } from "react-redux"
import TagTable from "../components/TagTable/TagTable"
import { store } from "../redux/store"

export default {
  component: TagTable,
  title: "TagTable",
  tags: ["autodocs"],
}

const Template = (args: any) => {
  return (
    <Provider store={store}>
      <TagTable {...args} />
    </Provider>
  )
}

export const Default = Template.bind({})
