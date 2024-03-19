import { useSelector } from 'react-redux'
import './App.css'
import FormProduct from './components/FormProduct'

function App() {

  const {cart} = useSelector(states => states)

console.log(cart)

  return (
    <div>
      <FormProduct/>
    </div>
  )
}

export default App
