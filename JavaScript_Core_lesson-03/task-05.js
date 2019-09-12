"use strict"

function camelize(str) {
	
	var words = str.split("-");
	
	var result = "";
	result = words[0];
	  for (var i = 1 ; i < words.length ; i++) {
	    var word = words[i];
	    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
	    result += capitalizedWord;
	  }
	 
	  return result;
}

var string = "my-short-string-my-short-string-my-short-string";
console.log(camelize(string));