let inputs = [];


function renderScreen() {
	// alert(inputs.join(""));
	document.getElementById("container").value = inputs.join("");
}

function enterNumberSix() {
	inputs.push(6);
	renderScreen();
} 

function enterNumberFive() {
	inputs.push(5);
	renderScreen();
} 
function enterNumberFour() {
	inputs.push(4);
	renderScreen();
} 
function enterNumberThree() {
	inputs.push(3);
	renderScreen();
} 
function enterNumberTwo() {
	inputs.push(2);
	renderScreen();
} 
function enterNumberOne() {
	inputs.push(1);
	renderScreen();
} 
function enterNumberSeven() {
	inputs.push(7);
	renderScreen();
} 
function enterNumberEight() {
	inputs.push(8);
	renderScreen();
} 
function enterNumberNine() {
	inputs.push(9);
	renderScreen();
} 
function enterNumberZero() {
	inputs.push(0);
	renderScreen();
} 
function enterOperationAddition() {
	inputs.push('+');
	renderScreen();
}
function enterOperationMultiplication() {
	inputs.push('*');
	renderScreen();
}
function enterOperationSubtraction() {
	inputs.push('-');
	renderScreen();
} 
function enterNumberDot() {
	inputs.push('.');
	renderScreen();
} 
function enterOperationDivision() {
	inputs.push( '/' );
	renderScreen();
}  

function enterOperationLeftarrow() {
	inputs.pop();
	renderScreen();
}  

function enterOperationClear() {
	inputs = [];
	renderScreen();
} 

function enterOperationEqual() {
	var operation = inputs.join("");
	var output = eval(operation);
	console.log(operation,' = ', output);
	inputs = [];
	inputs.push(output);
	renderScreen();
}

function enterOperationLeftbracket() {
	inputs.push( '(' );
	renderScreen();
}

function enterOperationRightbracket() {
	inputs.push( ')' );
	renderScreen();
}

//function enterOperationSquare() {
//	inputs.push( '^' );
//	renderScreen();
//} 
//function enterOperationSquareroot() {
//	inputs.push( '√' );
//	renderScreen();
//} 
// function enterOperationAbs() {
	// inputs.push( '|' );
	// renderScreen();
//}

//function enterOperationPercentage() {
//	inputs.push( '%' );
//	renderScreen();
//} 

 
