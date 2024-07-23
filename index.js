import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import "./style.css";
// import {Square , Board} from "./app.js"
import App from "./App";
// import App form "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);