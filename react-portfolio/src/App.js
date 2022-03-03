import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar>
    </Navbar>
    {/* <Footer>
    </Footer> */}
    </>
  );
}

export default App;
