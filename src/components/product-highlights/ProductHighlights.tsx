import { Flex, Layout } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getProductDetailsByIdDispatch } from 'src/store/dispatch/getProductDetailsByIdDispatch';
import { getProductsListDispatch } from 'src/store/dispatch/getProductsListDispatch';
import {
  getProductDetailsByIdSelector,
  getProductsListSelector,
} from 'src/store/selectors';

export const ProductHighlights = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();
  const productDetailsState = useAppSelector(getProductDetailsByIdSelector);

  useEffect(() => {
    dispatch(getProductDetailsByIdDispatch({ productId }));
  }, []);

  if (productDetailsState.status !== 'success') {
    return <div>{productDetailsState.status}</div>;
  }

  console.log({ productDetailsState });

  return (
    <Layout.Sider
      style={{
        backgroundColor: '#000000',
        alignItems: 'center',

        height: '100%',
        gap: '8px',
        width: '30%',
        textDecorationColor: '#15141A',
      }}
    >
      <strong>{productDetailsState.value?.title}</strong>
      <p>{productDetailsState.value?.subtitle}</p>
    </Layout.Sider>
  );
};
