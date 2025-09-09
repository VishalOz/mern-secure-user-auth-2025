import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const register = () => {
    const [ form, setForm ] = useState({username: "", email: "", password: ""});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/api/register", form);
        alert("Registration Successful");
    };
    
  return (
    <form>
        <input placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })} />

        <input type="email" placeholder="Email" 
        onChange={e => setForm({ ...form, email: e.target.value })} />

        <input type="password" placeholder="Password" 
        onChange={e => setForm({ ...form, password: e.target.value})} />

        <button>Register</button>
    </form>
  )
}

export default register