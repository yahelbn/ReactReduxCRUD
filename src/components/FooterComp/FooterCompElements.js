import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: gray;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const FooterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    margin: 0 0;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: center;
  align-items: center;
`;

export const FooterButton = styled.button`
  border: ${({ lightbutton }) =>
    lightbutton ? `black 2px solid ` : `floralwhite`};

  margin-bottom: 10px;
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
  width: 200px;
  height: 40px;
`;
