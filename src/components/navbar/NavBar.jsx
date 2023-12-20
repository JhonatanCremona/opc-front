//Dependencias
import { Link } from "react-router-dom"
import { BellIcon } from '@heroicons/react/outline';
//Components
import { NavLink } from "./NavLink";
//Styles
import Style from "./NavBar.module.css";

export const NavBar = () => {
    const opciones = [
        {
            id:"1",
            href:"/contacts",
            text:"Contacto"
        },
        {
            id:"2",
            href:"/Dashboard",
            text:"Dashboard"
        }
    ]
    return (
        <>
            <nav className={Style.navbar}>
                <div id="title">
                    <Link className={Style.logo} to="/" > 
                        <h1 className={Style.titleh1}>Cremona</h1>
                        <h1 className={Style.titlesub}><b>Inoxidable S.A.</b></h1>
                    </Link>
                </div>
                <ul className={Style.lista}>
                    <li>
                        <Link to={"/notification"}>
                        <BellIcon
                            className={Style.icon} 
                            aria-hidden="true"
                        />
                        </Link>
                    </li>
                    {
                        opciones.map(({id, href, text}) => {
                            return (
                                <li key={id}>
                                    <NavLink to={href}>{text}</NavLink>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </nav>
        </>
    )
}