import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import './index.css'
import store from './redux/store'
import { Provider } from 'react-redux'

const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)