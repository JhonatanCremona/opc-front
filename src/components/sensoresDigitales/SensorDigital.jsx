import { ButtonOn } from "../assets/ButtonOn"
import { ButtonOnOff } from "../Icon"
import Style from "./SensorDigital.module.css"

export const SensorDigital = () => {
    return (
        <article className={Style.boxSensorD}>
            <div className={Style.boxContainer}>
                <p className={Style.boxTitle}>Component</p>
                <ButtonOnOff color =""/>
            </div>
            <div className={Style.boxContainer}>
                <p className={Style.boxTitle}>Component</p>
                <ButtonOnOff color =""/>
            </div>
            <div className={Style.boxContainer}>
                <p className={Style.boxTitle}>Component</p>
                <ButtonOnOff color =""/>
            </div>
        </article>
    )
}