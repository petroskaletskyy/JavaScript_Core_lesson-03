"use strict"

function find(arr, value) {
	var count = -1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == value) {
			count = i;
		}
	}
	return count;
}

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
console.log(find(numbers, 8));