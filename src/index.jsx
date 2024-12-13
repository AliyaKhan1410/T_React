//src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css'; // Ensure this path is correct
import App from './App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
