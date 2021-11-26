import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import image from '../../../images/2879838.jpg'
import './AddProduct.css';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://aqueous-falls-64682.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-product">
            <img className="w-50" src={image} alt="" />
            <div>
            <h1 className="my-5 text-secondary">Please Add a Product</h1>
            <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("product_name", { required: true, maxLength: 100 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input {...register("tag", { required: true, maxLength: 30 })} placeholder="Tag" />
                <input className="btn btn-primary" type="submit" value="Post" />
                
            </form>
            </div>
        </div>
    );
};

export default AddProduct;