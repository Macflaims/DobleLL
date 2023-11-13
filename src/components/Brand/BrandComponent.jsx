import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTruck} from "@fortawesome/free-solid-svg-icons"
import Navbar from 'react-bootstrap/Navbar';
import "./BrandComponent.css"

const BrandComponent = ()=> {
    return(
        <>
            <Navbar.Brand href="#home" className="text-light"><FontAwesomeIcon className="icon" icon={faTruck} /> Transportes</Navbar.Brand>        
        </>
    )
}

export default BrandComponent;


