import React from "react";

import { connect } from "react-redux";
import editimage from "../../../../images/editimage.svg";
import LocationAddForm from "../../../Location/LocationAddForm/index";
import { Column, ImgWrap, Img } from "./EditModalElements";

const EditModal = ({ oldlocation }) => {
  return (
    <Column>
      <LocationAddForm dark={true} edit={true} oldlocation={oldlocation} />
      <ImgWrap>
        <Img src={editimage}></Img>
      </ImgWrap>
    </Column>
  );
};

export default connect()(EditModal);
