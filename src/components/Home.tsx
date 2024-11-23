import { getProductDetailsByIdSelector } from 'src/store/selectors';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getProductDetailsByIdDispatch } from 'src/store/dispatch/getProductDetailsByIdDispatch';
import { useEffect } from 'react';

export const Home = () => {
  const productDetails = useAppSelector(getProductDetailsByIdSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductDetailsByIdDispatch({ productId: 'Foo' }));
    console.log({ getProductDetailsByIdDispatch });
  }, []);

  return <div>{JSON.stringify(productDetails)}</div>;
};
