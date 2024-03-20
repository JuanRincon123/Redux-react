import { useDispatch } from "react-redux"
import { deleteProductG } from "../../store/slices/cart.slice"
import { setUpdateInfoG } from "../../store/slices/updateinfo.slice"
import '../../src/App.css'

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProductG(product.bar_code))
    }

    const handleUpdate = ()=>{
        dispatch(setUpdateInfoG(product))
    }

    return (
        <article  className="card">
            <h3>{product.name}</h3>

            <ul>
                <li><span>Bar code: </span><span>{product.bar_code}</span></li>
                <li><span>Price: $</span><span>{product.price} USD</span></li>
                <li><span>Expiration Date: </span><span>{product.exp_date}</span></li>
            </ul>
            <div className="btn-group">
            <button className="button1" onClick={handleDelete}>Delete</button>
            <button className='button2'onClick={handleUpdate}>Update</button>
            </div>
        </article>
    )
}

export default ProductCard
