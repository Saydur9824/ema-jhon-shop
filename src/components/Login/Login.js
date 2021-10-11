import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {singInGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    

    const handleGoogleLogIn = () => {
        singInGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        
           <div className ='login-form'>
                <div>
                    <h2>Log-In</h2>
                    <form>
                        <input type="email" name="" id="" placeholder = 'Your Email' />
                        <br /> <br />
                        <input type="password" name="" id="" placeholder = 'Your password' />
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>new to ema-john website? <Link to = '/register'>Creat Account</Link></p>
                    <div>---------or------------</div>
                    <button 
                    className = 'button' 
                    onClick = {handleGoogleLogIn}
                    >Google Sign In</button>
                </div>
           </div>
        
    );
};

export default Login;