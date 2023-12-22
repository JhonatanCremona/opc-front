import { SensorTemp } from "../Temperatura/SensorTem";
import { SensorDigital } from "../sensoresDigitales/SensorDigital";
import axios from "axios";
import Style from "./Dashboard.module.css";
import { useState, useEffect } from "react";


export const Dashboard = () => {
    const [ data, setData ]= useState({});
    const API_OPC = "http://localhost:5005/opcua/listaValores";

   
    console.log(data);
    useEffect(()=>{
        async function getData() {
                try {
                const response = await axios.get(API_OPC);
                    setData(response.data);
                } catch (error) {
                console.error(error);
                }
            }
            const intervalId = setInterval(getData, 1000);

    // Limpiar intervalo al desmontar el componente
    return () => clearInterval(intervalId);

    },[])  

    return(
        <div>
            <h1>Title</h1>
            <div>
                <SensorTemp/>
                <SensorTemp/>
                <SensorTemp/>
            </div>
            <div>
            {data && (
                        <ul>
                        {data.map((item, index) => (
                            <li key={index}>{item.data}</li>
                        ))}
                        </ul>
                    )}
            </div>
            <div>
                <SensorDigital/>
            </div>
        </div>
    )

}