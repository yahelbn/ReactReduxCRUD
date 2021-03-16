import React, { useState } from "react";

import {
  ToolbarHeader,
  ToolbarButtonsContainer,
  ToolbarContainer,
  ToolbarButtonRow,
  ToolbarText,
  ToolbarActionButton,
} from "./ToolbarCompElements";
import { connect } from "react-redux";
import "../../DiffrentModals/Modal/Modal.css";
import Modal from "../../DiffrentModals/Modal/Modal";
import useModal from "../../DiffrentModals/Modal/useModal";
import EditModal from "../../DiffrentModals/LocationModals/EditModal/index";
import ViewModal from "../../DiffrentModals/LocationModals/ViewModal/index";

import LocationAddForm from "../LocationAddForm/index";
import FilterLocation from "../FilterLocation/index";

import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
function Toolbar(props) {
  const { isShowing, toggle } = useModal();
  const [choseModal, setChoseModal] = useState(undefined);

  function deleteHandle() {
    props.dispatch({
      type: "DELETE_LOCATION",
      name: props.name,
    });
    props.dispatch({
      type: "CLICK_LOCATION",
      name: undefined,
      location: undefined,
    });
  }

  function handleView() {
    setChoseModal(<ViewModal location={props.location} />);
    props.dispatch({
      type: "CLICK_LOCATION",
      name: undefined,
      location: undefined,
    });
    toggle();
  }

  function handleEdit() {
    setChoseModal(<EditModal oldlocation={props.location} />);
    toggle();
  }

  return (
    <ToolbarContainer>
      <Modal isShowing={isShowing} hide={toggle} modalcomp={choseModal} />
      <ToolbarHeader>
        {props.name ? "Location List" : "Locations"}
      </ToolbarHeader>

      <ToolbarButtonsContainer>
        <LocationAddForm />
        <hr style={{ width: "100%", margin: "30px" }} />

        <FilterLocation renderLocationToolbar={props.renderLocationToolbar} />
        <ToolbarText>
          {props.name
            ? `The selected location is:  ${props.name}`
            : `Please select a location so you can perform actions on it.`}
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
    name: state.ShowToolbarLocation.name,
    location: state.ShowToolbarLocation.location,
  };
};

export default connect(mapStateToProps)(Toolbar);
