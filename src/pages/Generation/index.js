import React, { useEffect, useState } from "react";
import ButtonGlobal from "../../components/ButtonGlobal";
import ContainerDefault from "../../components/ContainerContent";
import Input from "../../components/Input";
import InputDate from "../../components/InputDate";
import Select from "../../components/Select";
import TitleComp from "../../components/Title";
import { FormGeneration, TextBox } from "./styles";

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

    let saveDate = year + month;
    
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
    <ContainerDefault>
      <TitleComp>Lançamento de Geração Mensal</TitleComp>
      <FormGeneration onSubmit={handleSubmit}>
        <TextBox>Unidade geradora:</TextBox>
        <Select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          options={units}
        />
        <TextBox>Mês/Ano:</TextBox>
        <InputDate
          selected={monthYear}
          onChange={(date) => setMonthYear(date)}
          showMonthYearPicker
          dateFormat="MM/yyyy"
        />
        <TextBox>Total KW gerado:</TextBox>
        <Input
          width="230px"
          type="number"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />
        <ButtonGlobal type="submit">Cadastrar</ButtonGlobal>
      </FormGeneration>
    </ContainerDefault>
  )
}

export default Generation;