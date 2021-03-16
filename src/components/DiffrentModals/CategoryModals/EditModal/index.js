import React, { useState } from "react";

import { connect } from "react-redux";
import editimage from "../../../../images/editimage.svg";

import {
  FormButton,
  Column,
  HeaderService,
  EditModalInput,
  ImgWrap,
  Img,
  ToolbarMessageText,
} from "./EditModalElements";

const EditModal = ({ category, dispatch, location }) => {
  const [inputCategory, setInputCategory] = useState(null);
  const [message, setMessage] = useState(undefined);
  const [error, setError] = useState(false);

  function handleEdit() {
    if (inputCategory === category) {
      setMessage("You do not change the name of the category!");
      setError(true);
    } else if (!inputCategory) {
      setMessage("You must enter some name of category!");
      setError(true);
    } else {
      dispatch({
        type: "EDIT_CATEGORY",
        name: category,
        newname: inputCategory,
      });
      dispatch({
        type: "CLICK_CATEGORY",
        name: undefined,
      });
      setError(false);
      setMessage("The category you selected has changed!");
    }
  }

  return (
    <Column>
      <HeaderService>{`Edit your chose Category: ${category}`}</HeaderService>
      <EditModalInput
        onChange={(e) => setInputCategory(e.target.value)}
        type="text"
        required
        placeholder={`Enter a new name`}
      ></EditModalInput>

      {message && (
        <ToolbarMessageText error={error}>{message}</ToolbarMessageText>
      )}

      <FormButton type="submit" onClick={() => handleEdit()}>
        edit
      </FormButton>
      <ImgWrap>
        <Img src={editimage}></Img>
      </ImgWrap>
    </Column>
  );
};

export default connect()(EditModal);
