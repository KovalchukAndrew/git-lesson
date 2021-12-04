import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./components/Home";
import {Blog} from "./components/Blog";
import {NotFoundPage} from "./components/NotFoundPage";
import {About} from "./components/About";

function App() {
  return (
      <>
        <header className="App">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/blog" element={<Blog/> }/>
          <Route path="/about" element={<About/> }/>
          <Route path="//404" element={<NotFoundPage/> }/>
          <Route path="*" element={<Navigate to="/404"/> }/>
        </Routes>
      </>

  );
}

export default App;
