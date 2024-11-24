import { getProductsListSelector } from 'src/store/selectors';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getProductsListDispatch } from 'src/store/dispatch/getProductsListDispatch';
import { useEffect } from 'react';
import { Flex, Layout, theme } from 'antd';
import { Header } from './Header';
import { ProductHighlights } from './product-highlights/ProductHighlights';

const { useToken } = theme;

export const Home = () => {
  const { token } = useToken();
  const productsList = useAppSelector(getProductsListSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsListDispatch());
  }, [getProductsListDispatch]);

  return (
    <Flex>
      <Layout
        style={{
          width: '100%',
          height: '100vh',
          color: token.colorBgContainer,
          gap: '8px',
        }}
      >
        <Header />

        <Layout>
          <ProductHighlights productId={productsList.value?.[0] || ''} />
          <Layout.Content>Main content</Layout.Content>
        </Layout>
      </Layout>
    </Flex>
  );
};
