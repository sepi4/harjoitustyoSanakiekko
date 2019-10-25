import React, { useState } from 'react'

const Login = (props) => {
  const [name, setName] = useState('')
  console.log('Login')
  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={() => props.handleUser(name)}>submit</button>
    </div>
  )
}

export default Login
