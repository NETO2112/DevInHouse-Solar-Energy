import React from "react";
import { Button } from "./styles";

function ButtonGlobal({children, ...otherProps }) {
  return(
    <Button {...otherProps}>
      {children}
    </Button>
  )
}

export default ButtonGlobal;