import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetProductDetailsByIdInput } from '../actions/requestPayloads';
import { ProductDetails } from '../reducers/responsePayloads';

export const enum Dispatch {
  GetProductDetailsById = 'productDetailsById',
}

const getProductDetailsById = (
  productDetailsByIdInput: GetProductDetailsByIdInput
) => {
  // the inside "thunk function"
  console.log({ request: productDetailsByIdInput });
  return new Promise<{ data: ProductDetails }>((resolve) =>
    setTimeout(() => {
      resolve({
        data: {
          id: 'DUMMYID1',
          title: 'DEMO product',
          image: 'IMG1',
          brand: 'BRAND1',
        },
      });
    }, 500)
  );
};

export const getProductDetailsByIdDispatch = createAsyncThunk(
  Dispatch.GetProductDetailsById,
  async ({ productId }: GetProductDetailsByIdInput) => {
    const response = await getProductDetailsById({ productId });
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
