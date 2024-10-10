
import BasicBars from "../Components/BarChart";
import BasicLineChart from "../Components/LineChart";

const DashBoard = () => {
    return (
        <div>
            <h5>DashBoard</h5>
            <div className="flex ml-8">
                <div>
                    <h2 className="font-bold">BarChart</h2>
                    <BasicBars />
                </div>
                <div>
                    <h2 className="font-bold">LineChart</h2>
                    <BasicLineChart />

                </div>
            </div>

        </div>
    )
}
export default DashBoard;