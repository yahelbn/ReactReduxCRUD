export default function SelectOptionReducer(
  state = localStorage.getItem("categoriesselected")
    ? localStorage.getItem("categoriesselected")
    : true,
  action
) {
  switch (action.type) {
    case "TOGGLE_FOTTER":
      var boolChoose = action.categoriesselected;
      insertDataToStorage(boolChoose);
      return { categoriesselected: boolChoose };
    default:
      return state;
  }
}

function insertDataToStorage(data) {
  localStorage.setItem("categoriesselected", JSON.stringify(data));
}
