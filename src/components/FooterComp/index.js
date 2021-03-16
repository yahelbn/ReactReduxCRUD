import React from "react";

import {
  FooterContainer,
  FooterButtonContainer,
  FooterButton,
  Row,
} from "./FooterCompElements";
import { connect } from "react-redux";
import { AiFillAppstore } from "react-icons/ai";
import { MdLocationSearching } from "react-icons/md";

function FooterComp(props) {
  function handleCategoriesButton() {
    props.dispatch({
      type: "TOGGLE_FOTTER",
      categoriesselected: true,
    });
  }

  function handleLocationButton() {
    props.dispatch({
      type: "TOGGLE_FOTTER",
      categoriesselected: false,
    });
  }
  return (
    <FooterContainer>
      <FooterButtonContainer>
        <FooterButton
          onClick={() => handleCategoriesButton()}
          lightbutton={props.categoriesselected}
        >
          <Row>
            <span> Categories</span>
            <AiFillAppstore style={{ marginLeft: "5px" }} />
          </Row>
        </FooterButton>
        <FooterButton
          onClick={() => handleLocationButton()}
          lightbutton={!props.categoriesselected}
        >
          <Row>
            <span> Locations</span>
            <MdLocationSearching style={{ marginLeft: "5px" }} />
          </Row>
        </FooterButton>
      </FooterButtonContainer>
    </FooterContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    categoriesselected: state.SelectOptionReducer.categoriesselected,
  };
};

export default connect(mapStateToProps)(FooterComp);
