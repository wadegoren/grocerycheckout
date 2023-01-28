import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

