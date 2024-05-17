import { useEffect } from "react"
import { RootState } from "../../redux/store"
import { Paper, Table, TableContainer, TablePagination } from "@mui/material"
import TagTableHead from "./TagTableHead/TagTableHead"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  fetchDataThunk,
  setOrder,
  setPage,
  setRowsPerPage,
} from "../../redux/tagExplorerSlice/tagExplorerSlice"

import TagTableBody from "./TagTableBody/TagTableBody"
import "./TagTable.css"

function TagTable() {
  const dispatch = useAppDispatch()
  const { tags, totalPages, isLoading, error, page, order, rowsPerPage } =
    useAppSelector((state: RootState) => state.tagExplorer)

  useEffect(() => {
    dispatch(fetchDataThunk({ page, order, rowsPerPage }))
  }, [dispatch, page, order, rowsPerPage])

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage + 1))
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)))
    dispatch(setPage(1))
  }

  return (
    <TableContainer component={Paper} className="tableTags">
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 75, 100]}
        colSpan={3}
        count={totalPages}
        rowsPerPage={rowsPerPage}
        page={page - 1}
        slotProps={{
          select: {
            inputProps: {
              "aria-label": "rows per page",
            },
            native: true,
          },
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Table>
        <TagTableHead order={order} setOrder={() => dispatch(setOrder())} />
        <TagTableBody isLoading={isLoading} error={error} tags={tags} />
      </Table>
    </TableContainer>
  )
}

export default TagTable
