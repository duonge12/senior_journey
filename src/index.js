import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calendar from './components/Calendar';
import { Form } from './components/Forms';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='flex flex-col justify-center bg-pink-500 p-2 gap-5 h-[1000px]'>
    <span>Form</span>
    <Form />
    <span>Calendar</span>
    <Calendar />
  </div>
);

