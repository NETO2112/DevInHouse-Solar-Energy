import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonGlobal from "../../components/ButtonGlobal";
import Checkbox from "../../components/Checkbox";
import ContainerDefault from "../../components/ContainerContent";
import Input from "../../components/Input";
import TitleComp from "../../components/Title";
import { SubContainerRegister, SubTitle } from "./styles";

function Register() {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [active, setActive] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();

    let idEdit = location.pathname.replace(/\D/g, "")
    
    if(idEdit != "") {
      try {
        await fetch(`http://localhost:3333/units/${idEdit}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            name: name,
            address: address,
            brand: brand,
            model: model,
            active: active
          }),
          headers: { 'Content-Type' : 'application/json'}
        })
        navigate('/unidades')
      } catch (error) {
        alert('Não deu boa')
      }
    } 
    
    else {
      try {
        await fetch('http://localhost:3333/units',
        {
          method: 'POST',
          body: JSON.stringify({
            name: name,
            address: address,
            brand: brand,
            model: model,
            active: active
          }),
          headers: { 'Content-Type' : 'application/json'}
        })
        navigate('/unidades')
      } catch (error) {
        alert('Não deu boa')
      }
    }
  } 

  useEffect(() => {
    let idEdit = location.pathname.replace(/\D/g, "")
    
    if(idEdit != "") {
      async function handleGetUnit() {
        const response = await fetch(`http://localhost:3333/units/${idEdit}`);
        const data = await response.json();
        setName(data.name);
        setAddress(data.address);
        setBrand(data.brand);
        setModel(data.model);
        setActive(data.active);
      }
      handleGetUnit();
    } else {return}
    
  },[])

  return(
    <ContainerDefault>
      <TitleComp>Unidades</TitleComp>
      <SubContainerRegister>
        {location.pathname == '/unidades/cadastro' ? <SubTitle>Cadastro de Unidade Geradora</SubTitle> : <SubTitle>Editar Unidade Geradora</SubTitle>}
        <form onSubmit={handleSubmit}>
          <Input 
            label="Apelido"
            placeholder="Apelido da Unidade"
            value={name}
            width="50%"
            onChange={(e) => {setName(e.target.value)}}
            />
          <Input 
            label="Local"
            placeholder="Local da Unidade"
            value={address}
            onChange={(e) => {setAddress(e.target.value)}}
            />
          <Input 
            label="Marca"
            placeholder="Marca do Aparelho"
            value={brand}
            onChange={(e) => {setBrand(e.target.value)}}
            />
          <Input 
            label="Modelo"
            placeholder="Modelo do Aparelho"
            value={model}
            onChange={(e) => {setModel(e.target.value)}}
            />
          <Checkbox 
            label="Ativo"
            checked={active}
            value={active}
            onChange={(e) => {setActive(e.target.checked)}}
            />
          <ButtonGlobal type="submit">Salvar</ButtonGlobal>
        </form>
      </SubContainerRegister>
    </ContainerDefault>
  )
}

export default Register;