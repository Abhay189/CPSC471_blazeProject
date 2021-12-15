import React from 'react';
import { useState } from 'react';
import './CSS/TheLogin.css'


function LoginPage({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"",password:""});
    const submitHandler = e => {
        e.preventDefault(); {/**stops the page from reloading */}
        
        Login(details); 
    }
    return (
        <form className ="LoginForm" onSubmit= {submitHandler}>
            <div className = "form-inner">
                <h2>Login</h2>
                {/*Display error. if error is not equal to nothing, then display error*/}
                {(error !== "") ? ( <div className= "error">{error}</div>): ""}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    {/**Anytime the name changes we call a function an we pass throught the event. The event holds the target value. */}
                    <input type="text" name= "name" id = "name" onChange = {e => setDetails({...details,name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    {/**Anytime the name changes we call a function an we pass throught the event. The event holds the target value. */}
                    <input type="email" email= "name" id = "email" onChange = {e => setDetails({...details,email: e.target.value})} value={details.email}/>
                </div>
                <div className= "form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name= "password" id = "password" onChange = {e => setDetails({...details,password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    )
}

export default LoginPage;
