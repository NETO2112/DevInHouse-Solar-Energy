import styled from 'styled-components'

export const LoginImage = styled.img`
  height: 969px;
  position: absolute;
`;

export const ContainerImage = styled.div`
  width: 50vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const ContainerLogin = styled.form`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonLogin = styled.button`
  width: 332px;
  height: 64px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #4CBC9A;
  color: #fff;
  margin-top: 20px;
  &:hover{
    background: #2C9C7A;
  }
`;