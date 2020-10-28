import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 36px;
  width: 100%;
  text-align: center;
  letter-spacing: 0.0125em;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #5a3472;
  border-radius: 4px;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6f408c;
  }
`;
