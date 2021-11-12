import React from 'react';
import Login from './pages/Login';
import MapPage from './pages/MapPage';
import axios from 'axios';
import './App.css';

export default function App () {



  return (
    <div>
      <Switch>
        <Route path='/'>
          <Login/>
        </Route>
        <Route exact path='/map'>
          <MapPage />
        </Route>
      </Switch>
    </div>
  );
}
