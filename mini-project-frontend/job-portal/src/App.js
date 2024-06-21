import React from 'react';
import { BrowserRouter, Route, Routes , Navigate } from "react-router-dom"
import About from './pages/aboutUspage';
import MainPage from './pages/mainpage';
import AllJobs from './pages/allJobspage';
import ContactUs from './pages/contactUspage';
import Account from './pages/Accountpage';
import Register from './components/register';
import Login from './components/login';
import PostJob from './pages/postJob';
import axios from 'axios';
import { useEffect } from 'react';
function App() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/postJob' element={<PostJob/>} />
            <Route path='/Accountpage' element={<Account/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/contactUspage' element={<ContactUs/>} />
            <Route path='/aboutUspage' element={<About/>} />
            <Route path='/allJobspage' element={<AllJobs/>} />
            <Route path='/' exact element={<MainPage/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
