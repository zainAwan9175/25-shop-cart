import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Shop from './Component/Shop';
import Singleproduct from './Component/Singleproduct';
import Shopcontextprovider from './Component/Shopcontex';
import Cart from './Component/Cart';
import Blog from './Component/Blog';
import Navabout from './Component/Navabout';
import Contact from './Component/Contact';
import Singleblog from './Component/Singleblog';
import Login from './Component/Sinup';
import CreatAccount from './Component/CreatAccount';
import Poppost from './Component/Poppost';

function App() {
  return (
    <div className='overflow-x-hidden w-[100%]'>
   
      <BrowserRouter>
      <Shopcontextprovider>
      
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/shop/:id' element={<Singleproduct />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/about' element={<Navabout />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/blog/:id' element={<Singleblog />}></Route>
          <Route path='/signup' element={<Login />}></Route>
          <Route path='/creataccount' element={<CreatAccount />}></Route>
          <Route path='/poplerpost/:id' element={<Poppost />}></Route>
        </Routes>
        <Footer />
          
      </Shopcontextprovider>
      </BrowserRouter>

    </div>
  );
}

export default App;
