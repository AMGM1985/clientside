// Get elements from inside the form
var locate 				= document.getElementById('locate');
var checkIn 			= document.getElementById('check-in');
var checkOut 			= document.getElementById('check-out');
var roomNo 				= document.getElementById('rm');
var roomType 			= document.getElementById('room-type');
var customerName 		= document.getElementById('customer-name');
var email 				= document.getElementById('email');
var phone				= document.getElementById('phone');

var submitButton		= document.getElementById('submit-button');

var locateError			= document.getElementById('locate-error');
var checkInError		= document.getElementById('check-in-error');
var checkOutError		= document.getElementById('check-out-error');
var roomNoError			= document.getElementById('room-no-error');
var roomTypeError		= document.getElementById('room-type-error');
var customerNameError 	= document.getElementById('customer-name-error');
var emailError			= document.getElementById('email-error');
var phoneError			= document.getElementById('phone-error');

// Listen for clicks on the submit submitButton
submitButton.onclick = function( event ){

	// Assume the form is Valid
	var formIsValid = true;


	// If the user has not chosen a location from the drop down
	if( locate.value == 'select' ) {
		// Display error message
		locateError.innerHTML = '*Select a location';
		formIsValid = false;

	} else {
		// Remove error messages
		locateError.innerHTML = '';

	}

		// If the user has not chosen number of rooms from the drop down
	if( roomNo.value == 'select' ) {
		// Display error message
		roomNoError.innerHTML = '*Select no. of rooms';
		formIsValid = false;

	} else {
		// Remove error messages
		roomNoError.innerHTML = '';
	}

		
		// If the user has not chosen room type from the drop down
	if( roomType.value == 'select' ) {
		// Display error message
		roomTypeError.innerHTML = '*Select room';
		formIsValid = false;

	} else {
		// Remove error messages
		roomTypeError.innerHTML = '';
	}

	// Check to make sure that the check in date is correct length
	if( checkStringLengthValid (checkIn.value, 6, 10) )  { 

		// date is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		checkInError.innerHTML = '';

		// name Pattern
		var checkInPattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( checkInPattern, checkIn.value) ) { 

			// Display an error message
		checkInError.innerHTML = '*Not a valid Date';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		checkInError.innerHTML = '*Enter Date dd/mm/yyyy';
		formIsValid = false;
	}



	// Check to make sure that the check out date is correct length
	if( checkStringLengthValid (checkOut.value, 6, 10) )  { 

		// date is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		checkOutError.innerHTML = '';

		// name Pattern
		var checkOutPattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( checkOutPattern, checkOut.value) ) { 

			// Display an error message
		checkOutError.innerHTML = '*Not a valid Date';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		checkOutError.innerHTML = '*Enter Date dd/mm/yyyy';
		formIsValid = false;
	}




	// Check to make sure that the name is a correct length
	if( checkStringLengthValid (customerName.value, 2, 20) )  { 

		// name is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		customerNameError.innerHTML = '';

		// name Pattern
		var customerNamePattern = /^[a-zA-Z' -]{1,20}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( customerNamePattern, customerName.value) ) { 

			// Display an error message
		customerNameError.innerHTML = '*Not a valid Name';
		formIsValid = false;
		} 

	} else {
		// name is either too short or too long. Display an error message
		customerNameError.innerHTML = '*Enter Name';
		formIsValid = false;
	}





	// Check to make sure that the email is a correct length
	if( checkStringLengthValid (email.value, 2, 200) )  { 

		// Email is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		emailError.innerHTML = '';

		// name Pattern
		var emailPattern = /^[a-zA-Z0-9._-]{2,20}@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.?[a-zA-Z0-9._-]*$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( emailPattern, email.value) ) {
			
			// Display an error message
		emailError.innerHTML = '*Not a valid email';
		formIsValid = false;
		} 

	} else {
		// email is either too short or too long. Display and error message
		emailError.innerHTML = '*Enter a valid email';
		formIsValid = false;
	}
	

	// Check to make sure that the phone number is a correct length
	if( checkStringLengthValid (phone.value, 6, 20) )  { 

		// Phone number is long enough, now check that it is using valid characters.
	
		// Clear any error messages
		phoneError.innerHTML = '';

		// name Pattern
		var phonePattern = /^[0-9+ ]{6,20}$/;

		// Send the pattern and the string to a reusable function
		if( !checkPatternMatch( phonePattern, phone.value) ) {
			
			// Display an error message
		phoneError.innerHTML = '*Not a valid phone no.';
		formIsValid = false;
		} 

	} else {
		// Phone no. is either too short or too long. Display and error message
		phoneError.innerHTML = '*Enter a valid phone no.';
		formIsValid = false;
	}

	

	// Is the form still valid?
	if( !formIsValid ) {

		event.preventDefault();
		// Stop the form from submitting
		return false;

	}

}