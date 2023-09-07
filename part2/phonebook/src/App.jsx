import { useEffect, useState } from 'react'
import { Filter, PersonForm, Persons } from './Components/';
import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
 //Step 2.11
  useEffect(() =>{
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addNewPerson = (newData) => {

    const personIndex = persons.findIndex(
      (person) =>
        person.name.toLowerCase().trim() === newData.name.toLowerCase().trim()
    );
    

    if(persons.filter(person => person.name.toLowerCase().trim() === newData.name.toLowerCase().trim()).length > 0){
      if(window.confirm(`${newData.name} is already added to phone book, replace the old number with a new one?`)){
        const updatedPersons = [...persons];
       
        updatedPersons[personIndex] = newData;
        // update on server
        personService
        .update(updatedPersons[personIndex].id, newData)
        //WHY IS THE ID UNDEFINED
        setPersons(updatedPersons);

      }
      return;
      }
      
  //2.12 step 7
    personService
      .create(newData)
      .then(response => {
        setPersons([...persons, response])
      })
    }
     //2.14 step9 delete
    const handleDelete = (event) =>{
      if(window.confirm(`Do you want to delete ${event.name}`)){
        personService.removeItem(event.id)
      }else{
        return;
      }
    }
 
  

  return (
    <div>
      <h2>Phone book</h2>
       
      <Filter persons={persons} />
      <h1>Add a new</h1>
      <hr />
     
    <PersonForm addNewPerson={addNewPerson}/>
     
      <h2>Numbers</h2>
      
      <Persons persons={persons} handleDelete={handleDelete}/>
     
      
      
      
    </div>
  )
}

export default App