import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom';
import './Nav.css'
import logo from '../assets/images/gif-r.gif'
import imgLogOut from '../assets/images/logOut1.png'

const Nav = ({ onSearch, setAccess }) => {

    const handleLogOut = () => {
        setAccess(false);
    }
    
    return(
        <div>
        <div className="header">

                <img className="logo" src= {logo}/>
            
                <NavLink className= 'btnNav' to ='/home'>Home</NavLink>

                <NavLink className= 'btnNav' to ='/favorites'>Favorites</NavLink>
            
                <NavLink className= 'btnNav' to ='/about'>About</NavLink>

                <img className="btnLogOut" src={imgLogOut} alt="" onClick={handleLogOut} />
           
        </div>
                <SearchBar onSearch={onSearch}/>  
        </div>
    )
}

export default Nav;