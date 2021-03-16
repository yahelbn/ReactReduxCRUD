import React, { useState } from "react";
import { connect } from "react-redux";
import {
  ToolbarActionButton,
  ToolbarButtonRow,
  FilterContainer,
  Row,
  FormSelect,
} from "./FilterLocationElements";
/* Import icons*/
import { CgCloseR } from "react-icons/cg";
import { BsFilter } from "react-icons/bs";
function FilterLocation(props) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterByCategoryOpen, setFilterByCategoryOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState(undefined);

  function handleSortAlphaBetic() {
    props.dispatch({
      type: "SORT_ALPHA_LOCATION",
    });
    props.dispatch({
      type: "CLICK_LOCATION",
      name: undefined,
      location: undefined,
    });
    props.renderLocationToolbar();
    localStorage.removeItem("locationbycategory");
  }

  function handleGroupedBy() {
    props.dispatch({
      type: "GROUPED_BY_LOCATION",
    });
    props.dispatch({
      type: "CLICK_LOCATION",
      name: undefined,
      location: undefined,
    });
    props.renderLocationToolbar();
    localStorage.removeItem("locationbycategory");
  }

  function handleFilter() {
    setFilterByCategoryOpen(!filterByCategoryOpen);
  }
  function handleFilterByCategory() {
    props.dispatch({
      type: "FILTER_BY_CATEGORY",
      category: categorySelected,
    });
    props.dispatch({
      type: "CLICK_LOCATION",
      name: undefined,
      location: undefined,
    });
    props.renderLocationToolbar();
    setFilterByCategoryOpen(false);
  }

  //render Categories to select Component
  const renderCategorySelectOptions = () => {
    let options = [];
    options.push(
      <React.Fragment key={0}>
        <option value="">Select an Category</option>
      </React.Fragment>
    );
    props.categories.map((category, index) => {
      return options.push(
        <React.Fragment key={index + 1}>
          <option value={category}>{category}</option>
        </React.Fragment>
      );
    });
    return options;
  };

  return (
    <FilterContainer>
      <ToolbarActionButton
        style={{ width: "50%", marginBottom: "15px" }}
        onClick={() => {
          setFilterOpen(!filterOpen);
        }}
      >
        {filterOpen ? (
          <Row>
            <span> Close filter options</span>
            <CgCloseR style={{ marginLeft: "5px", fontSize: "17px" }} />
          </Row>
        ) : (
          <Row>
            <span> Filter list</span>
            <BsFilter style={{ marginLeft: "5px", fontSize: "20px" }} />
          </Row>
        )}
      </ToolbarActionButton>
      {filterOpen && (
        <ToolbarButtonRow>
          <ToolbarActionButton onClick={() => handleSortAlphaBetic()}>
            Sort alphabetically
          </ToolbarActionButton>
          <ToolbarActionButton onClick={() => handleGroupedBy()}>
            Grouped by category
          </ToolbarActionButton>
          <ToolbarActionButton onClick={() => handleFilter()}>
            {filterByCategoryOpen ? "Close" : "Open"} filtered by category
          </ToolbarActionButton>
        </ToolbarButtonRow>
      )}

      {filterByCategoryOpen && filterOpen ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Row>
            <span style={{ margin: "10px" }}>
              Chose your category to filter:
            </span>
            <FormSelect
              dark={props.dark}
              required
              onChange={(event) => {
                setCategorySelected(event.target.value);
              }}
            >
              {renderCategorySelectOptions()}
            </FormSelect>
          </Row>
          <ToolbarActionButton onClick={() => handleFilterByCategory()}>
            Filter
          </ToolbarActionButton>
        </div>
      ) : null}
    </FilterContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.ToolbarCategoryReducer,
  };
};

export default connect(mapStateToProps)(FilterLocation);
