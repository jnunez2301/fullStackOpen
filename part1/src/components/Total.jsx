export const Total = ({total}) => {
  const totalExercises = total.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <h2>Total of exercises: {totalExercises}</h2>
    </div>
  );
}
