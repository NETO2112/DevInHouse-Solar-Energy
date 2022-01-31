import React, { useEffect, useState } from "react";

function Dashboard() {

  const [units, setUnits] = useState([]);
  const [activeUnits, setActiveUnits] = useState(0);
  const [energyAverage, setEnergyAverage] = useState(0);

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
      .then(data => {
        let arrayEnergy = data.map(unit => parseInt(unit.energy))
        let sum = 0;
        for(let i=0;i<arrayEnergy.length;i++) {
          sum = sum + arrayEnergy[i];
        }
        let noOfUnits = [...new Set(data.map(item => item.units_id))]
        /* let newSum = parseInt(sum/arrayEnergy.length) li de novo e fiquei na dúvida se era assim (que parece fazer mais sentido) ou do jeito de baixo (que é o que fala no documento) */
        let newSum = parseInt(sum/noOfUnits.length)
        setEnergyAverage(newSum)
        let dates = [...new Set(data.map(item => item.date))]
        console.log(dates)
      })
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
          <h2>{energyAverage} kw</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard