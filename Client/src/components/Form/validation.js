const validation = (userData) => {
    const errors = {};
    
    if(!userData.email) errors.email = "Por favor complete este campo";
    
    if(userData.email.length > 35) errors.email = "No puede superar los 35 caracteres";

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) errors.email = "Email invalido";
    
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) errors.email = "";
    
    if(userData.password.length < 6 || userData.password.length > 10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres";

    if(!/\d/.test(userData.password)) errors.password = "Debe contener al menos un número";

    return errors;

}

export default validation;
