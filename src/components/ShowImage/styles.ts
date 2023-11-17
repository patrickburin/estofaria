import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: 36px;
    font-weight: bold;
    color: #a82525;
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
