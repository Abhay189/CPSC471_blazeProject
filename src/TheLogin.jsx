import './CSS/App.css';
import './NavigBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Login';
import { useState } from 'react';
import './CSS/TheLogin.css'

function LetsLogin() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
}
  const [user,setUser] = useState({name: "", email: ""}); // get name and email to save for the user
  const [error, setError] = useState("");

  const Login = details => {// this is the function that acutually logins
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){ // the the user input(details.email and details.password)
      //is equal to what we currently have, then we are login in
      console.log("Logged in");
      setUser({ // to acutally login we, pass through an array of the name and email
      name: details.name,
      email: details.email
      });
    } else {
      console.log("Details do not match!"); {/** this prints to the console */}
      setError("Details do not match");
    }
  }
  const Logout = () => {
    setUser({name:"",email:""});
  }
  return (
    /*if the email is not empty, then welcome the user, else display the login page */
    <div className = "Loginnn">
        {(user.email !== "") ? ( 
        <div className = "welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button className = "LoginButton" onClick={Logout}>Logout</button> {/**when the logout button is clicked, call Logout, which sets name and email to null state */}
        </div>
        ) : (
          <LoginPage Login= {Login} error={error}/>
        )}
    </div>
  );
}

export default LetsLogin;