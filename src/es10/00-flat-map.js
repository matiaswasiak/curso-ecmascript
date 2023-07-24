// Flat
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const array = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, 4, 5, 6, 7]]];
console.log(array.flat(3));

// FlatMap
// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a map() followed by a flat() of depth 1, but flatMap() is often quite useful, as merging both into one method is slightly more efficient.

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));
