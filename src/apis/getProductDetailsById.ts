import { getProductHighlights, getProductsList } from 'src/mockData/mockApis';
import { ApiRequestPayload } from 'src/store/actions/requestPayloads';

export const getProductDetailsByIdFromServer = (input: ApiRequestPayload) => {
  console.log({ requestBeforeServerCall: input });
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => {
      resolve({
        data: getProductHighlights(input?.productId || ''),
      });
    }, 500)
  );
};

export const getProductsListFromServer = () => {
  console.log('in getProductsList call to server');
  return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => {
      resolve({
        data: getProductsList(),
      });
    }, 500)
  );
};
