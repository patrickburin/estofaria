import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 25px;
  gap: 40px;
  background: #3e3e3e;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;

  img {
    width: 175px;
  }

  .logo {
    cursor: pointer;
  }
`;
