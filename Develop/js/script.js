var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));


var nine = moment('9:00am', 'h:mm a').format('hh:mm a');
$('#nine').text(nine);

var ten = moment('10:00am', 'hh:mm a').format('hh:mm a');
$('#ten').text(ten);

var eleven = moment('11:00am', 'hh:mm a').format('hh:mm a');
$('#eleven').text(eleven);

var noon = moment('12:00pm', 'h:mm a').format('hh:mm a');
$('#twelve').text(noon);

var one = moment('1:00pm', 'h:mm a').format('hh:mm a');
$('#one').text(one);

var two = moment('2:00pm', 'h:mm a').format('hh:mm a');
$('#two').text(two);

var three = moment('3:00pm', 'h:mm a').format('hh:mm a');
$('#three').text(three);

var four = moment('4:00pm', 'h:mm a').format('hh:mm a');
$('#four').text(four);

var five = moment('5:00pm', 'h:mm a').format('hh:mm a');
$('#five').text(five);


var currentTime = moment().format('LT');
console.log(currentTime);

//for (var i = 0, i <  )