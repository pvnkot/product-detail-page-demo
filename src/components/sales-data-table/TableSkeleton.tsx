import { Row, Skeleton } from 'antd';

export const TableSkeleton = () => {
  return (
    <Row style={{ height: '100%' }} justify="center">
      <Skeleton active />
    </Row>
  );
};
