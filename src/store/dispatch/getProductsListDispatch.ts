import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsListFromServer } from 'src/apis/getProductDetailsById';

export const enum Dispatch {
  GetProductDetailsById = 'productDetailsById',
  GetProductsList = 'productsList',
}

const getProductsList = () => getProductsListFromServer();

export const getProductsListDispatch = createAsyncThunk(
  Dispatch.GetProductsList,
  async () => {
    const response = await getProductsList();
    return response.data;
  }
);
