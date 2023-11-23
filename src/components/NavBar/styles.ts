import styled from "styled-components";
import { device } from "../../device";

export const NavBar = styled.div`
  display: flex;
  padding: 5px 20px;
  position: fixed;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #565656;
    cursor: pointer;
  }

  .icons {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 90px;
  }

  @media ${device.mobile} {
    .icons {
      display: none;
    }
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

  @media ${device.mobile} {
    font-size: 30px;
    padding: 20px 20px;
    gap: 10px;
  }
`;
