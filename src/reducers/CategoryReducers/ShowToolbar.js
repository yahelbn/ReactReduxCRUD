export default function ShowToolbar(state = false, action) {
  switch (action.type) {
    case "CLICK_CATEGORY":
      return { name: action.name };
    default:
      return state;
  }
}
