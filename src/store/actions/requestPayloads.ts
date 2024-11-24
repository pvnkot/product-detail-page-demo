export interface GetProductDetailsByIdInput {
  productId: string;
}

export interface GetSalesReportsListByProductIdInput {
  productId: string;
}

export type ApiRequestPayload =
  | GetProductDetailsByIdInput
  | GetSalesReportsListByProductIdInput
  | undefined;
