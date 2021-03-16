import styled from "styled-components";

export const ToolbarInput = styled.input`
  border: ${({ dark }) => (dark ? "1px solid lightgray" : "none")};
  padding: 6px;
  padding-right: 20px;
  margin: 15px 10px;

  border-radius: 4px;
  &:hover {
    border: 1.7px solid lightskyblue;
  }
  ::-webkit-input-placeholder {
    color: lightgray;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 550px) {
    margin: 10px 0px;
  }
`;

export const InputLabel = styled.label`
  padding: 6px;
  padding-right: 20px;
  margin: 15px 10px;
  border: none;

  @media screen and (max-width: 550px) {
    margin: 10px 0px;
  }
`;

export const InputContainer = styled.div`
  margin: 7px;
`;

export const ToolbarButton = styled.button`
  border: ${({ dark }) => (dark ? "1px solid lightgray" : "none")};

  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;

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

export const ToolbarErrorMessageText = styled.div`
  margin-top: 20px;
  font-size: 10px;
  color: ${({ error }) => (error ? "salmon" : "green")};
  background-color: mintcream;
  padding: 10px 10px;
  border-radius: 20px;
  border: ${({ error }) => (error ? "1px solid salmon" : "1px solid green")};
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormSelect = styled.select`
  border: ${({ dark }) => (dark ? "1px solid lightgray" : "none")};
  margin-top: 10px;
  padding: 6px;
  padding-right: 20px;
  margin-bottom: 20px;

  border-radius: 4px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
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

export const RowToColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
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

export const MapWrapper = styled.div`
  margin-top: 15px;
  width: 60vh;
  height: 17vh;
  @media screen and (max-width: 550px) {
    width: 40vh;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextMark = styled.span`
  color: black;
  font-weight: bold;
  margin-bottom: 3px;
`;
