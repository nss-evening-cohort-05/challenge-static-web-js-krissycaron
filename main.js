// If you would like to have your work reviewed, push up the branch (git push origin challenge) 
//and submit a pull request on Github. A member of the instruction team will take a look and give feedback. Your work does not need to be complete to receive feedback.

// Instructions

// It is absolutely critical that you read each of these requirements because as a professional 
//you will be expected to completely understand what you are expected to do. 
//If you submit code that does not fulfill the requirements, you will be sent to your room with no dinner.

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.

// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key 
// (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" 
// and the tree should be shown in the console. This requires you to add an event listener to the button, 
// as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, 
// or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree




var growTree = "";

function treeMaker () {
	// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
	var treeHeight = document.getElementById("height");
	// The character to use should be from user input in a <input type="text"> field in the DOM.
	var	treeCharacter = document.getElementById("character"); 

	// must run through a for loop to build the tree up
	for (var i=0; i < treeHeight.value; i++) 
		// growTree += (treeHeight-(i+1)); not sure if this equation is in the correct spot
	if (treeHeight.value -(i+1)){
		growTree
	} 



	// console.log(growTree);
}

console.log(treeMaker[i=6]); //this is not defined in log, i cannot figure out how to define it. 

//code from temp converter, to run funtion on click or enter key pressed
convert.addEventListener("click", treeMaker);
temp.addEventListener("keypress", function(e){
	// console.log(e);
	if (e.charCode === 13) {
		treeMaker();
	}
});
