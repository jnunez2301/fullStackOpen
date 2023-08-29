import { useState } from 'react'
import { Filter, PersonForm, Persons } from './Components/';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
 

  const addNewPerson = (newData) =>{
      if(persons.filter(person => person.name.toLowerCase().trim() === newData.name.toLowerCase().trim()).length > 0){
      alert(`${newData.name} is already added to phone book`)
      return;
      }
      console.log(newData);
      setPersons([...persons, newData])
  }

 
  
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