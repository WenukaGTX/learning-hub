import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PublicClientApplication, EventType } from '@azure/msal-browser';
import { msalConfig } from './utilities/authConfig';

export const msalInstance = new PublicClientApplication(msalConfig);

// Asynchronous initialization
(async () => {
  try {
    // Initialize MSAL instance
    await msalInstance.initialize();
  } catch (error) {
    console.error('MSAL initialization error:', error);
  }
})();

// Listening to sisgn in event & setting active account
// msalInstance.addEventCallback((event) => {
//   if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
//     const account = event.payload.account;
//     msalInstance.setActiveAccount(account);
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App instance={msalInstance} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
