"use strict";

function getUserInput(word) {
	var input;
	input = prompt(word);
	return input;
}

function reversed(palindrome){
    var newWord;
    newWord = palindrome.split("").reverse().join("");
    return newWord;
}

function checkPal(palindromeReversed, palindrome) {
 	var awesomeWord;
 	var finalThing;
 	awesomeWord = (palindrome.split("").reverse().join(""));
 	if (palindrome === awesomeWord) {
 		alert("Yes. Tis a Palindrome!");
 	} else {
 		alert("No. Are you kidding me?");
 		main();
 	}
}

function main() {
	var palindrome;
	var palMessage;
	var palindromeReversed;
	var result;
	var ending;
	var palindromeReversed;
	palMessage = "Is it a palindrome?";
	palindrome = getUserInput(palMessage);
	palindromeReversed = reversed(palindrome);
	result = checkPal(palindromeReversed, palindrome);
}

main();