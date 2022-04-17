import React from "react";
import {Link} from 'react-router-dom';
import { AreaHeader } from "./styled";

function Header() {
  return (
    <AreaHeader>
      <div className="container">
        <div className="logo">
            <img src="../../../banner_icea.png" alt="Logo UFOP" /> 
        </div>

        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/configuracao">Configuração</Link></li>
                <li><Link to="/logout">Sair</Link></li>
            </ul>
        </nav>
      </div>
      
    </AreaHeader>
  );
}
export default Header;
