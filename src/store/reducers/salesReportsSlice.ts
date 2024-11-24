import { GET_SALES_DATA_ACTION } from 'src/store/actions/constants';
import {
  ProductDetails,
  ApiResponsePayload,
  SalesReportsData,
} from 'src/store/reducers/responsePayloads';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiRequestPayload } from 'src/store/actions/requestPayloads';
import { getSalesReportByProductIdDispatch } from 'src/store/dispatch/getSalesReportsDispatch';

const initialState: ApiResponsePayload<SalesReportsData> = {
  status: 'loading',
  value: undefined,
};

const reducer = (
  state = initialState,
  action: PayloadAction<ApiRequestPayload>
): ApiResponsePayload<SalesReportsData> | undefined => {
  switch (action.type) {
    case GET_SALES_DATA_ACTION.PENDING: {
      state.status = 'loading';
      state.value = undefined;

      return state;
    }
    case GET_SALES_DATA_ACTION.SUCCESS: {
      state.status = 'success';
      state.value = initialState.value;

      return state;
    }
    case GET_SALES_DATA_ACTION.FAILURE: {
      state.status = 'failure';
      state.value = undefined;

      return state;
    }
    default:
      return state;
  }
};

export const salesReportsListSlice = createSlice({
  name: 'salesReports',
  initialState,
  reducers: {
    getSalesReportsById: reducer,
  },
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
