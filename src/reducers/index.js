/* Location Reducers */
import ShowToolbarLocation from "./LocationReducers/ShowToolbarLocation";
import ToolbarLocationReducer from "./LocationReducers/ToolbarLocationReducer";

/* Category Reducers */
import ToolbarCategoryReducer from "./CategoryReducers/ToolbarCategoryReducer";
import ShowToolbar from "./CategoryReducers/ShowToolbar";

/* Other Reducers */
import SelectOptionReducer from "./OtherReducers/SelectOptionReducer";

import { combineReducers } from "redux";
export default combineReducers({
  SelectOptionReducer,
  ToolbarLocationReducer,
  ShowToolbarLocation,
  ToolbarCategoryReducer,
  ShowToolbar,
});
