import React, { useEffect, useState } from "react";
import { BiMap } from "react-icons/bi";
import { connect } from "react-redux";
import viewimage from "../../../../images/manwithmap.svg";
import {
  Column,
  HeaderService,
  SubHeaderService,
  ImgWrap,
  Img,
  Row,
  MapWrapper,
  Col,
  TextMark,
} from "./ViewModalElements";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ViewModal = ({ location }) => {
  const [lat, setlat] = useState(undefined);
  const [lng, setlng] = useState(undefined);

  const AnyReactComponent = ({ text }) => (
    <Col>
      <TextMark>{text}</TextMark>

      <FaMapMarkerAlt size={20} />
    </Col>
  );

  useEffect(() => {
    setlat(location.latitude);
    setlng(location.longtitude);
  }, [location.longtitude, location.latitude]);

  return (
    <Column>
      <HeaderService>View Category details</HeaderService>
      <Row>
        <BiMap style={{ marginRight: "3px" }} />
        <SubHeaderService>{`Location name:  ${location.name}`}</SubHeaderService>
      </Row>
      <Row>
        <SubHeaderService>{`Address:  ${location.address}`}</SubHeaderService>
      </Row>
      <Row>
        <SubHeaderService>{`Lat:  ${location.latitude}  Lng:  ${location.longtitude}`}</SubHeaderService>
      </Row>
      <Row>
        <SubHeaderService>{`Category:  ${location.category} `}</SubHeaderService>
      </Row>
      {lat && lng ? (
        <MapWrapper>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAP_KEY,
            }}
            defaultCenter={{
              lat: Number(lat),
              lng: Number(lng),
            }}
            defaultZoom={11}
          >
            <AnyReactComponent lat={lat} lng={lng} text={location.name} />
          </GoogleMapReact>
        </MapWrapper>
      ) : null}
      <ImgWrap>
        <Img src={viewimage}></Img>
      </ImgWrap>
    </Column>
  );
};

export default connect()(ViewModal);
