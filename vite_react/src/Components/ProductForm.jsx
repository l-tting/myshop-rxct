import { useState } from "react";
import axios from "axios";

const ProductForm =()=>{
    const url = "http://127.0.0.1:5000/products"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4YXZpIiwiZXhwIjoxNzI4MzMwMTgzfQ.t2iZFUGf2dmkl6uogR8dmaEy0TTrBVik7vPLMjK64CM"
    const [product,setProduct] =useState({
        name:"",
        buying_price:"",
        selling_price:"",
        stock_quantity:""
    })
    const handleChange=(e)=>{
        const {name,value} = e.target
        setProduct({
            ...product,
            [name]:value
        })
    }
    const postProduct = async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.post(url,product,{
                headers:{
                    Authorization:token
                }
            })
            console.log("response data:", response.data)

        }
        catch(error){
            console.log("Error posting products",e)

        }
        
    }
    return(
        <div>
        <h4>Products</h4>
            <form className="space-y-4" onSubmit={postProduct} >
                <div>
                    <input type="text"
                    placeholder="Product Name"
                    className="border border-black"
                    name="name"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="number"
                     placeholder="Buying Price"
                     className="border border-black"
                     name="buying_price"
                     onChange={handleChange}
                    />
                </div>
                <div>
                    <input type=" number"
                     placeholder="Selling Price"
                     className="border border-black"
                     name="selling_price"
                     onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="number"
                     placeholder="Stock Quantity"
                     className="border border-black"
                     name="stock_quantity"
                     onChange={handleChange}
                    />
                </div>
                <div>
                   <button className="border border-black w-24"> Add Product</button>
                </div>
            </form>

        </div>
    )
}

export default ProductForm;