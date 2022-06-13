import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './container/App';
import { store } from './redux/store/store';
import { ChakraProvider } from '@chakra-ui/react';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Kdam Thmor Pro', sans-serif;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <GlobalStyle />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
