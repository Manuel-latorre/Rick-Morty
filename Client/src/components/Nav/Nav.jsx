import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom';
import './Nav.css'
import logo from '../assets/images/icon-rick.png'
import iconLogOut from '../assets/images/iconLogOut.png'
import BurguerButton from './BurguerButton'
import { useState } from 'react'

const Nav = ({ onSearch, setAccess }) => {

    const [clicked, setClicked]  = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    const handleLogOut = () => {
        setAccess(false);
    }
    
    return(
    <div>
        <div className="header">
            <div className="burguerBtn">
                <BurguerButton clicked={clicked} handleClick={handleClick}/>
            </div>

                <img className="logo" src= {logo}/>

                    <NavLink className= 'btnNav' to ='/home'>Home</NavLink>

                    <NavLink className= 'btnNav' to ='/favorites'>Favorites</NavLink>
            
                    <NavLink className= 'btnNav' to ='/about'>About</NavLink>

                <img className="btnLogOut" src={iconLogOut} alt="" onClick={handleLogOut} />
        
            </div>
                <SearchBar onSearch={onSearch}/>  
    </div>
    )
}

export default Nav;