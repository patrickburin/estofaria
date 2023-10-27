import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

  .topBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 15px;
    gap: 20px;
    background: #3e3e3e;
  }

  img {
    width: 175px;
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px;
  background: #000000;
  height: 100%;
  font-size: 18px;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    gap: 10px;
    color: #ffffff;
  }

  hr {
    width: 100%;
  }
`;
