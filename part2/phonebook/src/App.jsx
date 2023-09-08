import { useEffect, useState } from 'react'
import { Filter, PersonForm, Persons } from './Components/';
import personService from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [loading, setLoading] = useState(true);

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
      })
    }
     //2.14 step9 delete
    const handleDelete = (event) =>{
      if(loading) return;
      if(window.confirm(`Do you want to delete ${event.name}`)){
        personService.removeItem(event.id)
      }else{
        return;
      }
    }
 
  

  return (
    <div>
      <h2>Phone book</h2>
       
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