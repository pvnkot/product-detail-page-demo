export type ProductIds = string[];

export interface ProductDetails {
  id: string;
  title: string;
  image?: string;
  subtitle?: string;
  brand: string;
}

export interface ApiResponsePayload<T> {
  status: 'loading' | 'success' | 'failure';
  value: T | undefined;
}
