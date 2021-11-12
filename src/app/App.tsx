import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stuff from './pages/Stuff/Stuff';
import Dashboard from './pages/Dashboard/Dashboard';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Stuff">
          <Route path=":chosenThing" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
