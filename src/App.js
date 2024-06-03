import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About-us';
import Contact from './pages/Contact'
import { Suspense, useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Products from './pages/Products';
import Services from './pages/Services';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])

  return (
    <div className='App'>
      {loading ?
       <Loader />
       :
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={
          <Suspense fallback={<Loader />}>
            <HomePage/>
          </Suspense>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products/>}/>
        </Routes>
        <Footer/>
      </Router>
      }
    </div>
  );
}

export default App;
