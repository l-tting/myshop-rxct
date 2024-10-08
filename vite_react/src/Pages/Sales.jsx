import SalesForm from "../Components/SalesForm";
import SalesTable from "../Components/SalesTable";
const Sales =()=>{
    return(
        <div>
            <h5>This is the sales page</h5>
            <div className="mt-6 ml-6">
                <SalesForm/>
                <SalesTable/>
            </div>

        </div>
    )
}
export default Sales;