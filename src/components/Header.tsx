import { Layout } from 'antd';
import StacklineLogo from 'src/assets/stackline_logo.svg?react';

export const Header = () => {
  return (
    <Layout.Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        color: '#052849',
        padding: '16px',
        width: '100%',
        height: '15%',
      }}
    >
      <StacklineLogo width="100px" />
    </Layout.Header>
  );
};
