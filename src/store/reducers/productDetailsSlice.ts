import {
  ProductDetails,
  ApiResponsePayload,
} from 'src/store/reducers/responsePayloads';
import { createSlice } from '@reduxjs/toolkit';
import { getProductDetailsByIdDispatch } from 'src/store/dispatch/getProductDetailsByIdDispatch';

const initialState: ApiResponsePayload<ProductDetails> = {
  status: 'loading',
  value: undefined,
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetailsByIdDispatch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductDetailsByIdDispatch.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      })
      .addCase(getProductDetailsByIdDispatch.rejected, (state) => {
        state.status = 'failure';
      });
  },
});

export const productDetailsReducer = productDetailsSlice.reducer;
