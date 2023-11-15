import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  gap: 20px;
  position: fixed;
  z-index: 999;
  margin-top: 90px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #565656;
    cursor: pointer;
  }
`;

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 28px;
  padding: 10px 15px;
  height: 100%;
  background-color: #000000;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    cursor: pointer;
  }

  hr {
    width: 100%;
  }
`;
