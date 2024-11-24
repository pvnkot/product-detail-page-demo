import { getProductsListSelector } from 'src/store/selectors';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getProductsListDispatch } from 'src/store/dispatch/getProductsListDispatch';
import { useEffect } from 'react';
import { Flex, Layout, Row, theme } from 'antd';
import { Header } from './Header';
import { ProductHighlights } from 'src/components/product-highlights/ProductHighlights';
import { SalesDataTable } from 'src/components/sales-data-table/SalesDataTable';

const { useToken } = theme;

export const Home = () => {
  const { token } = useToken();
  const productsListState = useAppSelector(getProductsListSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsListDispatch());
  }, [getProductsListDispatch]);

  if (productsListState.status !== 'success') {
    return <div>{productsListState.status}</div>;
  }

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

        <Row style={{ maxWidth: '100%', height: '100%', gap: '16px' }}>
          <ProductHighlights productId={productsListState.value?.[0] || ''} />
          <SalesDataTable productId={productsListState.value?.[0] || ''} />
        </Row>
      </Layout>
    </Flex>
  );
};
