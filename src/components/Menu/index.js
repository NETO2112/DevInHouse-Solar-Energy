import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo";
import { Li, Nav, Ul } from "./styles";
import { RiPulseFill, RiSettings5Fill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";

function Menu() {

  const location = useLocation();
  let idEdit = location.pathname.replace(/\D/g, "")

  return(
    <Nav>
      <Logo width="200px"/>
      <Ul>
        <Li style={location.pathname == "/dashboard" ? {background: "#4CBC9A"} : {}}>
          <Link to="/dashboard" style={location.pathname == "/dashboard" ? {color: "#FFFFFF"} : {color: "#A098AE"}}>
            <FaChartPie style={location.pathname == "/dashboard" ? {color: "#FFFFFF"} : {color: "#A098AE"}}/>Dashboard
          </Link>
        </Li>
        <Li style={location.pathname == "/unidades" || location.pathname == "/unidades/cadastro" || location.pathname == `/unidades/edit/${idEdit}` ? {background: "#4CBC9A"} : {}}>
          <Link to="/unidades" style={location.pathname == "/unidades" || location.pathname == "/unidades/cadastro" || location.pathname == `/unidades/edit/${idEdit}` ? {color: "#FFFFFF"} : {color: "#A098AE"}}>
            <RiPulseFill style={location.pathname == "/unidades" || location.pathname == "/unidades/cadastro" || location.pathname == `/unidades/edit/${idEdit}` ? {color: "#FFFFFF"} : {color: "#A098AE"}}/>Unidades Consumidoras
          </Link>
        </Li>
        <Li style={location.pathname == "/geracoes" ? {background: "#4CBC9A"} : {}}>
          <Link to="/geracoes" style={location.pathname == "/geracoes" ? {color: "#FFFFFF"} : {color: "#A098AE"}}>
            <RiSettings5Fill style={location.pathname == "/geracoes" ? {color: "#FFFFFF"} : {color: "#A098AE"}}/>Cadastro de energia gerada
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Menu;