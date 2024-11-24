import { getProductsListSelector } from 'src/store/selectors';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getProductsListDispatch } from 'src/store/dispatch/getProductsListDispatch';
import { useEffect } from 'react';
import { Col, Flex, Row, Space, Spin, theme } from 'antd';
import { Header } from './Header';
import { ProductHighlights } from 'src/components/product-highlights/ProductHighlights';
import { SalesDataTable } from 'src/components/sales-data-table/SalesDataTable';
import { RetailSalesLineChart } from './retail-sales-plot/RetailSalesLineChart';

const { useToken } = theme;

export const Home = () => {
  const { token } = useToken();
  const productsListState = useAppSelector(getProductsListSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsListDispatch());
  }, [getProductsListDispatch]);

  const productId = productsListState.value?.[0] || '';

  if (productsListState.status === 'failure') {
    return null; // TODO implement error status
  }

  return productsListState.status === 'loading' ? (
    <Flex justify="center" style={{ height: '100%', width: '100%' }}>
      <Spin size="large" />
    </Flex>
  ) : (
    <Flex
      vertical
      style={{
        maxWidth: '100vw',
        height: 'vmax',
        color: token.colorBgContainer,
      }}
    >
      <Space size="small" direction="vertical" style={{ maxWidth: '100vw' }}>
        <Header />
        <Row style={{ maxWidth: '100vw', height: '100%' }} gutter={[16, 32]}>
          <Col span={8}>
            <ProductHighlights productId={productId} />
          </Col>
          <Col span={16}>
            <RetailSalesLineChart productId={productId} />
            <SalesDataTable productId={productsListState.value?.[0] || ''} />
          </Col>
        </Row>
      </Space>
    </Flex>
  );
};
