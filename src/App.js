import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Product from './pages/Product';
import Company from './pages/Company';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Gallery from './pages/Gallery';
import Paper from './pages/Paper';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/product' element={ <Product /> } />
          <Route path='/company' element={ <Company /> } />
          <Route path='/gallery' element={ <Gallery /> } />
          <Route path='/paper' element={ <Paper /> } />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
