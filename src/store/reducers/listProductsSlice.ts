import {
  ProductIds,
  ApiResponsePayload,
} from 'src/store/reducers/responsePayloads';
import { createSlice } from '@reduxjs/toolkit';
import { getProductsListDispatch } from '../dispatch/getProductsListDispatch';

const initialState: ApiResponsePayload<ProductIds> = {
  status: 'loading',
  value: undefined,
};

export const productsListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsListDispatch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsListDispatch.fulfilled, (state, action) => {
        state.status = 'success';
        state.value = action.payload;
      })
      .addCase(getProductsListDispatch.rejected, (state) => {
        state.status = 'failure';
      });
  },
});

export const productsListReducer = productsListSlice.reducer;
