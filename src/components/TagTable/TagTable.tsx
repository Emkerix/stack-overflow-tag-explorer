import { useEffect } from "react"
import { RootState } from "../../redux/store"
import {
  InputLabel,
  Pagination,
  Paper,
  Table,
  TableContainer,
} from "@mui/material"
import TagTableHead from "./TagTableHead/TagTableHead"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  fetchDataThunk,
  setOrder,
  setPage,
  setRowsPerPage,
} from "../../redux/tagExplorerSlice/tagExplorerSlice"
import { Unstable_NumberInput as BaseNumberInput } from "@mui/base/Unstable_NumberInput"
import debounce from "lodash.debounce"
import TagTableBody from "./TagTableBody/TagTableBody"
import "./TagTable.css"

const DEBOUNCE_TIME = 320

function TagTable() {
  const dispatch = useAppDispatch()
  const {
    tags,
    quotaRemaining,
    totalPages,
    isLoading,
    error,
    page,
    order,
    rowsPerPage,
  } = useAppSelector((state: RootState) => state.tagExplorer)

  useEffect(() => {
    dispatch(fetchDataThunk({ page, order, rowsPerPage }))
  }, [dispatch, page, order, rowsPerPage])

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let newRowsPerPage = parseInt(event.target.value, 10)
    if (isNaN(newRowsPerPage)) {
      return
    }
    newRowsPerPage = Math.min(Math.max(newRowsPerPage, 1), 100)
    dispatch(setRowsPerPage(newRowsPerPage))
  }

  return (
    <TableContainer component={Paper} className="tableTags">
      <InputLabel>Number of tags per page:</InputLabel>
      <BaseNumberInput
        required
        min={1}
        max={100}
        slotProps={{
          root: { className: "CustomNumberInput" },
          input: { className: "input" },
        }}
        defaultValue={rowsPerPage}
        onInputChange={debounce(handleRowsPerPageChange, DEBOUNCE_TIME)}
      />
      <Table>
        <TagTableHead order={order} setOrder={() => dispatch(setOrder())} />
        <TagTableBody isLoading={isLoading} error={error} tags={tags} />
      </Table>
      <Pagination
        page={page}
        onChange={(_, value) => dispatch(setPage(value))}
        count={totalPages}
      />
      <p>Number of remaining quota: {quotaRemaining}</p>
    </TableContainer>
  )
}

export default TagTable
