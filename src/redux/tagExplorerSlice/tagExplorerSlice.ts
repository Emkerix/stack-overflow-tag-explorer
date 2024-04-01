import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { TagExplorerState, TagResponse } from "../../types"
import axios, { AxiosResponse } from "axios"

const initialState: TagExplorerState = {
  page: 1,
  totalPages: 0,
  rowsPerPage: 10,
  order: "asc",
  tags: [],
  isLoading: false,
  error: {},
}

const FILTER = "!nNPvSNVZJS"

export const fetchDataThunk = createAsyncThunk(
  "tagExplorer/fetchData",
  async (
    {
      page,
      order,
      rowsPerPage,
    }: {
      page: number
      order: string
      rowsPerPage: number
    },
    { dispatch }
  ) => {
    try {
      const URL = `https://api.stackexchange.com/2.3/tags?page=${page}&order=${order}&sort=name&pagesize=${rowsPerPage}&site=stackoverflow&filter=${FILTER}`

      const response: AxiosResponse<TagResponse> = await axios.get(URL)

      return response.data
    } catch (error) {
      dispatch(setError(error))
    }
  }
)

const tagExplorerSlice = createSlice({
  name: "tagExplorer",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload
    },
    setRowsPerPage: (state, action) => {
      state.rowsPerPage = action.payload
    },
    setOrder: (state) => {
      state.order = state.order === "asc" ? "desc" : "asc"
    },
    setTags: (state, action) => {
      state.tags = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload.response.data
      state.isLoading = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state) => {
        state.isLoading = true
        state.error = {}
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        if (!action.payload) return
        state.error = {}

        if ("error_id" in action.payload) {
          state.error = action.payload
        } else {
          state.tags = action.payload.items
          state.totalPages = Math.ceil(action.payload.total / state.rowsPerPage)
        }

        state.isLoading = false
      })
      .addCase(fetchDataThunk.rejected, (state) => {
        state.error = {
          error_id: 0,
          error_message: "Unexpected Error",
          error_name: "Unexpected Error",
        }
        state.isLoading = false
      })
  },
})

export const {
  setPage,
  setTotalPages,
  setRowsPerPage,
  setOrder,
  setTags,
  setLoading,
  setError,
} = tagExplorerSlice.actions

export default tagExplorerSlice.reducer
