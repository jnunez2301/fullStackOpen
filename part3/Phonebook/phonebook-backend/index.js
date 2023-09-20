const express = require('express')
const cors = require('cors')
require('dotenv').config()


const Person = require('./models/person')

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))


app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})



app.get('/api/persons/:id', (request, response) => {
  
  Person.findById(request.params.id).then(p => (response.json(p)))
})


app.delete('/api/persons/:id', (request, response) =>{
  Person.findByIdAndDelete(request.params.id)
  .then((deletedPerson) => response.json(deletedPerson))
})

app.put('/api/persons/:id', (request, response) => {
  const updatedData = request.body; 

  Person.findByIdAndUpdate(request.params.id, updatedData, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    });
});



app.post('/api/persons', (request, response) =>{
  const body = request.body

  if(body.name === undefined) return response.status(400).json({error: 'name is missing'})
  if(body.number === undefined) return response.status(400).json({error: 'number is missing'})

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson =>{
    response.json(savedPerson)
  })
})

/* 
app.delete('/api/persons/:id', (request, response) =>{
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
}) 
const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(person => person.id))
    : 0
  return maxId + 1
}
 */


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})