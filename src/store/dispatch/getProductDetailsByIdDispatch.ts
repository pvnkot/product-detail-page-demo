import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetProductDetailsByIdInput } from '../actions/requestPayloads';
import { getProductDetailsByIdFromServer } from 'src/apis/getProductDetailsById';

export const enum Dispatch {
  GetProductDetailsById = 'productDetailsById',
}

const getProductDetailsById = (
  productDetailsByIdInput: GetProductDetailsByIdInput
) => getProductDetailsByIdFromServer(productDetailsByIdInput);

export const getProductDetailsByIdDispatch = createAsyncThunk(
  Dispatch.GetProductDetailsById,
  async ({ productId }: GetProductDetailsByIdInput) => {
    const response = await getProductDetailsById({ productId });
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
