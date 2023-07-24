// Definition of trailing commas
// Trailing commas are commas after the last element or property of an array, object, or function parameter list.

// Why trailing commas are useful
// Trailing commas are useful when adding new elements, properties, or parameters to an existing array, object, or function parameter list. It helps to avoid syntax errors when forgetting to add a comma to the last element or property.

const array = [25, 35, 45, , , , , ,];
console.log(array);
console.log(array.length);
