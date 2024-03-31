import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material"

interface TagTableHeadProps {
  order: "asc" | "desc"
  setOrder: () => void
}

function TagTableHead({ order, setOrder }: TagTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableSortLabel active direction={order} onClick={() => setOrder()}>
            Tag Name
          </TableSortLabel>
        </TableCell>
        <TableCell align="right">Count</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TagTableHead
