import React from 'react';
import Landing from './pages/Landing';
import Map from './pages/Map';
import axios from 'axios';
import './App.css';

export default function App () {



  return (
    <div>
      <Switch>
        <Route path='/'>
          <Landing/>
        </Route>
        <Route exact path='/map'>
          <Map />
        </Route>
      </Switch>
    </div>
  );
}
