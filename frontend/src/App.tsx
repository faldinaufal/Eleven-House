import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route/>
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
