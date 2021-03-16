export function manipulateDataToAddress(data) {
  if (data.data.results[0].locations.length > 0) {
    var result = data.data.results[0].locations[0];
    var strLocation = "";
    if (
      result.adminArea1 !== undefined &&
      result.hasOwnProperty("adminArea1")
    ) {
      strLocation += ", " + result.adminArea1;
    }
    if (result.street !== undefined && result.hasOwnProperty("street")) {
      strLocation += ", " + result.street;
    }

    if (
      result.postalcode !== undefined &&
      result.hasOwnProperty("postalcode")
    ) {
      strLocation += ", " + result.postalcode;
    }

    if (
      result.adminArea3 !== undefined &&
      result.hasOwnProperty("adminArea3")
    ) {
      strLocation += ", " + result.adminArea3;
    }

    return strLocation;
  }
}
