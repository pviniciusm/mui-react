import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { Cards } from './pages/Cards/Cards';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cards" element={<Cards />} />
        <Route path="/*" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
};
