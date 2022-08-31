import React from 'react'
import '../../style/index.scss'

const loginPage = () => {
  return (
    <div>
        <div>
          <div>
            <h2>Eleven House</h2>
          </div>
          <h1>Login</h1>
          <div>
            <input 
              type="text" 
              placeholder="  Username" 
              // onChange={(e)=> {
              //   setUsername(e.target.value)
              // }}
              // value={username}
            />
            <input 
              type="password" 
              placeholder="  Password" 
              // onChange={(e)=> {
              //   setPassword(e.target.value)
              // }}
              // value={password}
            />
          </div>
        <button>Login</button>
        </div>
      </div>
  )
}

export default loginPage