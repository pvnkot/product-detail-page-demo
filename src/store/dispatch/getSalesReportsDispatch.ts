import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetSalesReportsListByProductIdInput } from 'src/store/actions/requestPayloads';
import { getSalesReportsFromServer } from 'src/apis/getProductDetailsById';

export const enum Dispatch {
  GetSalesReportsByProductId = 'salesReportsById',
}

const getSalesReportByProductId = (
  productDetailsByIdInput: GetSalesReportsListByProductIdInput
) => getSalesReportsFromServer(productDetailsByIdInput);

export const getSalesReportByProductIdDispatch = createAsyncThunk(
  Dispatch.GetSalesReportsByProductId,
  async ({ productId }: GetSalesReportsListByProductIdInput) => {
    const response = await getSalesReportByProductId({ productId });
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
