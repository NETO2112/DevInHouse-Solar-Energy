import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ContainerDefault from "../../components/ContainerContent";
import { ChartContainer, InfoBox, InfoContainer } from "./styles";
import TitleComp from "../../components/Title";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {

  const [units, setUnits] = useState([]);
  const [activeUnits, setActiveUnits] = useState(0);
  const [energyAverage, setEnergyAverage] = useState(0);
  const [energyArray, setEnergyArray] = useState([]);

  let d = new Date(),
    month = '' + (d.getMonth() + 1),
    year = '' + d.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  
  let saveDate = year + month;
  let pastMonths = [];

  for (let i=0;i<12;i++) {
    if(parseInt(month) - 12 + i < 0) {
      if(1+i+parseInt(month)<=12) {
        pastMonths[i] = (parseInt(year)-1).toString() + ('0' + (1+i+parseInt(month))).slice(-2);
      } else {
        pastMonths[i] = (parseInt(saveDate)-11+i).toString()
      }
    } else {
      pastMonths[i] = (parseInt(saveDate)-11+i).toString()
    }
  }

  let label = []
  pastMonths.forEach(item => {
    let nome = item.substring(4);
    let ano = item.substring(2,4);
    switch (nome) {
      case '01': label.push('Jan ' + ano);
        break;
      case '02': label.push('Fev ' + ano);
        break;
      case '03': label.push('Mar ' + ano);
        break;
      case '04': label.push('Abr ' + ano);
        break;
      case '05': label.push('Mai ' + ano);
        break;
      case '06': label.push('Jun ' + ano);
        break;
      case '07': label.push('Jul ' + ano);
        break;
      case '08': label.push('Ago ' + ano);
        break;
      case '09': label.push('Set ' + ano);
        break;
      case '10': label.push('Out ' + ano);
        break;
      case '11': label.push('Nov ' + ano);
        break;
      case '12': label.push('Dec ' + ano);
        break;
    }
  })

  useEffect(() => {
    async function handleGetUnit() {
      await fetch('http://localhost:3333/units')
      .then(response => response.json())
      .then(data => {
        setUnits(data);
        let actives = data.filter(unit => unit.active === true);
        setActiveUnits(actives.length)
      })
    }
    handleGetUnit()

    async function handleGetEnergy() {
      await fetch('http://localhost:3333/geracoes')
      .then(response => response.json())
      .then(data => {
        let arrayEnergy = data.map(unit => parseInt(unit.energy))
        let sum = arrayEnergy.reduce((a,b) => parseInt(a) + parseInt(b));
        let noOfUnits = [...new Set(data.map(item => item.units_id))]
        /* sum = parseInt(sum/arrayEnergy.length) li de novo e fiquei na dúvida se era assim (que parece fazer mais sentido) ou do jeito de baixo (que é o que fala no documento) */
        sum = parseInt(sum/noOfUnits.length)
        setEnergyAverage(sum)
        let totalEnergyPerMonth = []
        for (let i = 0; i < 12; i++) {
          let hasData = data.filter((a) => a['date'] === pastMonths[i]);
          if (hasData.length > 0) {
            let energyPerMonth = data.filter((a) => a['date'] === pastMonths[i]).map(e => e['energy']).reduce((a, b) => parseInt(a) + parseInt(b))
            totalEnergyPerMonth = [...totalEnergyPerMonth, energyPerMonth]
          } else {
            totalEnergyPerMonth = [...totalEnergyPerMonth, 0]
          }
        }
        setEnergyArray(totalEnergyPerMonth)
      })
    }
    handleGetEnergy()
  },[]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Total de energia gerada por mês',
      },
    },
  };

  const labels = label;
  const data = {
    labels,
    datasets: [
      {
        label: 'Total Energy',
        data: energyArray,
        borderColor: '#2196F3',
        backgroundColor: '#2196F382',
        tension: 0.35,
        pointRadius: 5
      }
    ],
  };

  return (
    <ContainerDefault>
      <TitleComp>Dashboard</TitleComp>
      <InfoContainer>
        <InfoBox>
          <p>Total de Unidades</p>
          <span>{units.length}</span>
        </InfoBox>
        <InfoBox>
          <p>Unidades Ativas</p>
          <span>{activeUnits}</span>
        </InfoBox>
        <InfoBox>
          <p>Unidades Inativas</p>
          <span>{units.length - activeUnits}</span>
        </InfoBox>
        <InfoBox>
          <p>Média de Energia</p>
          <span>{energyAverage} kw</span>
        </InfoBox>
      </InfoContainer>
      <ChartContainer>
        <Line options={options} data={data} />
      </ChartContainer>
    </ContainerDefault>
  )
}

export default Dashboard