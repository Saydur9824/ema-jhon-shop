import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className ='login-form'>
            <div>
                <h2>Register : Create Account</h2>
                <form onSubmit=''>
                    <input type="email" name="" id="" placeholder = 'Your Email' />
                    <br /><br />
                    <input type="password" name="" id="" placeholder = 'Your password'/>
                    <br /><br />
                    <input type="password" name="" id="" placeholder = 'Re-enter password'/>
                    <br /><br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to = '/login'>login</Link></p>
                <div>-----------or------------</div>
                <button className = 'button'>Google Sign in</button>
            </div>
        </div>
    );
};

export default Register;