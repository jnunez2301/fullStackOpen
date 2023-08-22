import { useState } from 'react'
import style from './App.module.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes ] = useState(
    new Array(anecdotes.length).fill(0)
  )

  const handleNextAnecdote = () =>{
    setSelected(
      Math.floor(Math.random()*anecdotes.length)
    )
  }
  const handleVotes = () =>{
      const newVotes = [...votes]
      newVotes[selected] += 1
      setVotes(newVotes)
  }
  
  const showMostVoted = () =>{    
    const maxVote = Math.max(...votes)
    if(maxVote === 0) return;
    const mostVoted = votes.indexOf(maxVote)
    return anecdotes[mostVoted]
  }

  return (
    <div className={style.container}>
      <h2>Anecdote of the day</h2>
      <hr />
      <div className={style.anecdote}>
        <p>{anecdotes[selected]}</p>
      </div>
      <p>This quote has <strong>{votes[selected]}</strong> votes</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <hr />
      <p><em>{showMostVoted()}</em></p>
    </div>

  )
}

export default App