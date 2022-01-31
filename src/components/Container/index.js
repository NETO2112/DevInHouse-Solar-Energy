import React from "react";
import { ContainerGlobal } from "./styles";

function Container({children}) {
  return (
    <ContainerGlobal>
      {children}
    </ContainerGlobal>
  )
}

export default Container;