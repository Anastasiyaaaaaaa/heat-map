import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import './index.css'

const domContainer = document.querySelector('#root');
const root = createRoot(domContainer);
root.render(<App />);