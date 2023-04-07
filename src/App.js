import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About'
import Detail from './components/Detail';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';



const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '15353fbc4002.05df129e9e3841d3fc3a'


function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
         axios(`${URL_BASE}/${id}?key=${API_KEY}`)
         .then(response => response.data)
         .then((data) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }

      const onClose = (id) => {
         const charactersFilter = characters.filter(character => character.id !== id)
         setCharacters(charactersFilter)
      }
   
      
      return (
         <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>

      </div>
   );
}


export default App;
