import { Col, Card } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getSalesReportByProductIdDispatch } from 'src/store/dispatch/getSalesReportsDispatch';
import { getSalesReportsListSelector } from 'src/store/selectors';

export const SalesDataTable = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();
  const salesReportsState = useAppSelector(getSalesReportsListSelector);
  const salesReportsList = salesReportsState.value?.salesReportsList;

  useEffect(() => {
    dispatch(getSalesReportByProductIdDispatch({ productId }));
  }, [productId]);

  if (salesReportsState.status !== 'success') {
    return <div>{salesReportsState.status}</div>;
  }

  console.log({ salesReportsState });
  return (
    <Card
      style={{
        backgroundColor: '#fffff',
        height: '100%',
        maxWidth: '75%',
      }}
    >
      <Col style={{ width: '100%', height: '100%' }}>
        {salesReportsList &&
          salesReportsList?.length > 0 &&
          salesReportsList.map((report) => <div>{report.retailSales}</div>)}
        {salesReportsState.status}
        {/* Foo */}
      </Col>
    </Card>
  );
};
