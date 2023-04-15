import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = '15353fbc4002.05df129e9e3841d3fc3a'


const EMAIL = 'manuel.latorre11@mail.com';
const PASSWORD = 'manuel123';


//! HOOKS
function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   
   
   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      }
   }
   
   
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
   
   useEffect(() => {
      !access && navigate("/");
   }, [access]);
   
   return (
      <div className='App'>

         {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/> } 

         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;




