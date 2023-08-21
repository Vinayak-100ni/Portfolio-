import React from 'react'
import "./Login.css"
import { Button, Typography } from '@mui/material'
import { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (<>      
        <div className="login">
            <div className="loginContainer">
                <form onSubmit={submitHandler} className="loginForm">
                    <Typography variant='h4'>
                        <p>A</p>
                        <p>D</p>
                        <p>M</p>
                        <p>I</p>
                        <p style={{ marginRight: "1vmax" }}>N</p>

                        <p>P</p>
                        <p>A</p>
                        <p>N</p>
                        <p>E</p>
                        <p>L</p>


                    </Typography>
                    <div>
                        <input type="email" placeholder='Admin Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" placeholder='Admin Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Button variant='contained' type='submit'>LogIn</Button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;
