import React from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';

const root = createRoot(document.getElementById('root'));
root.render(<h1 className="text-3xl font-bold underline text-red-500">Hello World</h1>);
