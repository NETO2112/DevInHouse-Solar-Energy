import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import InputDate from "../../components/InputDate";
import Select from "../../components/Select";

function Generation() {

  const [monthYear, setMonthYear] = useState(new Date())
  const [units, setUnits] = useState([])
  const [unit, setUnit] = useState([])
  const [energy, setEnergy] = useState()

  useEffect(() => {
    async function handleGetUnit() {
      const response = await fetch('http://localhost:3333/units');
      const data = await response.json();
      setUnits(data);
      setUnit(data.id);
    };
    handleGetUnit();
  },[]);

  async function handleSubmit(e) {
    e.preventDefault();
    
    let d = new Date(monthYear),
      month = '' + (d.getMonth() + 1),
      year = '' + d.getFullYear();

    if(month.length < 2) {
      month = '0' + month;
    }

    let saveDate = month + year;
    
    try {
      await fetch('http://localhost:3333/geracoes',
      {
        method: 'POST',
        body: JSON.stringify({
          units_id: unit,
          date: saveDate,
          energy
        }),
        headers: { 'Content-Type' : 'application/json'}
      })
    } catch (error) {
      alert('Não deu boa')
    }
  }

  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Select
          label="Unidade geradora:"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          options={units}
        />
        <InputDate
          label="Mês/Ano"
          selected={monthYear}
          onChange={(date) => setMonthYear(date)}
          showMonthYearPicker
          dateFormat="MM/yyyy"
        />
        <Input
          type="number"
          label="Total KW gerado"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}

export default Generation;