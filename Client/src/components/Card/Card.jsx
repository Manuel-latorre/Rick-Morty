import { NavLink } from "react-router-dom";
import { addFav, removeFav} from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import './Card.css'
import btnRemove from '../assets/images/btnDelete.png'
import corazonBlanco from '../assets/images/corazonBlanco.png'
import corazonRojo from '../assets/images/corazonRojo.png'

function Card({ id, name,  species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose});
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);





   return (
      <div className="card">
         <div className="btnCard">
            
         <button className="btnFav" onClick={handleFavorite}> { isFav ? <img className="btnFav" src={corazonRojo}/> : <img className="btnFav" src={corazonBlanco} />} </button>
         
         <img onClick={() => onClose(id)} className="btnRemove" src={btnRemove} alt="button delete"/>
         </div>
         
         <h2 key={id}></h2>

         <NavLink className="tituloCard" to={`/detail/${id}`}>
            <h1 >{name}</h1>
         </NavLink>

            <h2 className="h2-card">{species}</h2>
            <h2 className="h2-card">{gender}</h2>
         
         
         <img className="imgCard" src={image} alt='foto' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
