import Style from "./SensorTem.module.css"
import axios from "axios";
import { useState, useEffect } from "react";

export const SensorTemp = (props) => {
    const [ data, setData ]= useState(null);
    const API_OPC = "http://192.168.0.86:5005/opcua/listaValores";

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
        <>
                <div className={Style.boxSensor}>
                    <p className={Style.boxTitle}>Sensor Temperatura</p>
                        {data && (
                                    <ul>
                                    {data.map((item, index) => (
                                            <h2 key={index} className={Style.boxCant}>{props.valor}<span>{item.data}°C</span></h2>
                                    ))}
                                    </ul>
                                )}
                </div>
            
        </>
    )
}