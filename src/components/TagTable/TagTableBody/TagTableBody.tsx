import { TableBody } from "@mui/material"
import { TagItem, TagResponseError } from "../../../types"
import TagTableRowLoading from "./TagTableRowLoading"
import TagTableRowError from "./TagTableRowError"
import TagTableRowItem from "./TagTableRowItem"

interface TagTableBodyProps {
  isLoading: boolean
  error: Partial<TagResponseError>
  tags: TagItem[]
}

export default function TagTableBody({
  isLoading,
  error,
  tags,
}: TagTableBodyProps) {
  return (
    <TableBody>
      {isLoading && <TagTableRowLoading />}
      {!isLoading && "error_id" in error && <TagTableRowError error={error} />}
      {!isLoading &&
        !("error_id" in error) &&
        tags.map((tag, index) => <TagTableRowItem key={index} tag={tag} />)}
    </TableBody>
  )
}
