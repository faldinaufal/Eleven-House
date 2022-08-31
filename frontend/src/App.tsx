import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login, Home, Register } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
