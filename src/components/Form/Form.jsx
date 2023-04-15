import { useState } from 'react';
import validation from './validation';
import rickAndMorty from '../assets/images/rick-and-morty.png'
import './Form.css'

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    return (
        
    <form onSubmit={handleSubmit}>
        <section className='form'>
        <img className='imgForm' src={rickAndMorty} alt="foto" />
            <div className='divControls'>
                <label htmlFor="email">Email </label>
                <input className='controls' type="text" 
                    name="email" 
                    placeholder="Ingrese su email" 
                    onChange={handleChange} 
                    value={userData.email}/>
                    <p className='textError'>{errors.email}</p>
            </div>

            <div className='divControls'>
                <label htmlFor="password">Password </label>
                <input className='controls' type="text" 
                    name="password" 
                    placeholder="Ingrese su contraseña" 
                    onChange={handleChange} 
                    value={userData.password}/>
                    <p className='textError'>{errors.password}</p>
            </div>

                <button className='btnForm'>Submit</button>
        </section>
    </form>

    )

}

export default Form;