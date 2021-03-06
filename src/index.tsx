import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { ApolloProvider } from '@apollo/client';
import { client } from './api/client';
import { setupStore } from './store/store';
import history from './utils/history';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <App />
          </Router>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
