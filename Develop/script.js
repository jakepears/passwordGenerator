/** @format */

// Assignment code here

// Function to prompt user for password criteria
function getPasswordCriteria() {
	// Get length
	const length = parseInt(
		prompt('Enter desired password length (8-128 characters:')
	);

	// Validate input
	if (isNaN(length) || length < 8 || length > 128) {
		alert('Password length must be a number between 8 and 128');
		return null;
	}

	// Get character types to include
	const hasLowercase = confirm('Include lowercase letters?');
	const hasUppercase = confirm('Include uppercase letters?');
	const hasNumeric = confirm('Include numbers?');
	const hasSpecial = confirm('Include special characters?');

	// Validate input
	if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
		alert('Must select at least one character type');
		return null;
	}

	// Return user input
	return {
		length: length,
		hasLowercase: hasLowercase,
		hasUppercase: hasUppercase,
		hasNumeric: hasNumeric,
		hasSpecial: hasSpecial,
	};
}

// Get references to the #generate element
const generateBtn = document.getElementById('generate');

// Write password to the #password input
function writePassword() {
	const criteria = getPasswordCriteria();

	const password = generatePassword(criteria);

	const passwordText = document.getElementById('password');

	passwordText.value = password;

	// Generate and display password
	if (criteria) {
		const password = generatePassword(criteria);

		document.getElementById('password').value = password;
	} else {
		alert('Please provide valid criteria');
	}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Function to generate password
function generatePassword(criteria) {
	const password = '';
	const charset = '';

	// Build charset string
	if (criteria.hasLowercase) {
		charset += 'abcdefghijklmnopqrstuvwxyz';
	}

	if (criteria.hasUppercase) {
		charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	if (criteria.hasNumeric) {
		charset += '0123456789';
	}

	if (criteria.hasSpecial) {
		charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
	}

	// Generate password
	for (let i = 0; i < criteria.length; i++) {
		password += charset.charAt(Math.floor(Math.random() * charset.length));

		// Break when length matches user input
		if (password.length === criteria.length) {
			break;
		}
	}

	return password;
}
