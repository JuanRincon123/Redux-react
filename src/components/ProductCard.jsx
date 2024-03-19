import { useDispatch } from "react-redux"
import { deleteProductG } from "../../store/slices/cart.slice"
import { setUpdateInfoG } from "../../store/slices/updateinfo.slice"

const ProductCard = ({ product }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProductG(product.bar_code))
    }

    const handleUpdate = ()=>{
        dispatch(setUpdateInfoG(product))
    }

    return (
        <article>
            <h3>{product.name}</h3>
            <ul>
                <li><span>Bar code: </span><span>{product.bar_code}</span></li>
                <li><span>Expiration Date: </span><span>{product.exp_date}</span></li>
                <li><span>Price: $</span><span>{product.price} USD</span></li>
            </ul>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleUpdate}>Update</button>
        </article>
    )
}

export default ProductCard
