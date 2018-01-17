// Code your solution here:
function driversWithRevenueOver (array, integer) {
  return array.filter(function (element) { return element['revenue'] > integer;});
}

function driverNamesWithRevenueOver (array, integer) {
  let newarray = driversWithRevenueOver(array, integer).map(function (element) { return element['name'];});
  return newarray
}
