"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';
import Allcard from './components/allcard';
import HotelDetails from './components/hoteldetails';
import Topguest from './components/topguest';
import './global.css';

export default function Home() {
  return (
    <div>
      <Topguest />
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Allcard />} />
          <Route path="/hotel-details/:hotelId" element={<HotelDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
