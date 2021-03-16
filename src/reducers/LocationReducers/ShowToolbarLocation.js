export default function ShowToolbarLocation(state = false, action) {
  switch (action.type) {
    case "CLICK_LOCATION":
      return { name: action.name, location: action.location };
    default:
      return state;
  }
}
