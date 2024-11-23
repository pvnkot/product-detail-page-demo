import { productDetailsSlice } from 'src/store/reducers/productDetailsSlice';

// Export the generated action creators for use in components
export const { getProductDetailsById } = productDetailsSlice.actions;
