import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Login, Home, Register, Dashboard, Inputkosan, KosanPage, Profil, AddKamarKos } from './pages';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/:nama" element={<Profil/>}/>
        <Route path="/kosan/:namakos" element={<KosanPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/inputkos" element={<Inputkosan/>}/>
        <Route path="/kosan/:namakos/inputkamarkos" element={<AddKamarKos/>}/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
