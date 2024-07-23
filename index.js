import React from 'react';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";
import {Board} from "./app.js"
// import App from "./app";
// import App from "./app.js";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <Board />
    </StrictMode>
);
