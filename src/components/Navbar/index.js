import {Link, useLocation} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
export default function Navbar (){
    const loccation = useLocation();
    const ativar = (url)=>{
       if(url === loccation.pathname){
        return "btn btn-primary";
       }
       return "btn btn-outline-primary";
    }
    return(
        <nav>
            <Link to ="/" className={ativar ('/')}>Inicio</Link>
            <Link to ="/listar" className={ativar ('/listar')}>Listar</Link>
            <Link to ="/novo" className={ativar ('/novo')}>Nova</Link>
            <Link to ="/sair" className={ativar ('/sair')}>Sair</Link>
        </nav>
    )
}