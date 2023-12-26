import { SensorTemp } from "../Temperatura/SensorTem";
import { SensorDigital } from "../sensoresDigitales/SensorDigital";
import axios from "axios";
import Style from "./Dashboard.module.css";
import { useState, useEffect } from "react";


export const Dashboard = () => {
    

    return(
        <div>
            <h1>Title</h1>
            <div>
                <SensorTemp/>
            </div>
            
            <div>
                <SensorDigital/>
            </div>
        </div>
    )

}