import React, { useState } from 'react'

const UserForm = props =>{
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault();
        if (firstName.length<1){
            setFirstNameError("First name error on submit")
        }
        if(lastName.length<1){
            setLastNameError("Last name error on submit")
        }
        if(email.length<1){
            setEmailError("Last name error on submit")
        }
        if(password.length<1){
            setPasswordError("Last name error on submit")
        }
        if(confirmPassword.length<1){
            setConfirmPasswordError("Last name error on submit")
        }
        else{
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
        }
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for submitting the form!";
	} else {
	    return "Welcome, please submit the form";
	}
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value < 1){
            setFirstNameError("First name is required")
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value < 1){
            setLastNameError("Last name is required")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value < 1){
            setEmailError("Email is required")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value < 1){
            setPasswordError("Password is required")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === {password}){
            setConfirmPasswordError("Passwords must match")
        }
    }


    return(
        <>
            <form onSubmit= {createUser}>
                <h3>{ formMessage() }</h3>
                <div>
                    <label htmlFor="firstName">First name:</label>
                    <input className="form-control mb3" type = "text" onChange ={ handleFirstName }></input>
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{ firstNameError } </p>:''
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last name:</label>
                    <input className="form-control mb3" type = "text" onChange ={ handleLastName }></input>
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{ lastNameError }</p> :''
                    } 
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input className= "form-control mb3" type = "text" onChange ={ handleEmail }></input> 
                    {
                        emailError ?
                        <p style={{color:'red'}}>{ emailError } </p>:''
                    } 
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input className="form-control mb3" type = "password" onChange ={ handlePassword }></input> 
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{ passwordError } </p>:''
                    } 
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <input className="form-control mb3" type = "password" onChange ={ handleConfirmPassword }></input> 
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{ confirmPasswordError }</p> :''
                    } 
                </div>
                <div>
                    <input className="btn btn-primary mt3" type="submit" value="createUser"></input>
                </div>
            </form>
        </>
    )
}

export default UserForm