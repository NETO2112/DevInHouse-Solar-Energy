import React from "react";
import { Title } from "./styles";

function TitleComp({children}) {
  return (
    <Title>
      {children}
    </Title>
  )
}

export default TitleComp;