import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { addProductG, updateProductG } from '../../store/slices/cart.slice'
import { setUpdateInfoG } from '../../store/slices/updateinfo.slice'

const FormProduct = () => {

    const { register, reset, handleSubmit } = useForm()

    const { updateinfo } = useSelector(states => states)
    const dispatch = useDispatch()

    useEffect(() => {
        reset(updateinfo)
    }, [updateinfo])

    const submit = data => {
        if (updateinfo) {
            dispatch(updateProductG(data))
            dispatch(setUpdateInfoG(null))
        } else {
            dispatch(addProductG(data))
        }

        reset({
            bar_code: '',
            name: '',
            price: '',
            exp_date: ''
        })
    }

    return (
        <form  className='content' onSubmit={handleSubmit(submit)}>
            <h2 className='titulo'>Product <span className='info'>Info</span></h2>
            <div className='form'>
            <div>
                <label htmlFor="bar-code">Bar code</label>
                <input {...register('bar_code',{required:"this is required" })} type="text" id="bar-code" />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input {...register('name', {required:"this is required"})} type="text" id="name" />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input {...register('price', {required:"this is required"})} type="number" id="price" />
            </div>
            <div>
                <label htmlFor="expiration-date">Expiration date</label>
                <input {...register('exp_date', {required:"this is required"})} type="date" id="expiration-date" />
            </div>
            <button className='block'>Submit</button>
            </div>
        </form>

    )
}

export default FormProduct
