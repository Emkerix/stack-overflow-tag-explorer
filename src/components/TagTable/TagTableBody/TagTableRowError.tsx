import { TableCell, TableRow } from "@mui/material"
import { TagResponseError } from "../../../types"

interface TagTableRowErrorProps {
  error: Partial<TagResponseError>
}

export default function TagTableRowError({ error }: TagTableRowErrorProps) {
  return (
    <TableRow>
      <TableCell colSpan={2} align="center">
        {error.error_name}
      </TableCell>
    </TableRow>
  )
}
