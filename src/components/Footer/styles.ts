import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #282828;
  gap: 20px;
  flex-wrap: wrap;

  .icon {
    display: flex;
    width: 260px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 20px;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
    background: #353535;
    cursor: pointer;
  }
`;
