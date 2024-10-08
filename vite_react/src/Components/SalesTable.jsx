import { useState,useEffect } from "react";
import axios from "axios";
const SalesTable = ()=>{
    const url = "http://127.0.0.1:5000/sales"
    const [salesdata,setSalesData] = useState([]);
    const getSales = async ()=>{
        try{
            const response = await axios.get(url)
            console.log(response.data)
            setSalesData(response.data.sales)
        }
        catch(e){
            console.log("Error fetching sales:",e)
        }
        
    }
    useEffect(()=>{
        getSales()
    },[])

    return(
        <div className="mt-4 ml-16">
            <table className="border border-black">
                <thead>
                    <tr className="border border-black">
                        <td>Sale id</td>
                        <td>Pid</td>
                        <td>Quantity</td>
                        <td>Time sold</td>
                    </tr>
                </thead>
                {salesdata.map(sale=>(
                     <tbody>
                     <tr className="border border-black" >
                         <td>{sale.id}</td>
                         <td>{sale.pid}</td>
                         <td>{sale.quantity}</td>
                         <td>{sale.created_at}</td>
                     </tr>
                 </tbody>

                ))}
               
            </table>

        </div>

    )
}
export default SalesTable