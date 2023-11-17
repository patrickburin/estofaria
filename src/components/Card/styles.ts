import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 350px;
  height: 200px;
  flex-direction: column;
  border-radius: 10px;
  border-bottom: 2px solid #a82525;
  border-right: 2px solid #a82525;
  box-shadow: 4px 4px 6px 0px rgba(0, 0, 0, 0.2);
  background: #353535;
  padding: 10px 15px;
  gap: 15px;
  cursor: pointer;

  .title {
    font-size: 28px;
    text-align: start;
    color: #a82525;
    font-weight: bold;
  }

  .image {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: green;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
  }
`;
