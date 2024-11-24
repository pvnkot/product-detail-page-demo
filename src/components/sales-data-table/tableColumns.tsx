import { TableProps } from 'antd';
import { SalesReportRecord } from 'src/store/reducers/responsePayloads';
import currency from 'currency.js';

const getCurrencyInUSD = (value: number) =>
  currency(value, { symbol: '$', precision: 0 }).format();

export const columns: TableProps<SalesReportRecord>['columns'] = [
  {
    title: 'Week ending',
    dataIndex: 'weekEnding',
    key: 'weekEnding',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Retail Sales',
    dataIndex: 'retailSales',
    key: 'retailSales',
    render: (retailSales: number) => <p>{getCurrencyInUSD(retailSales)}</p>,
  },
  {
    title: 'Wholesale Sales',
    dataIndex: 'wholesaleSales',
    key: 'wholesaleSales',
    render: (wholesaleSales: number) => (
      <p>{getCurrencyInUSD(wholesaleSales)}</p>
    ),
  },
  {
    title: 'Units sold',
    dataIndex: 'unitsSold',
    key: 'unitsSold',
    render: (text) => <p>{text}</p>,
  },
  {
    title: 'Retailer Margin',
    dataIndex: 'retailerMargin',
    key: 'retailerMargin',
    render: (retailerMargin: number) => (
      <p>{getCurrencyInUSD(retailerMargin)}</p>
    ),
  },
];
