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
    sorter: (a, b) => a.weekEnding.localeCompare(b.weekEnding),
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Retail Sales',
    dataIndex: 'retailSales',
    key: 'retailSales',
    render: (retailSales: number) => <p>{getCurrencyInUSD(retailSales)}</p>,
    sorter: (a, b) => a.retailSales - b.retailSales,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Wholesale Sales',
    dataIndex: 'wholesaleSales',
    key: 'wholesaleSales',
    render: (wholesaleSales: number) => (
      <p>{getCurrencyInUSD(wholesaleSales)}</p>
    ),
    sorter: (a, b) => a.wholesaleSales - b.wholesaleSales,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Units sold',
    dataIndex: 'unitsSold',
    key: 'unitsSold',
    render: (text) => <p>{text}</p>,
    sorter: (a, b) => a.unitsSold - b.unitsSold,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Retailer Margin',
    dataIndex: 'retailerMargin',
    key: 'retailerMargin',
    render: (retailerMargin: number) => (
      <p>{getCurrencyInUSD(retailerMargin)}</p>
    ),
    sorter: (a, b) => a.retailerMargin - b.retailerMargin,
    sortDirections: ['descend', 'ascend'],
  },
];
