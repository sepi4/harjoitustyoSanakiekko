// const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 1234
// const publicDirectoryPath = path.join(__dirname, '../public')

io.on('connect', socket => {
  console.log('connected to socket')

  socket.on('sendMessage', (msg) => {
    console.log(msg)
  })
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
