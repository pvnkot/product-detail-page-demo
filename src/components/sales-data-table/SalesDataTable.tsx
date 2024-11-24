import { Card, Table } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getSalesReportByProductIdDispatch } from 'src/store/dispatch/getSalesReportsDispatch';
import { SalesReportRecord } from 'src/store/reducers/responsePayloads';
import { getSalesReportsListSelector } from 'src/store/selectors';
import { columns } from 'src/components/sales-data-table/tableColumns';

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

  return (
    <Card
      style={{
        backgroundColor: '#fffff',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {salesReportsList && salesReportsList?.length > 0 && (
        <Table<SalesReportRecord>
          columns={columns}
          dataSource={salesReportsList}
        />
      )}
    </Card>
  );
};
