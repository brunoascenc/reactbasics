import React, {useState, useEffect} from 'react';

function App() {

  // const [resourceType, setResourceType] = useState('posts')
  // const [items, setItems] = useState([])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))

  // }, [resourceType])

  // const [count, setCount] = useState(4)
  // const [theme, setTheme] = useState('blue')
  // // const count = state.count
  // // const theme = state.theme
  

  // function decrementCount(){
  //   setCount(prevCount => prevCount -1)
  // }

  // function incrementCount(){
  //   setCount(prevCount => prevCount + 1)
  //   setTheme('red')
  // }


  return(
    // <div className="App">
    //    <button onClick = {decrementCount}>-</button>
    //    <span>{count}</span>
    //    <span>{theme}</span>
    //    <button onClick = {incrementCount}>+</button>
    // </div>
  //  <>
  //   <div>
  //     <button onClick = {() => setResourceType('posts')}>Posts</button>
  //     <button onClick = {() => setResourceType('users')}>Users</button>
  //     <button onClick = {() => setResourceType('comments')}>Comments</button>
  //   </div>
  //   <h1>{resourceType}</h1>
  //   {items.map(item => {
  //     return <pre>{JSON.stringify(item)}</pre>
  //   })}
  //   </>
  <div>
    {windowWidth}

  </div>
  )
}

export default App;
