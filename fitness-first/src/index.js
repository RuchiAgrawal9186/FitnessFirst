import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="1053018327165-t2oe92vahvq8s9of2n6tlmk52amtudph.apps.googleusercontent.com">
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  </GoogleOAuthProvider>
);

reportWebVitals();
