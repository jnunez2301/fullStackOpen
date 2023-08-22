import { useState } from "react";

const Feedback = ({ handleBad, handleGood, handleNeutral }) => {
  return (
    <>
      <h1>Give feedback</h1>
      <hr />
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </>
  );
};

const Statistics = ({ stats }) => {
  const sum = stats.reduce((acc, cur) => acc + cur.count, 0);
  const average = sum / 3 ;
  const positive = (stats[0].count)*100/sum;

  return (
    <>
      {sum > 0 ? (
        <div>
          <table>
            <tbody>
          {stats.map((stat, index) => (
            <tr key={index}>
            <td>{stat.name}</td>
            <td>{stat.count}</td>
          </tr>
          ))}
              
            <tr>
              <td>All</td>
              <td>{sum}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{positive}</td>
            </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = [
    {
      name: "good",
      count: good,
    },
    {
      name: "neutral",
      count: neutral,
    },
    {
      name: "bad",
      count: bad,
    },
  ];

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Feedback
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
