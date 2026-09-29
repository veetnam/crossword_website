let startBtn = document.getElementById('play');
let stopBtn = document.getElementById('stop');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
export var timer;
let running = true;
startBtn.addEventListener('click', function () {
    running = true;
    stopWatch();
    document.getElementById('puzzel').hidden = false;
    document.getElementById('crossButtons').hidden = false;
    document.getElementById('time').hidden = false;
    document.getElementById('hintsTable').hidden = false;
    startBtn.hidden = true;
});
 
stopBtn.addEventListener('click', function () {
    running = false;
    document.getElementById('puzzel').hidden = true;
    document.getElementById('crossButtons').hidden = true;
    document.getElementById('time').hidden = true;
    document.getElementById('hintsTable').hidden = true;
    startBtn.hidden = false;
});


 
 
function stopWatch() {
    if (running) {
        count++;
 
        if (count == 100) {
            second++;
            count = 0;
        }
 
        if (second == 60) {
            minute++;
            second = 0;
        }
 
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
 
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
 
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (minute < 10) {
            minString = "0" + minString;
        }
 
        if (second < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        timer = setTimeout(stopWatch, 10);
    }
}
import data from "./Crossword 4.json" assert {type: 'json'};; 
document.getElementById('submit').addEventListener('click',()=>{
var puzzelTable = document.getElementById("puzzel");
var puzzelData = data;
var done = true;
for ( var i = 0; i < puzzelData.length ; i++ ) {
    var rowData = puzzelData[i];
    for(var j = 0 ; j < rowData.length ; j++){
        if(rowData[j] != 0){
            if(document.getElementById('txt' + '_' + i + '_' + j).value != puzzelData[i][j]){
                done = false;
            }
        }
    }
}
if(done){
    console.log("test")
    document.getElementById('puzzel').hidden = true;
    document.getElementById('crossButtons').hidden = true;
    document.getElementById('hintsTable').hidden = true;
    document.getElementById('time').hidden = true;
    clearTimeout(timer);
    document.getElementById('done').hidden = false;
    document.getElementById('hrF').innerHTML = document.getElementById('hr').innerHTML;
    document.getElementById('minF').innerHTML = document.getElementById('min').innerHTML;
    document.getElementById('secF').innerHTML = document.getElementById('sec').innerHTML;
}
})

