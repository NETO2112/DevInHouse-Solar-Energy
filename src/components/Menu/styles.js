import styled from "styled-components";

export const Nav = styled.nav`
  height: 100%;
  width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin-top: 20px;
  }
`;

export const Li = styled.li`
  list-style: none;
  padding: 10px;
  border-radius: 15px;
  a {
    text-decoration: none;
    color: #000;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0;
  }
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0 auto;
`;