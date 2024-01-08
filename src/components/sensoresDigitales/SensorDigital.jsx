import { ButtonOn } from "../assets/ButtonOn"
import { ButtonOnOff } from "../Icon"
import Style from "./SensorDigital.module.css"
import { useState,useEffect } from "react"
import axios from "axios"

export const SensorDigital = () => {
    const [ data, setData ]= useState(null);
    const API_OPC = "http://192.168.0.159:5005/opcua/listaValoresAnalogicos";   

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


    return (
        <article className={Style.boxSensorD}>
            <div className={Style.boxContainer}>
            { data && (
                <>
                {data.map((item, index) => (
                        <div className={Style.box}>
                            <p className={Style.boxTitle}> {item.modelo}</p>
                                <div className={item.data ? Style.boxIconGreen : Style.boxIconRed }></div>
                        </div>
                    ))
                    }
                </>
                
            )}
            </div>
        </article>
    )
}