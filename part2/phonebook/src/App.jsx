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
    setPersons([...persons, {
      name: newName
    }])
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName}
          onChange={handleNewName}/>
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