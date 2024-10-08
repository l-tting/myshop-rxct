import { useState,useEffect } from "react";
import axios from "axios";
const ProductTable =()=>{
    const [productdata,fetchProductData] =useState([])
    const url ="http://127.0.0.1:5000/products"
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ4YXZpIiwiZXhwIjoxNzI4NDA1OTAzfQ.YMpD0nlqHjXKlqJSdssaVf7gthbbDEHP5MLLW2mJQF8"
    const fetchProduct = async ()=>{
        try{
            const response = await axios.get(url);
            console.log(response)
            fetchProductData(response.data.products)
        }
        catch(e){
            console.log("Error fetching products:",e)
        }
    }

    useEffect(()=>{
        fetchProduct()
        
    },[])
    return(
        <div>
            <h4>My Duka Products</h4>

            
                <div>
                    <table className="table-fixed">
                        <thead>
                            <tr className="border border-spacing-4">
                                <td>Product Id</td>
                                <td>Product Name</td>
                                <td>Buying Price</td>
                                <td>Selling Price</td>
                                <td>Stock Quantity</td>
                            </tr>
                        </thead>
                        {productdata.map(product=>(
                        <tbody>
                            <tr className="border-2 m-4" >
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.buying_price}</td>
                                <td>{product.selling_price}</td>
                                <td>{product.stock_quantity}</td>
                            </tr>
                        </tbody>
                         ))}
                    </table>
                </div>

           
           {/* {productdata.map(product=>(
            <div key={product.id}>
                <p>Product Name: {product.name}</p>
                <p>Product Buying Price: {product.buying_price}</p>
                <p>Product Selling Price: {product.selling_price}</p>
                <p>Product Quantity: {product.stock_quantity}</p> <br /><br />
            </div>
           )

           )} */}
            
        </div>

    )
}
export default ProductTable;