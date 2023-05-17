import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './components/favorites/Favorites';
import Description from './components/Description';
import Form from './components/Form';
import "./App.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Basket from './components/basket/Basket';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';

export const AppContext = React.createContext({})

function App() {
// Хранение данных туров
const [tyrs, setTyrs] = useState([]);
//для избранных туров
const [favorites, setFavorites] = useState([]);
//для корзины
const [overlayItems, setOverlayItems] = useState([]);

useEffect(()=> {
  async function axiosData(){
    const tyrsData = await axios.get('https://6423aad177e7062b3e366639.mockapi.io/tyrs')
    const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')
    const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')

    setTyrs(tyrsData.data)
    setFavorites(favoritesData.data)
    setOverlayItems(cartData.data)
  }
axiosData();
},[])

const deleteItems=(id)=>{
  axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)
  setOverlayItems((objDelete)=>objDelete.filter(item=>item.id !== id))
}

const isAdded=(myId)=>{
  return overlayItems.some((objIsAdded)=> objIsAdded.myId === myId)
}

const isFav=(myId)=>{
  return favorites.some((objIsFav)=> objIsFav.myId === myId)
}

  return (
    <AppContext.Provider value={{tyrs, setTyrs, overlayItems, setOverlayItems, favorites, setFavorites, isAdded, isFav}}>
    <div>
      <Router>
        <Header/>
          <Routes>
            <Route path='/favorites' 
              element={
                <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                item={tyrs}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}/>
                } 
                />
            <Route path='/' 
              element={
                <Home 
                item={tyrs}
                favorites={favorites}
                setFavorites={setFavorites}                
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}/>
                } 
                />
            <Route path='/description' element={<Description/>}/>             
            <Route path='/form' element={<Form/>}/>
            <Route path='/cart' 
              element={
              <Basket
              totalPrice={
                overlayItems.reduce((element = overlayItems.length, obj)=>
                element+obj.price,0
                )
              }
              overlayProp={overlayItems}
              deleteItems={deleteItems}
              />}/>        
        </Routes>
      </Router>
      <Footer/>       
    </div>
    </AppContext.Provider>
  );
}

export default App;
