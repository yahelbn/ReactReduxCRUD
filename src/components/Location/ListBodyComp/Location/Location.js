import {
  LocationContainer,
  CategoryContent,
  IconCheckDiv,
  Row,
} from "./LocationElements";
import { connect } from "react-redux";
import { GiCheckMark } from "react-icons/gi";
function Location(props) {
  return (
    <LocationContainer
      pressed={props.pressed}
      onClick={() =>
        props.dispatch({
          type: "CLICK_LOCATION",
          name: props.location.name,
          location: props.location,
        })
      }
    >
      <Row>
        <CategoryContent>{`Location: ${props.location.name}`}</CategoryContent>
        <CategoryContent>{`Category: ${props.location.category}`}</CategoryContent>
      </Row>

      <IconCheckDiv pressed={props.pressed}>
        <GiCheckMark />
      </IconCheckDiv>
    </LocationContainer>
  );
}

export default connect()(Location);
