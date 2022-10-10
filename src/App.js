import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Submenu from './components/Submenu';
import SingleProduct from './components/SingleProduct';
import ShoppingCart from './components/ShoppingCart';
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

import {useGlobalContext} from './context'



function App() {
  const {loading} = useGlobalContext()
  if(loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (

    // <ShoppingCart/>
    <BrowserRouter>
      <Navbar />
       <Submenu />
      

     <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/shopping-cart' element={<ShoppingCart/>}/>
        <Route path='shop-all' element={<ShopAll />} />
        <Route path='shop-all/:productId' element={<SingleProduct/>}/>

        <Route path='all-tops' element={<AllTops />} />
        <Route path='all-tops/:productId' element={<SingleProduct/>}/>
        <Route path='short-sleeves' element={<ShortSleeves />} />
        <Route path='short-sleeves/:productId' element={<SingleProduct/>}/>
        <Route path='long-sleeves' element={<LongSLeeves />} />
        <Route path='long-sleeves/:productId' element={<SingleProduct/>}/>
        <Route path='jackets' element={<Jackets />} />
        <Route path='jackets/:productId' element={<SingleProduct/>}/>
        <Route path='hoodies' element={<Hoodies />} />
        <Route path='hoodies/:productId' element={<SingleProduct/>}/>

        <Route path='all-bottoms' element={<AllBottoms />} />
        <Route path='all-bottoms/:productId' element={<SingleProduct/>}/>
        <Route path='shorts' element={<Shorts />} />
        <Route path='shorts/:productId' element={<SingleProduct/>}/>
        <Route path='jogging-pants' element={<JoggingPants />} />
        <Route path='jogging-pants/:productId' element={<SingleProduct/>}/>
        <Route path='tights' element={<Tights />} />
        <Route path='tights/:productId' element={<SingleProduct/>}/>

        <Route path='all-accessories' element={<AllAccessories />} />
        <Route path='all-accessories/:productId' element={<SingleProduct/>}/>
        <Route path='hats' element={<Hats />} />
        <Route path='hats/:productId' element={<SingleProduct/>}/>
        <Route path='sunglasses' element={<Sunglasses />} />
        <Route path='sunglasses/:productId' element={<SingleProduct/>}/>
        <Route path='headphones' element={<Headphones />} />
        <Route path='headphones/:productId' element={<SingleProduct/>}/>

        
        
        <Route path='*' element={<Error />} /> */}
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;

// https://my-clothing-reacts-api.herokuapp.com/products


