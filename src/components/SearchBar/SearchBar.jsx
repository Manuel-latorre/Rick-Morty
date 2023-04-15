import { useState } from "react";
import './SearchBar.css'


export default function SearchBar({ onSearch }) {

      const [id, setId] = useState('');
   
      const handleChange = (event) => {
         setId(event.target.value) 
      }


   return (
      <div>
         <input className="searchBar" type='search' onChange={handleChange} value={id}/>
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
