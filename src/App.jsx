
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
function App() {

  const counterObj = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const incrementCount = () => {
    dispatch({ type: 'INCREMENT'})
  }

  const decrementCount = () => {
    dispatch({ type: 'DECREMENT'})
  }

  return (
    <>
     <h1>Redux Counter</h1>
     <h1>{counterObj.count}</h1>
     <button onClick={incrementCount} >Increment</button>
     <button onClick={decrementCount} >Decrement</button>
    </>
  )
}

export default App
