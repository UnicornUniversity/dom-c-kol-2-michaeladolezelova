//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  let dtoOut = hexToDec(inputNumber, inputNumberSystem, outputNumberSystem);
  return dtoOut;
}

/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [16];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [10];
}

export function hexToDec(vstupniData, inputNumberSystem, outputNumberSystem) {

	// SELECTION: validace vstupu
	if (!vstupniData || vstupniData.length === 0) {
		throw new Error("Vstup nesmí být prázdný");
	}
	if (inputNumberSystem !== 16 || outputNumberSystem !== 10) {
		throw new Error("Podporován je pouze převod hex (16) → desítková (10)");
	}

	// SEQUENCE: inicializace
	const HEX_POLE = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
	let dec = 0;
	const n = vstupniData.length;
	vstupniData = vstupniData.toUpperCase();

	// ITERATION: čtení od prvního k poslednímu — exponent se počítá odzadu
	for (let i = 0; i < n; i++) {

		// Variable Definition: aktuální znak
		const currentCharacter = vstupniData[i];

		// SELECTION: validace znaku
		const hexIndex = HEX_POLE.indexOf(currentCharacter);
		if (hexIndex === -1) {
			throw new Error("Neplatný hex znak: " + currentCharacter);
		}

		// SEQUENCE: výpočet (jednoduše)
		const exponent = n - 1 - i;  // pozice od konce
		dec += hexIndex * Math.pow(16, exponent);  // k součtu přičti hodnotu znaku × 16^exponent
	}

	// SEQUENCE: výstup
	return String(dec);
}