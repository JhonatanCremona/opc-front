import Style from "./SensorTem.module.css"

export const SensorTemp = () => {
    return(
        <>
            <div className={Style.boxSensor}>
                <p className={Style.boxTitle}>Sensor Temperatura</p>
                <h2 className={Style.boxCant}>20,45 <span>°C</span></h2>
            </div>
        </>
    )
}