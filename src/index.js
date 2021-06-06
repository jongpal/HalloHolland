import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './store/userContext';
import { FarmContextProvider } from './store/farmContext';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <UserContextProvider>
      <FarmContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FarmContextProvider>
    </UserContextProvider>
  </CookiesProvider>,
  document.getElementById('root')
);
