export const enum GET_PRODUCT_DETAILS_ACTION {
  PENDING = 'GET_PRODUCT_DETAILS_BY_ID_PENDING',
  SUCCESS = 'GET_PRODUCT_DETAILS_BY_ID_SUCCESS',
  FAILURE = 'GET_PRODUCT_DETAILS_BY_ID_FAILURE',
}

export const enum GET_PRODUCTS_LIST_ACTION {
  PENDING = 'GET_PRODUCTS_LIST_PENDING',
  SUCCESS = 'GET_PRODUCTS_LIST_SUCCESS',
  FAILURE = 'GET_PRODUCTS_LIST_FAILURE',
}

export type ACTION = GET_PRODUCT_DETAILS_ACTION | GET_PRODUCTS_LIST_ACTION;
