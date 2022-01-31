import React from "react";
import { LogoImg } from "./styles";

function Logo({ width }) {
  return (
    <LogoImg 
      src={require('./logo1.png')}
      alt="logo DEVinHOUSE Solar Energy"
      width={width}
    />
  )
}

export default Logo;