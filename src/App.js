import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Submenu from './components/Submenu';
import Home from "./pages/Home";
import ShopAll from './pages/ShopAll';
import AllTops from './pages/AllTops';
import AllAccessories from './pages/AllAccessories';
import AllBottoms from './pages/AllBottoms'; 
import Error from './pages/Error';



// is it working





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Submenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop-all' element={<ShopAll />} />
        <Route path='all-tops' element={<AllTops />} />
        <Route path='all-bottoms' element={<AllBottoms />} />
        <Route path='all-accessories' element={<AllAccessories />} />
        <Route path='*' element={<Error/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
