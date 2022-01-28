import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './components/Pages/aboutMe';
import Contact from './components/Pages/contactMe';
import Resume from './components/Pages/Resume';
import Projects from './components/Pages/Projects';
import Header from './components/Header';
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import { Formik, Field, Form } from 'formik';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path = '/' element={<Header />}/>
      <Route path="contactMe" element={<Contact />} />
      <Route path="aboutMe" element={<About />} />
      <Route path="Resume" element={<Resume />} />
      <Route path="Projects" element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
