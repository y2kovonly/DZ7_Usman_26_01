import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App";
import {store} from "./stores/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
