import { useState } from "react";
import { v4 as uuid } from 'uuid';
import { Notification } from "./Notification";

export const PersonForm = ({addNewPerson}) => {

    const [notification, setNotification] = useState("")

    const [newName, setNewName] = useState('');
    //2.8 step 3
    const [newPhone, setNewPhone] = useState('');
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
      
        if(newName.trim() === '' || newName.length < 3) {
          setNotification(`Please enter a valid input`)
          console.log(notification);
          return null;
        }else if(newPhone.length < 8){
          setNotification(`Number must be atleast 9 digits long`)
          return null;
        }


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
          number: 
           <input
           type="number"
           value={newPhone}
           onChange={handleNewPhone} 
           required/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
        {
          notification.length > 0 && <Notification message={notification} />
        }
      </form>
  );
}
