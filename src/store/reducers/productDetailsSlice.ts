import { GET_PRODUCT_DETAILS_ACTION } from 'src/store/actions/constants';
import {
  ProductDetails,
  ApiResponsePayload,
} from 'src/store/reducers/responsePayloads';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiRequestPayload } from 'src/store/actions/requestPayloads';
import { getProductDetailsByIdDispatch } from 'src/store/dispatch/getProductDetailsByIdDispatch';

const initialState: ApiResponsePayload<ProductDetails> = {
  status: 'loading',
  value: undefined,
};

const reducer = (
  state = initialState,
  action: PayloadAction<ApiRequestPayload>
): ApiResponsePayload<ProductDetails> | undefined => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS_ACTION.PENDING: {
      // return API response
      state.status = 'loading';
      state.value = undefined;

      return state;
    }
    case GET_PRODUCT_DETAILS_ACTION.SUCCESS: {
      state.status = 'success';
      state.value = initialState.value;

      return state;
    }
    case GET_PRODUCT_DETAILS_ACTION.FAILURE: {
      state.status = 'failure';
      state.value = undefined;

      return state;
    }
    default:
      return state;
  }
};

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    getProductDetailsById: reducer,
  },
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
