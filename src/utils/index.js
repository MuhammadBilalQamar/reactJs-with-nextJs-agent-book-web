// Break paragraph to second line helper function
export const breakToSecondLine = (columnValue, limit) => {
  var result = "";
  if (window.innerWidth < 1100) {
    while (columnValue.length > 0) {
      result += columnValue.substring(0, limit) + "\n";
      columnValue = columnValue.substring(limit);
    }
    columnValue = result;

    return columnValue;
  } else return columnValue;
};

// Title Casing helper function
export const titleCase = (string) => {
  var sentence = string?.toLowerCase()?.split(" ");
  for (var i = 0; i < sentence?.length; i++) {
    if (sentence[i][0]) {
      sentence[i] = sentence[i][0]?.toUpperCase() + sentence[i]?.slice(1);
    }
  }
  return sentence?.join(" ");
};
