import React, { useEffect, useState } from "react";

function Dashboard() {

  const [units, setUnits] = useState([]);
  const [activeUnits, setActiveUnits] = useState(0);

  useEffect(() => {
    async function handleGetUnit() {
      await fetch('http://localhost:3333/units')
      .then(response => response.json())
      .then(data => {
        setUnits(data);
        let actives = data.filter(unit => unit.active == true);
        setActiveUnits(actives.length)
      })
    }
    handleGetUnit()

    async function handleGetEnergy() {
      await fetch('http://localhost:3333/geracoes')
      .then(response => response.json())
    }
    handleGetEnergy()
    
  },[]);



  return (
    <div>
      <div style={{display: "flex"}}>
        <div>
          <p>Total de Unidades</p>
          <h2>{units.length}</h2>
        </div>
        <div>
          <p>Unidades Ativas</p>
          <h2>{activeUnits}</h2>
        </div>
        <div>
          <p>Unidades Inativas</p>
          <h2>{units.length - activeUnits}</h2>
        </div>
        <div>
          <p>Média de Energia</p>
          <h2>a</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard