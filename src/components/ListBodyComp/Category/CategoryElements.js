import styled from "styled-components";

export const CategoryContainer = styled.div`
  cursor: pointer;
  background-color: ${({ pressed }) => (pressed ? `silver ` : `floralwhite`)};

  border: 1px grey solid;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  -moz-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  -webkit-box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
  margin: 10px;
  transition: 0.8s;

  &:hover {
    background-color: lightgray;
    opacity: 0.6;
  }
`;

export const CategoryContent = styled.h4`
  color: dimgrey;
`;

export const IconCheckDiv = styled.div`
  margin-left: 15px;
  opacity: ${({ pressed }) => (pressed ? `0.8` : `0`)};
  visibility: ${({ pressed }) => (pressed ? `visible` : `hidden`)};
  transition: ${({ pressed }) =>
    pressed
      ? ` opacity 0.5s linear`
      : `visibility 0s 0.5s, opacity 0.5s linear`}; ;
`;
