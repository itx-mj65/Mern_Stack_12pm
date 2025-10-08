import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

const App = () => {

  const [data, setData] = useState({ fullname: "", email: "", password: "" })
  const [Allusers, setAllUsers] = useState()

  useEffect(() => {

    axios.get("http://localhost:3000/alluser").then((response) => {

      setAllUsers(response.data.user)
    }).catch(() => {
      console.log("error while fething data ")
    })


  }, [])


  // console.log(Allusers)

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setData({ ...data, [name]: value })
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/register", data).then((res) => {
        alert(res.data)
      })



    } catch {
      () => {
        console.log("there is error while sending from data ")
      }
    }

  }

  return (
    <div>
      {
        Allusers?.map((user) => {
          return <div>
            <h1>{user.fullname}</h1>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>

        })
      }


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
