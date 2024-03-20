import { useSelector } from 'react-redux'
import './App.css';
import FormProduct from './components/FormProduct'
import ProductCard from './components/ProductCard'

function App() {

  const {cart} = useSelector(states => states)

console.log(cart)

  return (
    <div>
      <FormProduct/>
      <div className='content-card'>
        {
          cart.map(product => (
            <ProductCard
            key={product.bar_code}
            product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
