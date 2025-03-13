// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBook from './AddBook';
import BookCard from './components/BookCard';

function App() {
  return (
   <Router>
    <div className='routes'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addBook' element={<AddBook/>}/>
        <Route path='/bookCard' element={<BookCard/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;
