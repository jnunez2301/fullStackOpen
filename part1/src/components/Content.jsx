export const Content = ({content}) => {
  return (
    <div>
      <h2><ul>
      {content.map((c, index) => 
        <li key={index}>{c.name} Total of exercises: {c.exercises}</li>
      )}
      </ul>
      </h2>
      <hr />
    </div>
  );
}
