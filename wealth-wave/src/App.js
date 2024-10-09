import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container } from 'react-bootstrap';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import MarketWatch from './components/TradingViewWidget';
import Chart from './components/Chart';
import NiftySensexChart from './components/NiftySensexChart';
import TradingViewWidget from './components/TradingViewWidget';
import SIPCalculator from './components/SIPCalculator';
import CartNavbar from './components/CartNavbar';
import Store from './pages/Store';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import { CartProvider } from './CartContext';
import Clubform from './components/Clubform';
import DiscussionBoard from './pages/DiscussionBoard';
import Signup from './components/Signup';
import About from './components/About';
import Blog from './components/Blog';
import Register from './components/Register';
import Login from './components/LogIn';

function App() {
  return (
    <CartProvider>   
     
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/cancel" element={<Cancel />}></Route>
        <Route path='market' element={<TradingViewWidget />}></Route>
        <Route path='sip' element={<SIPCalculator />}></Route>
        <Route path='navbar' element={<CartNavbar />}></Route>
        <Route path='store' element={<Store />}></Route>
        <Route path='club' element={<Clubform />}></Route>
        <Route path='discuss' element={<DiscussionBoard />}></Route>
        <Route path='blog' element={<Blog />}></Route>
{/* 
      <CartNavbar>
        <BrowserRouter>
        <Routes>
          <Route index element={<Store />}></Route>
          <Route path='success' element={<Success />}></Route>
          <Route path='cancel' element={<Cancel />}></Route>
        </Routes>
        </BrowserRouter>

      </CartNavbar>
     <Success /> */}
     </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
