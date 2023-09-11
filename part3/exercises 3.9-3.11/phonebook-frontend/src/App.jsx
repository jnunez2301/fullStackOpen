import { useEffect, useState } from 'react'
import { Filter, PersonForm, Persons } from './Components/';
import personService from './services/persons'
import { Notification } from './Components/Notification';
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');

 //Step 2.11
  useEffect(() =>{
    personService
      .getAll()
      .then(response => {
        setPersons(response)
        setLoading(false)
      })
      .catch(error => {
        console.error('An error ocurred fetching data', error);
        setLoading(false)
      })
  }, [])

  const addNewPerson = (newData) => {
    if(loading) return;
    const personIndex = persons.findIndex(
      (person) =>
        person.name.toLowerCase().trim() === newData.name.toLowerCase().trim()
    );
    

    if(persons.filter(person => person.name.toLowerCase().trim() === newData.name.toLowerCase().trim()).length > 0){
      if(window.confirm(`${newData.name} is already added to phone book, replace the old number with a new one?`)){
        const updatedPersons = [...persons];
        // update on server
        try{
          personService
          .update(updatedPersons[personIndex].id, newData)
          .then(response =>{
            updatedPersons[personIndex] = response;
            setPersons(updatedPersons);
            setNotification(`Number of ${response.name} was updated to ${response.number}`)
          })
        } catch (error) {
          console.error('An error occurred while updating data', error);
        }
        //WHY IS THE ID UNDEFINED
       /*  setPersons(updatedPersons); */

      }
      return;
      }
      
  //2.12 step 7
    personService
      .create(newData)
      .then(response => {
        setPersons([...persons, response])
        setNotification(`${response.name}${response.number} was added to the list`)
      })
    }
     //2.14 step9 delete
    const handleDelete = (event) =>{
      
      if(loading) return;
      if(window.confirm(`Do you want to delete ${event.name}`)){
            personService
            .removeItem(event.id)
            
            .then(response => {
              setNotification(`${event.name} ${event.number} was deleted from the list`)
            })
            .catch(error =>{
              setNotification(`${event.name} has already been deleted from the list`)
            })
          
        
      }else{
        return;
      }
    }
 
  

  return (
    <div>
      <h2>Phone book</h2>
      {
        notification.length > 0 ? <Notification message={notification} /> : ''
      }
      {
        loading ? 'Loading...' : 
        <>
        <Filter persons={persons} />
        <h1>Add a new</h1>
        <hr />
       
        <PersonForm addNewPerson={addNewPerson}/>
       
        <h2>Numbers</h2>
        
        <Persons persons={persons} handleDelete={handleDelete}/>
        </>
      }
     
      
      
      
    </div>
  )
}

export default App