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
  max-width: 280px;
  height: 60%;
  margin-bottom: 35px;
  margin-left: 15px;
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
  margin-bottom: 30px;
  @media screen and (max-width: 550px) {
    font-size: 0.8rem;
  }
`;
