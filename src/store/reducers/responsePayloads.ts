export type ProductIds = string[];

export interface ProductDetails {
  productId: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  retailer: string;
  details: string[];
  tags: string[];
}

export interface SalesReportRecord {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface SalesReportsData {
  productId: string;
  salesReportsList: SalesReportRecord[];
}

export interface ApiResponsePayload<T> {
  status: 'loading' | 'success' | 'failure';
  value: T | undefined;
}
