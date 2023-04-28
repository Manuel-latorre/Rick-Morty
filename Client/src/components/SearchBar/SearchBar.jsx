import { useState } from "react";
import './SearchBar.css'


export default function SearchBar({ onSearch }) {

      const [id, setId] = useState('');
   
      const handleChange = (event) => {
         setId(event.target.value) 
      }


   return (
      <div className="barra">
         <input className="searchBar" type='search' onChange={handleChange} value={id} placeholder="Agregar personaje..."/>
         <button className="btnAgregar" onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
