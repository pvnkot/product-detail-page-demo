import { getProductsListSelector } from 'src/store/selectors';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getProductsListDispatch } from 'src/store/dispatch/getProductsListDispatch';
import { useEffect } from 'react';
import { Col, Flex, Row, Space, theme } from 'antd';
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
        <Row style={{ maxWidth: '100vw', height: '100%' }} gutter={16}>
          <Col span={8}>
            <ProductHighlights productId={productsListState.value?.[0] || ''} />
          </Col>
          <Col span={16}>
            <SalesDataTable productId={productsListState.value?.[0] || ''} />
          </Col>
        </Row>
      </Space>
    </Flex>
  );
};
