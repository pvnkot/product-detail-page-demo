import { Card, Divider, Tag } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/store';
import { getProductDetailsByIdDispatch } from 'src/store/dispatch/getProductDetailsByIdDispatch';
import { getProductDetailsByIdSelector } from 'src/store/selectors';

export const ProductHighlights = ({ productId }: { productId: string }) => {
  const dispatch = useAppDispatch();
  const productDetailsState = useAppSelector(getProductDetailsByIdSelector);
  const productTags = productDetailsState.value?.tags;

  useEffect(() => {
    dispatch(getProductDetailsByIdDispatch({ productId }));
  }, [productId]);

  if (productDetailsState.status !== 'success') {
    return <div>{productDetailsState.status}</div>;
  }

  console.log({ productDetailsState });

  return (
    <Card
      style={{
        backgroundColor: '#fffff',
        height: '100%',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={productDetailsState.value?.image}
        style={{
          height: '150px',
          width: '150px',
        }}
      />

      <p style={{ fontWeight: 'bold', fontSize: '24px' }}>
        {productDetailsState.value?.title}
      </p>

      <p style={{ color: 'grey' }}>{productDetailsState.value?.subtitle}</p>
      {!!productTags && productTags?.length > 0 && (
        <>
          <Divider />
          {productTags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
          <Divider />
        </>
      )}
    </Card>
  );
};
