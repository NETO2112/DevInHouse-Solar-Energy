import React from "react";
import { DivContent } from "./styles";

function ContainerDefault({children}) {
  return (
    <DivContent>
      {children}
    </DivContent>
  )
}

export default ContainerDefault;