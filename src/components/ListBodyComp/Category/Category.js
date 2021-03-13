import {
  CategoryContainer,
  CategoryContent,
  IconCheckDiv,
} from "./CategoryElements";
import { connect } from "react-redux";
import { GiCheckMark } from "react-icons/gi";
function Category(props) {
  return (
    <CategoryContainer
      pressed={props.pressed}
      onClick={() =>
        props.dispatch({
          type: "CLICK_CATEGORY",
          name: props.category,
        })
      }
    >
      <CategoryContent>{props.category}</CategoryContent>
      <IconCheckDiv pressed={props.pressed}>
        <GiCheckMark />
      </IconCheckDiv>
    </CategoryContainer>
  );
}

export default connect()(Category);
