import React from 'react';

export default function Login() {   
    return (
        <div className='login'>
            <h2>Login</h2>
            <div className="login-form">
                <input name="username" placeholder="Username" />
                <input name="password" type="password" />
                <button>Login</button>
            </div> 
        </div>
    );
}


 