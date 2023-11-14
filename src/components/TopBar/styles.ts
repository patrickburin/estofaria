import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 25px;
  gap: 40px;
  background: #3e3e3e;

  img {
    width: 175px;
  }

  .logo {
    cursor: pointer;
  }
`;
