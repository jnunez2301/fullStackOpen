const Hello = (props) =>{
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/roxc2301' target="_blank">roxc2301</a>
    </div>
  )
}

const App = () => {

  const name = 'Jonathan'
  const age = 24

  return (
    <div>
      <p>Greetings</p>
      <Hello name='Maya' age={26+10} />
      <Footer />
    </div>
  )
}

export default App
