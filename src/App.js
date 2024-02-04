import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Product from './pages/Product';
import Company from './pages/Company';

import Footer from './components/Footer/Footer';
import Gallery from './pages/Gallery';
import Paper from './pages/Paper';
import Contact from './pages/Contact';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Search from './components/Search';


function App() {
  return (
    <>
      <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/product' element={ <Product /> } />
          <Route path='/company' element={ <Company /> } />
          <Route path='/gallery' element={ <Gallery /> } />
          <Route path='/paper' element={ <Paper /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/search/:slug' element={ <Search /> } />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
