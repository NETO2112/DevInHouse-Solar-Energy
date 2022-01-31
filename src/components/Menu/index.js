import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import { Nav } from "./styles";

function Menu() {
  return(
    <Nav>
      <Logo width="150px" />
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/unidades">Unidades</Link></li>
        <li><Link to="/geracoes">Cadastro de energia gerada</Link></li>
      </ul>
    </Nav>
  )
}

export default Menu;