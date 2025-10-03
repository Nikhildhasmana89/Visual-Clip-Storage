import React from "react";
import './index.css';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { BrowserRouter } from "react-router-dom";  

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>   
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
