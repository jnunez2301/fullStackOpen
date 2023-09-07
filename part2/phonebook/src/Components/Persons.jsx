import React from "react";

export const Persons = ({persons, handleDelete}) => {
  return (
    <>{
        persons.map((person) => (
          <React.Fragment key={person.id}>
            <p>{person.name} {person.number}</p>
            <button onClick={() => handleDelete(person)}>Delete</button>
          </React.Fragment>
        ))
      }
       </>
  );
}
