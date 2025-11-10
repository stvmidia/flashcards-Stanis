import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
// Fix: The import is correct, but it was failing because './App.tsx' was an empty file and thus not a valid module.
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