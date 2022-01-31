import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContainerUnidades, Label, SubContainerUnidades, Table, Title } from "./styles";

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
    setUnits(units.filter(item => item.id !== idUnit))
  }

  return (
    <ContainerUnidades>
      <Title>Unidades</Title>
      <SubContainerUnidades>
        <Label>Lista de Unidades</Label>
        <Table>
          <thead>
            <tr>
              <th width="10%">ID</th>
              <th width="15%">Apelido</th>
              <th width="25%">Local</th>
              <th width="15%">Marca</th>
              <th width="15%">Modelo</th>
              <th width="10%">Botão</th>
              <th width="10%">Botão</th>
            </tr>
          </thead>
          <tbody>
            {
              units.map(item =>
                <tr>
                  <td width="10%">{item.id}</td>
                  <td width="15%">{item.name}</td>
                  <td width="25%">{item.address}</td>
                  <td width="15%">{item.brand}</td>
                  <td width="15%">{item.model}</td>
                  <td width="10%"><button onClick={() => handleEdit(item.id)}>Editar</button></td>
                  <td width="10%"><button onClick={() => handleRemove(item.id)}>Remover</button></td>
                </tr>
                )
            }
          </tbody>
        </Table>
        <Button onClick={handleRegister}>Nova Unidade</Button>
      </SubContainerUnidades>
    </ContainerUnidades>
  )
}

export default Unidades