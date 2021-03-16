import styled from "styled-components";

export const ToolbarActionButton = styled.button`
  margin-top: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: tan;
    box-shadow: 0px 15px 20px #d2b48c;
    color: #fff;
    transform: translateY(-7px);
  }

  @media screen and (max-width: 550px) {
    font-size: 9px;
  }
`;

export const ToolbarButtonRow = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const FormSelect = styled.select`
  border: ${({ dark }) => (dark ? "1px solid lightgray" : "none")};
  padding: 6px;
  padding-right: 20px;
  border-radius: 4px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    &:selected {
      background-color: #fff;
      color: black;
    }
  }
  &:disabled {
    background-color: #fff;
    color: black;
  }
`;
