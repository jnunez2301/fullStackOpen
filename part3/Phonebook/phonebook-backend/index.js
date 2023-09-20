const express = require('express')
const cors = require('cors')
require('dotenv').config()


const Person = require('./models/person')

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const errorHandler = (error, request, repsonse, next) =>{
  console.error(error.message);

  if(error.name === 'CastError') return response.status(400).send({error: 'bad id request'})

  next(error)
}
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})



app.get('/api/persons/:id', (request, response, next) => {
  
  Person.findById(request.params.id)
  .then(p => {
    if(p){
      response.json(p)
    }else{
      response.status(404).end()
    }
  })
  .catch(error => next(error))
})



app.delete('/api/persons/:id', (request, response, next) =>{
  Person.findByIdAndDelete(request.params.id)
  .then((deletedPerson) =>
    response.json(deletedPerson))
  .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const updatedData = request.body; 

  Person.findByIdAndUpdate(request.params.id, updatedData, { new: true })
    .then((updatedPerson) => {
      if(updatedPerson){
        response.json(updatedPerson)
      }else{
        response.status(404).end()
      }
    })
    .catch(error => next(error))
});


app.post('/api/persons', (request, response) =>{
  const body = request.body

  if(body.name === undefined) return response.status(400).json({error: 'name is missing'})
  if(body.number === undefined) return response.status(400).json({error: 'number is missing'})

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save()
  .then(savedPerson =>{
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

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})