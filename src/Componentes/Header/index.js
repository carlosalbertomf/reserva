import React from "react";
import {Link} from 'react-router-dom';
import { AreaHeader } from "./styled";

function Header(props) {
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

            <div className="avatar">
              <img src={props.user.avatar} />
              <label>{props.user.name}</label>

            </div>
        </nav>
      </div>
      
    </AreaHeader>
  );
}
export default Header;
