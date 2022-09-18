import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login, Home, Register, Dashboard, Inputkosan } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/kosan/:namakos" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/inputkos" element={<Inputkosan/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
