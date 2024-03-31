import { CircularProgress, TableCell, TableRow } from "@mui/material"

export default function TagTableRowLoading() {
  return (
    <TableRow>
      <TableCell colSpan={2} align="center">
        <CircularProgress />
      </TableCell>
    </TableRow>
  )
}
