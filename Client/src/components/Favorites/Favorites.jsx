import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react'
import './Favorites.css'

const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>

            <div className='filters'>
                <select className='filter' onChange={handleOrder}>
                    
                    <option className='optionsFilter' value="A">Ascendente</option>
                
                    <option className='optionsFilter' value="D">Descendente</option>
                </select>
        
                <select className='filter' onChange={handleFilter}>
                    <option className='optionsFilter' value="Male">Male</option>
                    <option className='optionsFilter' value="Female">Female</option>
                    <option className='optionsFilter' value="Genderless">Genderless</option>
                    <option className='optionsFilter' value="unknown">unknown</option>
                    <option className='optionsFilter' value="allCharacters">All Characters</option>
                </select>
            </div>
        
            <div className='section-favorites'>
                {
                    myFavorites?.map(fav => {
                        return(
                            <Card 
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                species={fav.species}
                                gender={fav.gender}
                                image={fav.image}
                                onClose={fav.onClose}
                            />
                        )
                        
                    })
                }
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);