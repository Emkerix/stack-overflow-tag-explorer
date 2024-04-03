import { TableCell, TableRow } from "@mui/material"
import { TagItem } from "../../../types"

interface TagTableItemProps {
  tag: TagItem
}

export default function TagTableRowItem({ tag }: TagTableItemProps) {
  const { name, count } = tag
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{count}</TableCell>
    </TableRow>
  )
}
