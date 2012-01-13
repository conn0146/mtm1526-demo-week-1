// JavaScript single line comment
/*
Javascript multi-line comment
*/

// 'alert()' pops up a little window with an OK button
alert('Warning! You are a douchebag');

// 'prompt()' is for user input, has a text field for the user to enter some text
var name;

while (!name) {
	name = prompt('What is your name?');
}

// 'console.log()' writes out the content of a variable for debugging
// identical to ActionScript's 'trace()'
console.log(name);

// 'document.write()' allows us to output stuff to the end of the HTML file
// the '+' operator is for combining strings together
document.write('Hello, '+name);

for (var i=0; i<5; i++) {
	document.write('<br>' + i);
	document.write('<h1>' + i + '</h1>');
}

function isNameCool () {
	var name = prompt('What is your name?');
	
	if (name == 'Jason') {
		document.write('That is an awesome name!');
	} else {
		document.write("I don't like your name");
	}
}

isNameCool();

var writeNameMultipleTimes = function () {
	for (var i = 0; i < 5; i++ ) {
		document.write('<strong>Jason</strong><br>');
	}
};

writeNameMultipleTimes();