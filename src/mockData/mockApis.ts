import mockAssessmentData from 'src/mockData/mockAssessmentData.json';

interface SalesReportRecord {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface CustomerReviewRecord {
  customer: string;
  review: string;
  score: number;
}
interface RawResponse {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews?: CustomerReviewRecord[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: SalesReportRecord[];
}

const getRawResponse = (): RawResponse[] => mockAssessmentData as RawResponse[];

export const getProductHighlights = (id: string) => {
  const {
    id: productId,
    title,
    image,
    subtitle,
    brand,
    retailer,
    details,
    tags,
  } = getRawResponse().find((product) => product.id === id) || {};

  return {
    id: productId,
    title,
    image,
    subtitle,
    brand,
    retailer,
    details,
    tags,
  };
};

export const getProductsList = () =>
  getRawResponse().map((product) => product.id);

export const getSalesReportsById = (id: string) => {
  const { id: productId, sales: salesReports } =
    getRawResponse().find((product) => product.id === id) || {};

  return { id: productId, salesReportsList: salesReports };
};
