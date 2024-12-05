import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Calendar, Form } from './components';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flex justify-center bg-pink-500 p-2'>
    <Calendar />
  </div>
);

