import { useState } from "react"

export const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll([...allClicks, 'L'])
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll([...allClicks, 'R'])
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {allClicks.length}</p>
    </div>
  )
}

/* import { Content, Header, Total } from './components'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content content={parts}/>
      <Total total={parts} />
    </div>
  )
}

export default App */