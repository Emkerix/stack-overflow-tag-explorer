import { TableCell, TableRow } from "@mui/material"
import { Tag } from "../../../types"

interface TagTableRowItemProps {
  tag: Tag
}

export default function TagTableRowItem({ tag }: TagTableRowItemProps) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {tag.name}
      </TableCell>
      <TableCell align="right">{tag.count}</TableCell>
    </TableRow>
  )
}
