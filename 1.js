function getWeekDay(date){
  var weekday;
  // use array with day names
  switch (date.getDay()) {
    case 0: 
      weekday = "Sunday";
      break;
    case 1: 
      weekday = "Monday";
      break;
    case 2: 
      weekday = "Tuesday";
      break;
    case 3: 
      weekday = "Wednesday";
      break;
    case 4: 
      weekday = "Thursday";
      break;
    case 5: 
      weekday = "Friday";
      break;
    case 6: 
      weekday = "Saturday";
      break;
  }
  return weekday;
}

function getCurrentTimeInUSFormat(date){
	var timeString;
  var hour = date.getHours();
  
 	if (hour >= 12) {
  	timeString = (hour % 12).toString() + " PM";
  }
  // double or triple equals?
  else if (hour == 0) {
  	timeString = "12 AM";
  }
  else {
  	timeString = hour.toString() + " AM";
  }
  
  timeString = timeString + " : " + today.getMinutes() + " : " + today.getSeconds();
  return timeString;
}

var today = new Date();

alert("Today is : " + getWeekDay(today));
alert("Current time is : " + getCurrentTimeInUSFormat(today));
