import { GET_PRODUCTS_LIST_ACTION } from 'src/store/actions/constants';
import {
  ProductIds,
  ApiResponsePayload,
} from 'src/store/reducers/responsePayloads';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ApiRequestPayload } from 'src/store/actions/requestPayloads';
import { getProductsListDispatch } from '../dispatch/getProductsListDispatch';

const initialState: ApiResponsePayload<ProductIds> = {
  status: 'loading',
  value: undefined,
};

const reducer = (
  state = initialState,
  action: PayloadAction<ApiRequestPayload>
): ApiResponsePayload<ProductIds> | undefined => {
  switch (action.type) {
    case GET_PRODUCTS_LIST_ACTION.PENDING: {
      state.status = 'loading';
      state.value = undefined;

      return state;
    }
    case GET_PRODUCTS_LIST_ACTION.SUCCESS: {
      state.status = 'success';

      return state;
    }
    case GET_PRODUCTS_LIST_ACTION.FAILURE: {
      state.status = 'failure';
      state.value = undefined;

      return state;
    }
    default:
      return state;
  }
};

export const productsListSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsList: reducer,
  },
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
