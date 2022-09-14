import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login, Home, Register, Dashboard } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
