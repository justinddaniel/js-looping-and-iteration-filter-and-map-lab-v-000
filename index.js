// Code your solution here:
function driversWithRevenueOver (array, integer) {
  return array.filter(function (element) { return element['revenue'] > integer;});
}