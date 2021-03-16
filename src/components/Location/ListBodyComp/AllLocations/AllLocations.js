import { AllCategoriesContainer } from "./AllLocationsElements";
import { connect } from "react-redux";
import Location from "../Location/Location";
import React, { useEffect, useState } from "react";

function AllLocations(props) {
  const [locations, setLocations] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("locationbycategory") !== null) {
      setLocations(JSON.parse(localStorage.getItem("locationbycategory")));
    } else {
      setLocations(props.locations);
    }
  }, [props.locations, props.renderLocations]);
  return (
    <AllCategoriesContainer>
      {locations &&
        locations.map((location, index) => (
          <Location
            key={index}
            pressed={location.name === props.name ? true : false}
            location={location}
          />
        ))}
    </AllCategoriesContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    locations: state.ToolbarLocationReducer,
    name: state.ShowToolbarLocation.name,
  };
};

export default connect(mapStateToProps)(AllLocations);
