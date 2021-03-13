export default function ToolbarReducer(
  state = localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories"))
    : [],
  action
) {
  switch (action.type) {
    case "ADD_CATEGORY":
      var categories = state.includes(action.name)
        ? state
        : state.concat([action.name]);
      insertDataToStorage(categories);
      return categories;

    case "DELETE_CATEGORY":
      categories = state.filter((category) => category !== action.name);
      insertDataToStorage(categories);
      return categories;

    case "EDIT_CATEGORY":
      categories = [];
      if (!state.includes(action.newname)) {
        categories = state.map((category) => {
          if (category === action.name) {
            return (category = action.newname);
          } else return category;
        });
      } else {
        categories = state;
      }
      insertDataToStorage(categories);
      return categories;

    case "VIEW_DETAILS_CATEGORY":
      categories = state.filter((category) => category === action.name);
      insertDataToStorage(categories);
      return categories;
    default:
      categories = state;
      return categories;
  }
}

function insertDataToStorage(data) {
  localStorage.setItem("categories", JSON.stringify(data));
}
