var arrive=document.getElementById("arriving");var leave=document.getElementById("leaving");var rooms=document.getElementById("rooms");var submitButton=document.getElementById("check-availability");var arriveError=document.getElementById("arrive-error");var leaveError=document.getElementById("leave-error");var roomsError=document.getElementById("rooms-error");submitButton.onclick=function(){var e=true;if(rooms.value=="0"){roomsError.innerHTML="*Please select No. of Rooms";e=false}else{roomsError.innerHTML=""}if(checkStringLengthValid(arrive.value,6,10)){arriveError.innerHTML="";var t=/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;if(!checkPatternMatch(t,arrive.value)){arriveError.innerHTML="*Not a valid Date";e=false}}else{arriveError.innerHTML="*Date dd/mm/yyyy";e=false}if(checkStringLengthValid(leave.value,6,10)){leaveError.innerHTML="";var n=/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;if(!checkPatternMatch(n,leave.value)){leaveError.innerHTML="*Not a valid Date";e=false}}else{leaveError.innerHTML="*Date dd/mm/yyyy";e=false}if(!e){return false}}