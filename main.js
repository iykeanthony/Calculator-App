'use strict';

let calculator = function (){

	let num1 = parseFloat(document.getElementById('num1').value);
	let num2 = parseFloat(document.getElementById('num2').value);
	let operator = document.getElementById('operator').value;
	let result;


	switch(operator){
		case 'Add':
		result = num1 + num2;
		break;

		case 'Subtract':
		result = num1 - num2;
		break;

		case 'Multiply':
		result = num1 * num2;
		break;

		case 'Divide':
		result = num1 / num2;
		break;

		case 'Exponent':
		result = num1 ** num2;
		break;

		case 'Modulus':
		result = num1 % num2;
		break;

		default:
		alert('Not a valid entry');
	}

	document.getElementById('output').textContent = `Answer is:  ${result}`;	
}


let clearField = function (){
	document.getElementById('num1').value = '';
	document.getElementById('num2').value = '';
	document.getElementById('output').textContent ='';
}


