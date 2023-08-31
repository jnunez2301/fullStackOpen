import { useEffect, useState } from 'react'
import { Filter, PersonForm, Persons } from './Components/';
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  
 //Step 2.11
  useEffect(() =>{
    axios
      .get('http://localhost:3000/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNewPerson = (newData) => {
    if(persons.filter(person => person.name.toLowerCase().trim() === newData.name.toLowerCase().trim()).length > 0){
      alert(`${newData.name} is already added to phone book`)
      return;
      }
    axios
      .post('http://localhost:3000/persons', newData)
      .then(response => {
        setPersons([...persons, response.data])
      })
      .catch(error => {
        console.error('Error adding new person:', error);
      })
  }
/*   const addNewPerson = (newData) =>{
      if(persons.filter(person => person.name.toLowerCase().trim() === newData.name.toLowerCase().trim()).length > 0){
      alert(`${newData.name} is already added to phone book`)
      return;
      }
      setPersons([...persons, newData])
  } */

 
  
  //2.9* phonebook step 4
  
  

  return (
    <div>
      <h2>Phone book</h2>
       
      <Filter persons={persons} />
      <h1>Add a new</h1>
      <hr />
     
    <PersonForm addNewPerson={addNewPerson}/>
     
      <h2>Numbers</h2>
      
      <Persons persons={persons}/>
     
      
      
      
    </div>
  )
}

export default App