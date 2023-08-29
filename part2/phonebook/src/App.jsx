import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');

  const handleNewName = (event) =>{
    
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //The Phonebook step 2
    if(persons.filter(person => person.name.toLowerCase().trim() === newName.toLowerCase().trim()).length > 0){
      alert(`${newName} is already added to phone book`)
      setNewName('')
      return;
    }
    setPersons(
      [...persons, {
      name: newName}]
      )
    setNewName('')
  }

  return (
    <div>
      <h2>Phone book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName}
          onChange={handleNewName}/>
          <br />
          number: <input type="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((person, index) => (
          <p key={index}>{person.name}</p>
        ))
      }
    </div>
  )
}

export default App