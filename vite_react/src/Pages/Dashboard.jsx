
import BasicBars from "../Components/BarChart";
import BasicLineChart from "../Components/LineChart";

const DashBoard=()=>{
    return(
        <div>
            <h5>DashBoard</h5>
            <h2>BarChart</h2>
            <BasicBars/>
            <h2>LineChart</h2>
            <BasicLineChart/>
        </div>
    )
}
export default DashBoard;