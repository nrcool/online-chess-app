import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Lobby from './components/Lobby';
import Room from './components/Room';
import CreateRoom from './components/CreateRoom';
import Home from './components/Home';
import Protected from './components/Protected';
import Navigation from './components/Navigation';
import Profile from './components/Profile';



function App() {
  return (
    <div style={{margin:"0",padding:"0"}}>
      <Navigation/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/lobby" element={<Protected><Lobby/></Protected> } />
        <Route path="/lobby/:id" element={<Room/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/createroom" element={<CreateRoom/>} />





      </Routes>

      </div>
  );
}

export default App;