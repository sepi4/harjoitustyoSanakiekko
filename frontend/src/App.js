import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null)

  const socket = io('http://localhost:1234')
  const handleUser = (name) => {
    if (name.trim().length > 1) {
      setUser(name)
    }
  }

  console.log('App')
  return (
    <div>
      {!user
        ? <Login handleUser={handleUser} />
        : <button
          onClick={() => socket.emit('sendMessage', `${user} painoi nappia`)}
        >appi</button>
      }
    </div>
  )
}

export default App
