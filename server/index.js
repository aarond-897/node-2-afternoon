const express=require('express')
const messages=require('./controllers/messages_controller')

const app = express();

app.use(express.json())
app.use(express.static('public/build'))

app.listen(3001, console.log("I'm listening"))


app.post('/api/messages',messages.create)
app.get('/api/messages',messages.read)
app.put('/api/messages/:id',messages.update)
app.delete('/api/messages/:id',messages.delete)