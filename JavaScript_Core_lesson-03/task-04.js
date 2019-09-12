"use strict"

function filterRange(array, a, b) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		if ((array[i] >= a) && (array[i] <= b)) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(filterRange(numbers, 3, 7));