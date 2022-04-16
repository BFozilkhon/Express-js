const express = require('express') 
const path = require('path')
const app = express()

//body qaytarish
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/users', require('./routes/user'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => console.log('server run on port : 3000'))




// listen, get, send, sendFile, use, static