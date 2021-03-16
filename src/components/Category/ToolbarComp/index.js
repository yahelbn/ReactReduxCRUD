import React, { useState } from "react";

import {
  ToolbarHeader,
  ToolbarButtonsContainer,
  ToolbarContainer,
  ToolbarButtonRow,
  ToolbarText,
  ToolbarInput,
  ToolbarButton,
  Row,
  ToolbarErrorMessageText,
  ToolbarActionButton,
} from "./ToolbarCompElements";
import { connect } from "react-redux";
import { BsPlus } from "react-icons/bs";
import "../../DiffrentModals/Modal/Modal.css";
import Modal from "../../DiffrentModals/Modal/Modal";
import useModal from "../../DiffrentModals/Modal/useModal";
import EditModal from "../../DiffrentModals/CategoryModals/EditModal";
import ViewModal from "../../DiffrentModals/CategoryModals/ViewModal";

/* Icons imports*/
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";

function Toolbar(props) {
  const [inputCategory, setInputCategory] = useState(null);
  const { isShowing, toggle } = useModal();
  const [choseModal, setChoseModal] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(undefined);

  function addHandle() {
    if (inputCategory) {
      props.dispatch({
        type: "ADD_CATEGORY",
        name: inputCategory,
      });
      props.dispatch({
        type: "CLICK_CATEGORY",
        name: undefined,
      });
      setErrorMessage(undefined);
    } else {
      setErrorMessage("You must enter some name of category!");
    }
  }
  function deleteHandle() {
    props.dispatch({
      type: "DELETE_CATEGORY",
      name: props.name,
    });
    props.dispatch({
      type: "CLICK_CATEGORY",
      name: undefined,
    });
  }

  function handleView() {
    setChoseModal(<ViewModal category={props.name} />);
    props.dispatch({
      type: "CLICK_CATEGORY",
      name: undefined,
    });
    toggle();
  }

  function handleEdit() {
    setChoseModal(<EditModal category={props.name} />);
    toggle();
  }

  return (
    <ToolbarContainer>
      <Modal isShowing={isShowing} hide={toggle} modalcomp={choseModal} />
      <ToolbarHeader>
        {props.name ? "Category List" : "Categories"}
      </ToolbarHeader>
      <ToolbarButtonsContainer>
        {
          <div style={{ display: "flex", flexDirection: "column" }}>
            <ToolbarInput
              onChange={(e) => setInputCategory(e.target.value)}
              type="text"
              required
              placeholder="Insert category name"
            ></ToolbarInput>
            <ToolbarButton
              onClick={() => {
                addHandle();
              }}
            >
              <Row>
                <span> New category</span>
                <BsPlus style={{ marginLeft: "5px" }} />
              </Row>
            </ToolbarButton>
          </div>
        }
        {errorMessage && (
          <ToolbarErrorMessageText>{errorMessage}</ToolbarErrorMessageText>
        )}
        <ToolbarText>
          {props.name
            ? `The selected category is:  ${props.name}`
            : `Please select a category so you can perform actions on it.`}
        </ToolbarText>

        <ToolbarButtonRow>
          {props.name ? (
            <ToolbarActionButton onClick={() => handleEdit()}>
              edit
              <AiOutlineEdit />
            </ToolbarActionButton>
          ) : null}
          {props.name ? (
            <ToolbarActionButton onClick={() => handleView()}>
              view
              <AiOutlineEye />
            </ToolbarActionButton>
          ) : null}
          {props.name ? (
            <ToolbarActionButton
              onClick={() => {
                deleteHandle();
              }}
            >
              delete
              <BiTrash />
            </ToolbarActionButton>
          ) : null}
        </ToolbarButtonRow>
      </ToolbarButtonsContainer>
    </ToolbarContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.ShowToolbar.name,
  };
};

export default connect(mapStateToProps)(Toolbar);
