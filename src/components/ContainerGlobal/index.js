import React from "react";
import { ContainerGlobal } from "./styles";

function GlobalContainer({children}) {
  return (
    <ContainerGlobal>
      {children}
    </ContainerGlobal>
  )
}

export default GlobalContainer;