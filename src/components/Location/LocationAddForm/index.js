import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  ToolbarInput,
  ToolbarButton,
  Row,
  ToolbarErrorMessageText,
  FormContainer,
  FormSelect,
  RowToColumn,
  InputLabel,
  InputContainer,
  ToolbarActionButton,
  MapWrapper,
  TextMark,
  Col,
} from "./LocationAddFormElements";
import { BsPlus } from "react-icons/bs";
import { location } from "../../../constantsJsons.json";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt, FaMapMarked } from "react-icons/fa";
import { manipulateDataToAddress } from "../../../utils";

import axios from "axios";

function LocationAddForm(props) {
  const [locationData, setLocationData] = useState(location);
  const [oldLocationName, setOldNameLocation] = useState(location);
  const [message, setMessage] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [lat, setlat] = useState(31.4117257);
  const [lng, setlng] = useState(35.0818155);
  const [addInfoByMap, setInfoByMap] = useState(false);

  const AnyReactComponent = ({ text }) => (
    <Col>
      <TextMark>{locationData.name}</TextMark>
      <FaMapMarkerAlt color={"salmon"} size={20} />
    </Col>
  );

  useEffect(() => {
    if (props.edit) {
      setLocationData(props.oldlocation);
      setOldNameLocation(props.oldlocation.name);
      setlat(props.oldlocation.latitude);
      setlng(props.oldlocation.longtitude);
    }
  }, [props.edit, props.oldlocation]);

  function addHandle() {
    if (checkValidate(locationData)) {
      if (props.edit) {
        props.dispatch({
          type: "EDIT_LOCATION",
          location: locationData,
          oldname: oldLocationName,
          newname: locationData.name,
        });
        props.dispatch({
          type: "CLICK_LOCATION",
          name: undefined,
          location: undefined,
        });
        setMessage("Edit Location success!");
        setError(false);
      } else {
        props.dispatch({
          type: "ADD_LOCATION",
          location: locationData,
        });
        props.dispatch({
          type: "CLICK_LOCATION",
          name: undefined,
          location: undefined,
        });
        setMessage("Add Location success!");
        setError(false);
      }
    } else {
      setError(true);
      setMessage("Make sure all fields are entered");
    }
  }

  function checkValidate(location) {
    if (
      location.name &&
      location.address &&
      location.latitude &&
      location.longtitude &&
      location.category
    ) {
      return true;
    } else {
      return false;
    }
  }

  async function onMapClick(e) {
    var address = await getAddress();

    setlat(e.lat);
    setlng(e.lng);
    setLocationData({
      ...locationData,
      longtitude: e.lng,
      latitude: e.lat,
      address: address,
    });
  }

  async function getAddress() {
    const data = await axios.get(
      `http://open.mapquestapi.com/geocoding/v1/reverse?location=${lat},${lng}&includeRoadMetadata=true&includeNearestIntersection=true`,
      {
        params: {
          //Some cors problem by using this key from .env
          //key: process.env.REACT_APP_MAP_QUEST_KEY,
          key: "DADpOYZ0wHPg5U5uew9UFgMSjO1vW07A",
        },
      }
    );
    const address = manipulateDataToAddress(data);
    return address;
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
    <div>
      {
        <form style={{ display: "flex", flexDirection: "column" }}>
          <FormContainer>
            <RowToColumn>
              <InputContainer>
                <InputLabel>Name:</InputLabel> <br />
                <ToolbarInput
                  dark={props.dark}
                  value={locationData.name || ""}
                  onChange={(event) => {
                    setLocationData({
                      ...locationData,
                      name: event.target.value,
                    });
                  }}
                  type="text"
                  required
                  placeholder="Insert location name"
                ></ToolbarInput>
              </InputContainer>
              <InputContainer>
                <InputLabel>Address:</InputLabel> <br />
                <ToolbarInput
                  dark={props.dark}
                  value={locationData.address || ""}
                  onChange={(event) => {
                    setLocationData({
                      ...locationData,
                      address: event.target.value,
                    });
                  }}
                  type="text"
                  required
                  placeholder="Insert Address"
                ></ToolbarInput>
              </InputContainer>
            </RowToColumn>
            <RowToColumn>
              <InputContainer>
                <InputLabel>Latitude:</InputLabel> <br />
                <ToolbarInput
                  dark={props.dark}
                  value={locationData.latitude || ""}
                  onChange={(event) => {
                    setLocationData({
                      ...locationData,
                      latitude: event.target.value,
                    });
                  }}
                  type="text"
                  required
                  placeholder="Insert Latitude"
                ></ToolbarInput>
              </InputContainer>
              <InputContainer>
                <InputLabel>Longtitude:</InputLabel> <br />
                <ToolbarInput
                  dark={props.dark}
                  value={locationData.longtitude || ""}
                  onChange={(event) => {
                    setLocationData({
                      ...locationData,
                      longtitude: event.target.value,
                    });
                  }}
                  type="text"
                  required
                  placeholder="Insert Longtitude"
                ></ToolbarInput>
              </InputContainer>

              <ToolbarActionButton
                onClick={() => {
                  setInfoByMap(!addInfoByMap);
                }}
              >
                <Row>
                  {addInfoByMap ? (
                    <span>Close map</span>
                  ) : (
                    <span>Add info by map</span>
                  )}
                  <FaMapMarked style={{ marginLeft: "4px" }} />
                </Row>
              </ToolbarActionButton>
            </RowToColumn>
            <RowToColumn>
              {lat && lng && addInfoByMap ? (
                <MapWrapper>
                  <GoogleMapReact
                    onClick={(e) => onMapClick(e)}
                    bootstrapURLKeys={{
                      key: process.env.REACT_APP_GOOGLE_MAP_KEY,
                    }}
                    center={{
                      lat: Number(lat),
                      lng: Number(lng),
                    }}
                    defaultZoom={11}
                  >
                    <AnyReactComponent
                      lat={lat}
                      lng={lng}
                      text={location.name}
                    />
                  </GoogleMapReact>
                </MapWrapper>
              ) : null}
            </RowToColumn>
            <FormSelect
              dark={props.dark}
              required
              onChange={(event) => {
                setLocationData({
                  ...locationData,
                  category: event.target.value,
                });
              }}
            >
              {renderCategorySelectOptions()}
            </FormSelect>
          </FormContainer>
          <ToolbarButton
            dark={props.dark}
            type="submit"
            form="nameform"
            onClick={() => {
              addHandle();
            }}
          >
            <Row>
              {props.edit ? (
                <span>Update location</span>
              ) : (
                <span> New location</span>
              )}
              <BsPlus style={{ marginLeft: "5px" }} />
            </Row>
          </ToolbarButton>
        </form>
      }
      {message && (
        <ToolbarErrorMessageText error={error}>
          {message}
        </ToolbarErrorMessageText>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.ToolbarCategoryReducer,
  };
};

export default connect(mapStateToProps)(LocationAddForm);
