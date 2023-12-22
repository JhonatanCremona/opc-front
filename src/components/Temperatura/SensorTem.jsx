import Style from "./SensorTem.module.css"

export const SensorTemp = (props) => {

    return(
        <>
            <div className={Style.boxSensor}>
                <p className={Style.boxTitle}>Sensor Temperatura</p>
                <h2 className={Style.boxCant}>{props.valor}<span>°C</span></h2>
            </div>
        </>
    )
}