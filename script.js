function firstWord(s) {
  // your code here
	let newS = s.trim().split(" ");

	return newS[0];
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
