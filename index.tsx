import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// Fix: Explicitly adding the file extension to the import path to resolve module loading issues.
import { App } from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}