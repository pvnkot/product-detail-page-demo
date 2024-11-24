import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { productDetailsReducer } from 'src/store/reducers/productDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { productsListReducer } from 'src/store/reducers/listProductsSlice';

export const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    productsList: productsListReducer,
  },
});

console.log({ uponConfiguration: store.getState() });

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
