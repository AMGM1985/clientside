// Function to check a pattern vs a string
function checkPatternMatch(thePattern, stringToCheck) {
	// Test the pattern vs the string
	return thePattern.test( stringToCheck.trim() );
}

// Function to check min / max characters of a string
function checkStringLengthValid( theString, minChar, maxChar, dontTrim ) {

	// Trim the string
	if( dontTrim == true ) {

	} else {
		theString = theString.trim();
	}

	// Check the string vs min characters
	if( theString.length < minChar || theString.length > maxChar ) {
		// Not enough characters or too many characters
		return false;
	} else {
		// Within range
		return true;
	}

}







