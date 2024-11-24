import { Row, Skeleton } from 'antd';

export const ProductHighlightsSkeleton = () => {
  return (
    <Row justify="center">
      <Skeleton.Image active />
      <Skeleton paragraph active />
    </Row>
  );
};
