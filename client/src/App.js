import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import MapPage from './pages/MapPage';
import './App.css';

export default function App () {



  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/map' element={<MapPage />} />
      </Routes>
    </div>
  );
}
