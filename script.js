var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds')

function move(){
  var date = new Date();
  var hour = date.getHours() % 12;
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var hoursDeg = (hour * 30) + (0.5 * minute);
  var minutDeg =  (minute * 6) + (0.1 * second);
  var secondDeg = second * 6;

  hours.style.transform = 'rotate('+ hoursDeg + 'deg)';
  minutes.style.transform = 'rotate('+ minutDeg + 'deg)';
  seconds.style.transform = 'rotate('+ secondDeg + 'deg)';

  setTimeout(move, 1000); 
}

move();

function initDate() {
     var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");
     var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
     var now = new Date();
     var dtString = dayName[now.getDay()];
     var mnstring =  monName[now.getMonth()]+"  "+ now.getDate();
     document.getElementById("daymonth"). innerHTML = dtString;
     document.getElementById("year").innerHTML = mnstring; 
}

initDate();

function fun(){
  var date = new Date();

   var last_period_date = parseInt(document.getElementById("periodate").value);
   var period_cycle = parseInt(document.getElementById("periodates").value);

   var currentDate = parseInt(date.getDate());

   if(last_period_date < currentDate){
    var dayLeft = (period_cycle - currentDate) + last_period_date
    document.getElementById("result").innerHTML = "Aapki periods aane me " + dayLeft + " din baaki hai.!!"
   }
   else if(currentDate == period_cycle){
    document.getElementById("result").innerHTML = "Aapki periods aane me " + last_period_date + " din baaki hai.!!"
   }
   else if(last_period_date > currentDate){
    var dayleft = last_period_date - currentDate
    document.getElementById("result").innerHTML = "Aapki periods aane me " + dayleft + " din baaki hai.!!"

   }
    else if(last_period_date == currentDate){
   document.getElementById("result").innerHTML = "Congratulations ...!!! Aapki periods aa chuki hai."
    snowStorm.snowColor = '#756d6b';   // blue-ish snow!?
    snowStorm.flakesMaxActive = 96;    // show more snow on screen at once
    snowStorm.useTwinkleEffect = true;
   }

   else{
      window.alert('fill your last period day and its periode cycle');
   }
 }
 function Del(){
   document.getElementById('periodate').value=" ";
    document.getElementById('periodates').value=" ";


 }


