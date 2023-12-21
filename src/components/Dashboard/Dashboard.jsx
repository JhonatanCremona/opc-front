import { SensorTemp } from "../Temperatura/SensorTem";
import { SensorDigital } from "../sensoresDigitales/SensorDigital";
import Style from "./Dashboard.module.css";


export const Dashboard = () => {
    return(
        <div>
            <h1>Title</h1>
            
            <div>
                <SensorTemp/>
                <SensorTemp/>
                <SensorTemp/>
                <SensorTemp/>
            </div>
            <div>
                <SensorDigital/>
            </div>
        </div>
    )

}