import "./App.css";
import Toolbar from "./components/ToolbarComp/index";
import AllCategories from "./components/ListBodyComp/AllCategories/AllCategories";
function App() {
  return (
    <div className="App">
      <Toolbar />
      <AllCategories />
    </div>
  );
}

export default App;
