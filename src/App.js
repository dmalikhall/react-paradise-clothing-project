import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Submenu from './components/Submenu';
import Home from "./pages/Home";
import ShopAll from './pages/ShopAll';
import AllTops from './pages/AllTops';
import ShortSleeves from './pages/ShortSleeves';
import LongSLeeves from './pages/LongSleeves';
import Jackets from './pages/Jackets';
import Hoodies from './pages/Hoodies';

import AllBottoms from './pages/AllBottoms'; 
import Shorts from './pages/Shorts';
import JoggingPants from './pages/JoggingPants';
import Tights from './pages/Tights';

import AllAccessories from './pages/AllAccessories';
import Hats from './pages/Hats';
import Sunglasses from './pages/Sunglasses';
import Headphones from './pages/Headphones';
import Error from './pages/Error';
import SingleProduct from './components/SingleProduct';



// is it working





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Submenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop-all' element={<ShopAll />} />
        <Route path='shop-all/:productId' element={<SingleProduct/>}/>

        <Route path='all-tops' element={<AllTops />} />
        <Route path='short-sleeves' element={<ShortSleeves />} />
        <Route path='long-sleeves' element={<LongSLeeves />} />
        <Route path='jackets' element={<Jackets />} />
        <Route path='hoodies' element={<Hoodies />} />

        <Route path='all-bottoms' element={<AllBottoms />} />
        <Route path='shorts' element={<Shorts />} />
        <Route path='jogging-pants' element={<JoggingPants />} />
        <Route path='tights' element={<Tights />} />

        <Route path='all-accessories' element={<AllAccessories />} />
        <Route path='hats' element={<Hats />} />
        <Route path='sunglasses' element={<Sunglasses />} />
        <Route path='headphones' element={<Headphones />} />
        <Route path='*' element={<Error/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
