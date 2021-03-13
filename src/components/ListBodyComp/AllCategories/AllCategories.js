import { AllCategoriesContainer } from "./AllCategoriesElements";
import { connect } from "react-redux";
import Category from "../Category/Category";
import React from "react";

function AllCategories(props) {
  return (
    <AllCategoriesContainer>
      {props.categories.map((category, index) => (
        <Category
          key={index}
          pressed={category === props.name ? true : false}
          category={category}
        />
      ))}
    </AllCategoriesContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.ToolbarReducer,
    name: state.ShowToolbar.name,
  };
};

export default connect(mapStateToProps)(AllCategories);
