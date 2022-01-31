import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

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
    <>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Apelido"
          placeholder="Painel 1"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
        <Input 
          label="Local"
          placeholder="Painel 1"
          value={address}
          onChange={(e) => {setAddress(e.target.value)}}
        />
        <Input 
          label="Marca"
          placeholder="Painel 1"
          value={brand}
          onChange={(e) => {setBrand(e.target.value)}}
        />
        <Input 
          label="Modelo"
          placeholder="Painel 1"
          value={model}
          onChange={(e) => {setModel(e.target.value)}}
        />
        <Checkbox 
          label="Ativo"
          checked={active}
          value={active}
          onChange={(e) => {setActive(e.target.checked)}}
        />
        <button type="submit">Salvar</button>
      </form>
    </>
  )
}

export default Register;