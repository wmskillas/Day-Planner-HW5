var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

$(document).ready(function() {
$(".saveBtn").on("click", function () {

    var written = $(this).siblings(".description").val();
    var currentTime = $(this).parent().attr("id");
    console.log(written);
    console.log(currentTime);

    localStorage.setItem(currentTime, written);
})
//I was trying to see if i could have multiple ways to save the written text. But having 2 of the functions seemed to mess with some other stuff and not actually save
/*$(document).ready(function() {
    $(".saveBtn").on("submit", function () {
    
        var written = $(this).siblings(".description").val();
        var currentTime = $(this).parent().attr("id");
        console.log(written);
        console.log(currentTime);
    
        localStorage.setItem(currentTime, written);
    })*/

function timeKeeper(){
    var currentTime = moment().hour();
    console.log(currentTime);

    $('.time-block').each(function (){
        var timeBlock = parseInt($(this).attr('id').split('hour')[1]);
        console.log(timeBlock);

        if(timeBlock === currentTime){
            $(this).removeClass('past');
            $(this).removeClass('future')
            $(this).addClass('present')
        }
        else if (timeBlock < currentTime) {
            $(this).removeClass('present');
            $(this).removeClass('future')
            $(this).addClass('past')
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
}

$('#nine .description').val(localStorage.getItem('nine'));
$('#ten .description').val(localStorage.getItem('ten'));
$('#eleven .description').val(localStorage.getItem('eleven'));
$('#twelve .description').val(localStorage.getItem('twelve'));
$('#one .description').val(localStorage.getItem('one'));
$('#two .description').val(localStorage.getItem('two'));
$('#three .description').val(localStorage.getItem('three'));
$('#four .description').val(localStorage.getItem('four'));
$('#five .description').val(localStorage.getItem('five'));

timeKeeper();
})
//I was trying to use moment.js to show the times but i couldn't figure out how to put these in the functions
/*var nine = moment('9:00am', 'h:mm a').format('hh:mm a');
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
$('#five').text(five); */
