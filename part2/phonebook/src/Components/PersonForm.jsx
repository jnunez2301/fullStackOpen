import { useState } from "react";
import { v4 as uuid } from 'uuid';

export const PersonForm = ({addNewPerson}) => {

    const [newName, setNewName] = useState('');
    //2.8 step 3
    const [newPhone, setNewPhone] = useState(0);
    //2.9* step 4
    const handleNewName = (event) =>{
        setNewName(event.target.value)
      }
    
      const handleNewPhone = (event) =>{
        setNewPhone(event.target.value)
      }
     
    const handleSubmit = (event) => {
        event.preventDefault()
        //The Phonebook step 2
        /*  */
        addNewPerson({
          name: newName.trim(),
          number: newPhone
        })
        
        setNewName('')
        setNewPhone('')
      }

  return (
    <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName}
          onChange={handleNewName} required/>
          <br />
          number: <input
           type="number"
           value={newPhone}
           onChange={handleNewPhone} required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  );
}
