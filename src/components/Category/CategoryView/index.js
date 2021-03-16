import Toolbar from "../../../components/Category/ToolbarComp/index";
import AllCategories from "../../../components/Category/ListBodyComp/AllCategories/AllCategories";
function CategoryView() {
  return (
    <div style={{ paddingBottom: "120px" }}>
      <Toolbar />
      <AllCategories />
    </div>
  );
}

export default CategoryView;
