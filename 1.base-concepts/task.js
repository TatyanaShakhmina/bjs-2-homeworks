"use strict"

function solveEquation(a, b, c) {
	let arr = [];

	let discriminant = (Math.pow(b, 2) - 4 * a * c);

	if (discriminant === 0) {
		let radical = (-b / (2 * a));
		arr.push(radical);
	} else if (discriminant > 0) {
		let radicalOne = (-b + Math.sqrt(discriminant)) / (2 * a);
		let radicalTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
		console.log(arr);
		arr.push(radicalOne, radicalTwo);
	};

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	let monthPercent = percent / 100 / 12;

	let creditAmount = amount - contribution;

	let monthPayment = creditAmount * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), countMonths) - 1)));

	let totalCreditAmount = (monthPayment * countMonths);

	let conclusion = Number(totalCreditAmount.toFixed(2));

	return conclusion;
}