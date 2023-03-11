import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNewStudent from './components/AddNewStudent';
import MyNavbar from './components/Navbar';
import UpdateForm from './components/UpdateForm';
import { OneStudentDetail } from './components/OneStudentDetail';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MyNavbar/>}/>
      <Route path='/addNewStudent' element={<AddNewStudent/>}/>
      <Route path='/update/:id' element={<UpdateForm/>}/>
      <Route path='/oneStudentDetail/:id' element={<OneStudentDetail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
