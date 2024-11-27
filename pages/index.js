// inspiration
// https://m7mad.dev/



// header that appears after passing about section
// cards for my projects

// how to use scroll animations
// https://www.youtube.com/watch?v=5noL_qFobm0&t=5s


import MySite from './mySite.js';
import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('mainContent'));

root.render(
   <React.StrictMode>
      <HashRouter>
      <Routes>
        <Route path="/" element={<MySite />} />
        <Route path="*" element={<MySite />} />
      </Routes>
      </HashRouter>
   </React.StrictMode>
);