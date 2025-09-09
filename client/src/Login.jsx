import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [ form, setForm ] = useState({ email: "", password: ""});
    const handleSubmit = async () => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/auth/login', form);
        alert("Toekn: ", res.data.token);
    };

  return (
    <form>
        <input placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })} />

        <input type="email" placeholder="Email" 
        onChange={e => setForm({ ...form, email: e.target.value })} />

        <input type="password" placeholder="Password" 
        onChange={e => setForm({ ...form, password: e.target.value})} />

        <button type="submit" >Login</button>
    </form>
  )
}

export default Login