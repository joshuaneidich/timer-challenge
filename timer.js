var startButton=document.getElementById('startButton');
var stopButton=document.getElementById('stopButton');
var resetButton=document.getElementById('resetButton');
var minutesDisplay=document.getElementById('minutesDisplay');
var secondsDisplay=document.getElementById('secondsDisplay');
var  miliSecondsDisplay=document.getElementById('miliSecondsDisplay');
// var currentTime;
window.myTimer;
startButton.addEventListener("click", function(){
  // currentTime=new Date();
   window.myTimer = setInterval(startTimer, 100);


 }

 );
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);


function startTimer () {
currentTime=new Date();

var milliseconds= currentTime.getMilliseconds();
var seconds= currentTime.getSeconds();
var minutes=currentTime.getMinutes();
minutesDisplay.innerHTML=minutes+" minutes";
secondsDisplay.innerHTML=seconds+ " seconds";
miliSecondsDisplay.innerHTML=milliseconds+" milliseconds";


};

function stopTimer () {
  console.log("stop");
  clearInterval(window.myTimer);
  // console.log
  // var stoppedMinutes=minutesDisplay.innerHTML;
  // var stoppedSeconds=secondsDisplay.innerHTML;
  // var stoppedMilliseconds=miliSecondsDisplay.innerHTML;
  //
  // var milliseconds= currentTime.getMilliseconds();
  // var seconds= currentTime.getSeconds();
  // var minutes=currentTime.getMinutes();
  // minutesDisplay.innerHTML=minutes+" minutes";
  // secondsDisplay.innerHTML=seconds+ " seconds";
  // miliSecondsDisplay.innerHTML=milliseconds+" milliseconds";

};

function resetTimer () {
stopTimer();
minutesDisplay.innerHTML="";
secondsDisplay.innerHTML="";
miliSecondsDisplay.innerHTML="";
};



// https://www.feith.com/dataservices/rest/v1/api/developer/object/stopwatch.html

// matt@feith.com
