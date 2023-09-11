import React from "react";

export const Persons = ({ persons, handleDelete }) => {
  if (!persons) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(persons)) {
    console.error("persons is not an array:", persons);
    return null; // or return an error message
  }

  return (
    <>
      {persons.map((person) => (
        <React.Fragment key={person.id}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => handleDelete(person)}>Delete</button>
        </React.Fragment>
      ))}
    </>
  );
};
