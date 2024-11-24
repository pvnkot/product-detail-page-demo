import {
  ApiResponsePayload,
  SalesReportsData,
} from 'src/store/reducers/responsePayloads';
import { createSlice } from '@reduxjs/toolkit';
import { getSalesReportByProductIdDispatch } from 'src/store/dispatch/getSalesReportsDispatch';

const initialState: ApiResponsePayload<SalesReportsData> = {
  status: 'loading',
  value: undefined,
};

export const salesReportsListSlice = createSlice({
  name: 'salesReports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSalesReportByProductIdDispatch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSalesReportByProductIdDispatch.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      })
      .addCase(getSalesReportByProductIdDispatch.rejected, (state) => {
        state.status = 'failure';
      });
  },
});

export const salesReportsListReducer = salesReportsListSlice.reducer;
