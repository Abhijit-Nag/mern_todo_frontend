import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Task from './components/task/Task';
import Modal from './components/modalInputBox/Modal';
import Tasks from './components/tasks/Tasks';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login';

function App() {
  // const [open, setOpen]= useState(true);
// console.log(open);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
