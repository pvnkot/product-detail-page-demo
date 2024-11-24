import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import App from 'src/App.tsx';
import { ConfigProvider, theme } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            // Seed Token
            borderRadius: 2,

            // Alias Token
            colorBgContainer: '#f6f8fa',
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
