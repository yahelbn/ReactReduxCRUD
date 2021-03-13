import React from "react";

import { connect } from "react-redux";
import viewimage from "../../../images/viewimage.svg";
import {
  Column,
  HeaderService,
  SubHeaderService,
  ImgWrap,
  Img,
} from "./ViewModalElements";

const ViewModal = ({ modalContent, category }) => {
  return (
    <Column>
      <HeaderService>View Category details</HeaderService>
      <SubHeaderService>{`The name of the category is:     ${category}`}</SubHeaderService>
      <ImgWrap>
        <Img src={viewimage}></Img>
      </ImgWrap>
    </Column>
  );
};

export default connect()(ViewModal);
