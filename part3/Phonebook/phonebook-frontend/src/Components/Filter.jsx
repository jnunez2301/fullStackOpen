import React, { useState, useEffect } from "react";

export const Filter = ({ persons }) => {
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleFilter = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    setSearch(searchValue);

    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(searchValue)
    );
    setFilteredPersons(filtered);
  };

  useEffect(() => {
    // Reset the filter when persons prop changes
    setFilteredPersons(persons);
  }, [persons]);

  return (
    <>
      Filter shown with{" "}
      <input type="text" value={search} onChange={handleFilter} />
      <h1>Filter</h1>
      {filteredPersons.map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};
