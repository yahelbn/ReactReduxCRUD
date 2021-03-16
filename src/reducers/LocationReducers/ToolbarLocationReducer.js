export default function ToolbarLocationReducer(
  state = localStorage.getItem("locations")
    ? JSON.parse(localStorage.getItem("locations"))
    : [],
  action
) {
  switch (action.type) {
    case "ADD_LOCATION":
      var locations = contains(state, "name", action.location.name)
        ? state
        : state.concat([action.location]);
      insertDataToStorage(locations);
      return locations;

    case "DELETE_LOCATION":
      locations = state.filter((location) => location.name !== action.name);
      insertDataToStorage(locations);
      return locations;

    case "EDIT_LOCATION":
      locations = [];

      if (
        !contains(state, "name", action.newname) ||
        action.newname === action.oldname
      ) {
        locations = state.map((category) => {
          if (category.name === action.oldname) {
            return (category = action.location);
          } else return category;
        });
      } else {
        locations = state;
      }
      insertDataToStorage(locations);
      return locations;

    case "VIEW_DETAILS_LOCATION":
      locations = state.filter((category) => category === action.name);
      insertDataToStorage(locations);
      return locations;

    case "SORT_ALPHA_LOCATION":
      locations = state.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      insertDataToStorage(locations);
      return locations;

    case "GROUPED_BY_LOCATION":
      locations = groupedByFunction(state);
      insertDataToStorage(locations);
      return locations;

    case "FILTER_BY_CATEGORY":
      locations = [];
      state.map((location) => {
        if (location.category === action.category) {
          locations.push(location);
          return true;
        }
        return true;
      });

      localStorage.setItem("locationbycategory", JSON.stringify(locations));
      return state;
    default:
      locations = state;
      return locations;
  }
}

function insertDataToStorage(data) {
  localStorage.setItem("locations", JSON.stringify(data));
}

function contains(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) return true;
  }
  return false;
}

function groupedByFunction(state) {
  let groupedByJson = state.reduce(function (r, a) {
    r[a.category] = r[a.category] || [];
    r[a.category].push(a);
    return r;
  }, Object.create(null));
  console.log(groupedByJson);
  let finalGroup = [];

  Object.keys(groupedByJson).forEach(function (key) {
    groupedByJson[key].map((array) => finalGroup.push(array));
  });
  console.log(finalGroup);
  return finalGroup;
}
