
import './App.css';
import  Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { ShopCategories } from './Pages/ShopCategories';
import { Shop } from './Pages/Shop';
import { Products } from './Pages/Products';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import {Footer} from './Components/Footer/Footer';
import men_banner from  './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategories banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategories banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategories banner={kid_banner} category="kid"/>}/>  
        <Route path="products" element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
