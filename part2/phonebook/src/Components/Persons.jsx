export const Persons = ({persons}) => {
  return (
    <>{
        persons.map((person, index) => (
          <p key={index}>{person.name} {person.number}</p>
        ))
      }
       </>
  );
}
