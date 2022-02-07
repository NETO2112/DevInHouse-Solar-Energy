import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGlobal from "../../components/ButtonGlobal";
import ContainerDefault from "../../components/ContainerContent";
import TitleComp from "../../components/Title";
import { ButtonTable, Label, SubContainerUnidades, Table, THead, Title } from "./styles";

function Unidades() {

  const [units, setUnits] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetUnit() {
      const response = await fetch('http://localhost:3333/units');
      const data = await response.json();
      setUnits(data);
    };
    handleGetUnit();
  },[]);

  function handleRegister() {
    navigate('/unidades/cadastro');
  }

  function handleEdit(idUnit) {
    navigate(`/unidades/edit/${idUnit}`);
  }

  async function handleRemove(idUnit) {
    let Unit = idUnit;
    await fetch(`http://localhost:3333/units/${Unit}`,
    {
      method: 'DELETE',
      headers: { 'Content-Type' : 'application/json'}
    })
    .then(await fetch(`http://localhost:3333/geracoes?units_id=${Unit}`)
    .then(response => response.json())
    .then(data => {
      data.forEach(item => fetch(`http://localhost:3333/geracoes/${item.id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json'}
      }))
    }))
    setUnits(units.filter(item => item.id !== idUnit))
  }

  return (
    <ContainerDefault>
      <TitleComp>Unidades</TitleComp>
      <SubContainerUnidades>
        <Label>Lista de Unidades</Label>
        <Table>
          <THead>
            <tr>
              <th width="10%" style={{padding: '0 0 0 10px'}}>ID</th>
              <th width="15%">Apelido</th>
              <th width="35%">Local</th>
              <th width="15%">Marca</th>
              <th width="10%">Modelo</th>
              <th width="7%"></th>
              <th width="8%"></th>
            </tr>
          </THead>
          <tbody>
            {
              units.map(item =>
                <tr key={item.id}>
                  <td style={{padding: '0 0 0 10px'}}>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td><ButtonTable bg='#8DB51B' bgh='#6D950B' onClick={() => handleEdit(item.id)}>Editar</ButtonTable></td>
                  <td><ButtonTable bg='#D82D56' bgh='#B80D36' onClick={() => handleRemove(item.id)}>Remover</ButtonTable></td>
                </tr>
                )
            }
          </tbody>
        </Table>
        <ButtonGlobal onClick={handleRegister} float='right'>Nova Unidade</ButtonGlobal>
      </SubContainerUnidades>
    </ContainerDefault>
  )
}

export default Unidades