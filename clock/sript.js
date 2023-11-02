function updateclock(){
    var date=new Date()

var day=date.getDay()
var month=date.getMonth()+1;
var datee=date.getDate()
var year=date.getFullYear()
var hour=date.getHours()
var minute=date.getMinutes()
var sec=date.getSeconds()
var period="AM"
switch(day){
    case 0:
        day="Sunday"
        break
    case 1:
        day="Monday"
        break
         case 2:
            day="Tuesday"
            break
            case 3:
                day="Wednesday"
                break
                case 4:
                day="Thursday"
                break
                case 5:
        day="Friday"
        break
        case 6:
        day="Satuerday"
        break

}


switch(month){
    case 1:
        month="January"
        break
    case 2:
        month="February"
        break
        case 3:
            month="March"
            break
            case 4:
        month="April"
        break
        case 5:
        month="May"
        break
        case 6:
        month="June"
        break
        case 7:
        month="July"
        break
        case 8:
        month="August "
        break
        case 9:
        month="September "
        break
        case 10:
        month="October"
        break
        case 11:
        month="November"
        break
        case 12:
        month="December"
        break
    
}

if (hour == 0)
		hour = 12;

if(hour>12){
    period="PM"
}

// add 0 in the beginning of number if less than 10
hour = (hour < 10) ? "0" + hour : hour;
minute = (minute < 10) ? "0" + minute : minute;
sec = (sec < 10) ? '0' + sec : sec;

document.querySelector("#dayname").innerHTML=day;
document.querySelector("#month").innerHTML=month;
document.querySelector("#dates").innerHTML=datee;
document.querySelector("#year").innerHTML=year;
document.querySelector("#hour").innerHTML=hour;
document.querySelector("#minute").innerHTML=minute;
document.querySelector("#seconds").innerHTML=sec;
document.querySelector("#period").innerHTML=period;
}

function intiClock() {
	updateclock();
	window.setInterval("updateclock()", 1);
}

intiClock();
// updateclock()
// console.log(hour)   

// var date=new Date()

// var day=date.getDay()
// var month=date.getMonth()+1;
// var datee=date.getDate()
// var year=date.getFullYear()
// var hour=date.getHours()
// var minute=date.getMinutes()
// var sec=date.getSeconds()

// // if(hour===0){
// //     hour=12
// // }
// // // add 0 in the beginning of number if less than 10
// // hour = (hour < 10) ? "0" + hour : hour;
// // minute = (minute < 10) ? "0" + minute : minute;
// // sec = (sec < 10) ? '0' + sec : sec;

// console.log(hour);
