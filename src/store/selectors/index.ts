import { RootState } from 'src/store';

export const getProductDetailsByIdSelector = (state: RootState) =>
  state.productDetails;

export const getProductsListSelector = (state: RootState) => state.productsList;

export const getSalesReportsListSelector = (state: RootState) =>
  state.salesReportsList;
