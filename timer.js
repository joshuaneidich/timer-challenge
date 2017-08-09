var startButton=document.getElementById('startButton');
var stopButton=document.getElementById('stopButton');
var resetButton=document.getElementById('resetButton');
var minutesDisplay=document.getElementById('minutesDisplay');
var secondsDisplay=document.getElementById('secondsDisplay');
var  milliSecondsDisplay=document.getElementById('milliSecondsDisplay');
var pausedTime;
var addSeconds=0;
var addMinutes=0;
window.myTimer;
startButton.addEventListener("click", function(){
  pausedTime=new Date();
   window.myTimer = setInterval(startTimer, 100);


 }

 );
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);


function startTimer () {
stopButton.className="";
var currentTime=new Date();
var timeDifference=currentTime-pausedTime;
var seconds=Math.floor((timeDifference/1000)+addSeconds);
var minutes=Math.floor((timeDifference/1000/60)+addMinutes);
secondsDisplay.innerHTML=seconds+ " seconds";
minutesDisplay.innerHTML=minutes+" minutes";
};

function stopTimer () {
  if (stopButton.className===""){
    clearInterval(window.myTimer);
    var currentTime=new Date();
    var timeDifference=currentTime-pausedTime;
    var seconds=Math.floor(timeDifference/1000);
    var minutes=Math.floor(timeDifference/1000/60);
    addSeconds+=seconds;
    addMinutes+=minutes;
    stopButton.className="stopped";
}
};

function resetTimer () {
stopTimer();
stopButton.className="";
addSeconds=0;
addMinutes=0;
minutesDisplay.innerHTML="0 minutes";
secondsDisplay.innerHTML="0 seconds";
milliSecondsDisplay.innerHTML="";
};
