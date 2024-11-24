import { Layout } from 'antd';
import StacklineLogo from 'src/assets/stackline_logo.svg?react';

export const Header = () => {
  return (
    <Layout
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: '#052849',
        padding: '16px',
        width: '100%',
        maxWidth: '100%',
        height: '20%',
      }}
    >
      <StacklineLogo width="100px" />
    </Layout>
  );
};
