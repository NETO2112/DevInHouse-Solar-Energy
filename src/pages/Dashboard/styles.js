import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  margin: 50px auto;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const InfoBox = styled.div`
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: #9FA2B4;
    margin: 10px 0;
  }
  span {
    font-size: 40px;
    font-weight: bold;
  }
`;

export const ChartContainer = styled.div`
  width: 50%;
  margin: 0 auto;
`;