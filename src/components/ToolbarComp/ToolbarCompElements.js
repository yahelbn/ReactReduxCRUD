import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ToolbarHeader = styled.h1`
  margin-bottom: 35px;
  color: gray;
  text-shadow: 2px 2px 4px #000000;
  letter-spacing: 0.2rem;
`;

export const ToolbarButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const ToolbarButtonRow = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ToolbarButtonAction = styled.button``;

export const ToolbarText = styled.span`
  margin-top: 20px;
  text-align: center;
`;

export const ToolbarErrorMessageText = styled.div`
  margin-top: 20px;
  font-size: 10px;
  color: salmon;
  border: 1px solid salmon;
  background-color: mintcream;
  padding: 10px 10px;
  border-radius: 20px;
`;

export const ToolbarInput = styled.input`
  padding: 6px;
  padding-right: 20px;
  margin-bottom: 15px;
  border: none;
  border-radius: 4px;
  &:hover {
    border: 1.7px solid lightskyblue;
  }
  ::-webkit-input-placeholder {
    color: lightgray;
    font-size: 0.8rem;
  }
`;

export const ToolbarButton = styled.button`
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
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  align-items: center;
`;

export const ToolbarActionButton = styled.button`
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
`;
