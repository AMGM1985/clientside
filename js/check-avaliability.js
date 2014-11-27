// Get elements from inside the form
var arrive 			= document.getElementById('arriving');
var leave 			= document.getElementById('leaving');
var rooms	 			= document.getElementById('rooms');

var submitButton		= document.getElementById('check-availability');

var arriveError			= document.getElementById('arrive-error');
var leaveError			= document.getElementById('leave-error');
var roomsError			= document.getElementById('rooms-error');


// Listen for clicks on the submit submitButton
submitButton.onclick = function( ){

	// Assume the form is Valid
	var formIsValid = true;


		// If the user has not chosen number of rooms from the drop down
	if( rooms.value == '0' ) {
		// Display error message
		roomsError.innerHTML = '*Please select No. of Rooms';
		formIsValid = false;

	} else {
		// Remove error messages
		roomsError.innerHTML = '';
	}


		

	// Check to make sure that the check out date is correct length
	if( checkStringLengthValid (arrive.value, 6, 10) )  { 

		// date is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		arriveError.innerHTML = '';

		// name Pattern
		var arrivePattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( arrivePattern, arrive.value) ) { 

			// Display an error message
		arriveError.innerHTML = '*Not a valid Date';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		arriveError.innerHTML = '*Date dd/mm/yyyy';
		formIsValid = false;
	}



	// Check to make sure that the check out date is correct length
	if( checkStringLengthValid (leave.value, 6, 10) )  { 

		// date is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		leaveError.innerHTML = '';

		// name Pattern
		var leavePattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( leavePattern, leave.value) ) { 

			// Display an error message
		leaveError.innerHTML = '*Not a valid Date';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		leaveError.innerHTML = '*Date dd/mm/yyyy';
		formIsValid = false;
	}


	// Is the form still valid?
	if( !formIsValid ) {

	
		// Stop the form from submitting
		return false;

	}

}