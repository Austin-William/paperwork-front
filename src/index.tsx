import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react"

import App from './App';

import 'react-calendar/dist/Calendar.css';
import "./i18n/i18n";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Analytics />
  </StrictMode>,
  document.getElementById('root')
);
