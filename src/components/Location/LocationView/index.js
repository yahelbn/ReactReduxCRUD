import Toolbar from "../ToolbarComp/index";
import AllLocations from "../ListBodyComp/AllLocations/AllLocations";
import React, { useState } from "react";

function LocationView() {
  const [renderLocations, setRenderLocations] = useState(false);
  function renderLocationToolbar() {
    setRenderLocations(!renderLocations);
  }
  return (
    <div style={{ paddingBottom: "120px" }}>
      <Toolbar renderLocationToolbar={renderLocationToolbar} />
      <AllLocations renderLocations={renderLocations} />
    </div>
  );
}

export default LocationView;
