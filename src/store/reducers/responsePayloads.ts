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

export interface ApiResponsePayload<T> {
  status: 'loading' | 'success' | 'failure';
  value: T | undefined;
}
