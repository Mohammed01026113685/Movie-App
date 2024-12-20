import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // استيراد Navbar
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* إضافة النافبار هنا */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} /> {/* إضافة صفحة الأفلام */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
