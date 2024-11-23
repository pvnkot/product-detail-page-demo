import { RootState } from 'src/store';

export const getProductDetailsByIdSelector = (state: RootState) =>
  state.productDetails;
