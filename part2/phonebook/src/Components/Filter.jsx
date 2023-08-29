import { useEffect, useState } from "react";

export const Filter = ({persons}) => {
    
    const [newFilter, setNewFilter] = useState([...persons])


    const handleFilter = (event) =>{
        let search = event.target.value.toLowerCase().trim();
        const filterBySearch = persons.filter((person) => 
            {if(person.name.toLowerCase().includes(search)) return person}
        )
        setNewFilter(filterBySearch)
    }
    
  return (
    <>
        Filter shown with <input 
        type="text" onChange={handleFilter}/>
        <h1>Filter</h1>
        {
          newFilter.map((item, index) => (
            <p key={index}>{item.name} {item.number}</p>
          ))
        }
    </>
  );
}
