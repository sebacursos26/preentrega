import { Link } from "react-router-dom";
import logo from "/img/cencerro.png";
import "./Header.css"
import { Nav } from "../Nav/Nav";

export const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <Link to={"/"}>    
                <img id="logoCenc" src={logo} />
                <span>Cabaña El Cencerro</span>     
                </Link>    
            </div> 
             <Nav />  
        </header>
    );
};