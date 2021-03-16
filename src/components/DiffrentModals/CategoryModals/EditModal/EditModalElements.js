import styled from "styled-components";

export const FormButton = styled.button`
  height: fit-content;
  margin-top: 20px;
  margin-bottom: 20px;
  background: #dcd9c6;
  padding: 11px 12px;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 20px;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    margin-top: 10px;
  }

  &:hover {
    background-color: #dcd9c6;
    box-shadow: 0px 15px 20px #dcd9c6;
    color: #fff;
    transform: translateY(-7px);
  }
`;

export const Paragraph = styled.p`
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
  font-size: 0.8rem;

  @media screen and (max-width: 550px) {
    font-size: 0.7rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  margin-top: 15px;

  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  direction: ${({ rtl }) => (rtl ? "rtl" : "ltr")};
`;

export const ImgWrap = styled.div`
  margin-top: 20px;
  max-width: 280px;
  height: 60%;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 70%;
  padding-right: 0;
`;

export const HeaderService = styled.h2`
  padding-bottom: 15px;
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const SubHeaderService = styled.h4`
  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

export const EditModalInput = styled.input`
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  border: 1.7px solid lightgray;

  &:hover {
    border: 1.7px solid lightskyblue;
  }
  ::-webkit-input-placeholder {
    color: lightgray;
    font-size: 0.8rem;
  }
`;

export const ToolbarMessageText = styled.div`
  margin-top: 20px;
  font-size: 10px;
  color: ${({ error }) => (error ? "salmon" : "green")};
  border: ${({ error }) => (error ? "1px solid salmon" : "1px solid green")};

  background-color: mintcream;
  padding: 10px 10px;
  border-radius: 20px;
`;
