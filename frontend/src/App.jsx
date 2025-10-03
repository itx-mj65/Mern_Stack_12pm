import React from 'react'
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState({ fullname: "", email: "", password: "" })

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setData({ ...data, [name]: value })
    console.log(data);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>


      <form onSubmit={handlesubmit} >

        <input type="text" placeholder='Enter your name' value={data.fullname} onChange={handlechange} name='fullname' />
        <br />
        <input type="email" placeholder='Enter your email' value={data.email} onChange={handlechange} name='email' />
        <br />
        <input type="password" placeholder='Enter your password' value={data.password} onChange={handlechange} name='password' />
        <br />
        <button type='submit'>Register</button>
      </form>

    </div>
  )
}

export default App
