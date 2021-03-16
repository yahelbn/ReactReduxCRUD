import "./App.css";

/* Import Components */
import CategoryView from "./components/Category/CategoryView/index";
import LocationView from "./components/Location/LocationView/index";
import FooterComp from "./components/FooterComp/index";

import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      {props.categoriesselected ? <CategoryView /> : <LocationView />}
      <FooterComp />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categoriesselected: state.SelectOptionReducer.categoriesselected,
  };
};

export default connect(mapStateToProps)(App);
