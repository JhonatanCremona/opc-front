import { SensorTemp } from "../Temperatura/SensorTem";
import { SensorDigital } from "../sensoresDigitales/SensorDigital";
import axios from "axios";
import Style from "./Dashboard.module.css";
import { useState, useEffect } from "react";


export const Dashboard = () => {
    

    return(
        <div className={Style.boxDashboard}>
            
            <div className={Style.boxSensorTemp}>
                <SensorTemp/>
                <SensorTemp/>
                <SensorTemp/>
                <SensorTemp/>
            </div>
            
            <div className={Style.boxSensorDigital}>
                <SensorDigital/>
            </div>
        </div>
    )

}