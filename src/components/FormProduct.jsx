import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProductG } from '../../store/slides/cart.slides'

const FormProduct = () => {

    const { register, reset, handleSubmit } = useForm()

    const dispatch = useDispatch()

    const submit = data => {
        dispatch(addProductG(data))

        reset({
            bar_code: '',
            name: '',
            price: '',
            exp_date: ''
        })
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h2>Product Info</h2>
            <div>
                <label htmlFor="bar-code">Bar code</label>
                <input {...register('bar_code')} type="text" id="bar-code" />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input {...register('name')} type="text" id="name" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input {...register('price')} type="number" id="price" />
            </div>
            <div>
                <label htmlFor="expiration-date">Expiration date</label>
                <input {...register('exp_date')} type="date" id="expiration-date" />
            </div>
            <button>Submit</button>
        </form>

    )
}

export default FormProduct
