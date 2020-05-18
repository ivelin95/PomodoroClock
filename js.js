const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");
const sesionMin=document.querySelector(".sesionN");
const breakN=document.querySelector(".breakN")
const display = document.querySelector(".display")
const container = document.querySelector(".pomodoro-body-top")

let min = 25;
let sec = 0 
let counter;

// buttons
const pauseBtn=document.querySelector("#pause");
const stopBtn=document.querySelector("#stop");
const startBtn = document.querySelector("#start");
const refershBtn = document.querySelector("#refresh");

function changeSesionTime(e){
   minutes.innerHTML= sesionMin.innerHTML;
   min=sesionMin.value
}

function countTime(){
  //  container.classList.add("newBcrnd")
    startBtn.disabled="true";
    display.style.color="green"
    min = sesionMin.innerHTML
    console.log("session time")
     counter= setInterval(() => {
        if(min === 0 && sec === 0 ){
            
            clearInterval(counter)
            breakSesion()
        }else{
            checkTimes() 
        sec = sec - 1
        seconds.innerHTML=sec
        
         }
     }, 1000);
     
}
function breakSesion(){
    
   
    min = breakN.innerHTML ;
    sec = 0 ;
   
    counter= setInterval(() => {
        display.style.color="blue"
        if(min === 0 && sec === 0 ){
            console.log("update html")
           
            countTime()
            
        }else{
            checkTimes() 
        sec = sec - 1
        seconds.innerHTML=sec
        
         }
     }, 1000);

}
function checkTimes(){
    if(sec === 0){
        min--;
        sec = 60;

        minutes.innerHTML=min;
        seconds.innerHTML=sec
        }
}

function pauseTime(){
    clearTimeout(counter)
    startBtn.removeAttribute('disabled')
    display.style.color="rgb(100, 40, 240)"
}
function stopTime(){
    display.style.color="black"
    startBtn.removeAttribute('disabled')
    clearTimeout(counter);
    //update html
    minutes.innerHTML=sesionMin.innerHTML;
    seconds.innerHTML="00"
    min = parseInt(sesionMin.innerHTML);
    sec = 0
}
function checkForDecimalN(){
    if(min <=1 ){
        min=1
    }
}

function refreshTimes(){
    //set Session time to 25m , break to 5m
    stopTime()
    min = 25;
    sec = 0;
    minutes.innerHTML=min;
    sesionMin.innerHTML=min

    breakN.innerHTML=5;
}

refershBtn.addEventListener("click" , refreshTimes)
startBtn.addEventListener("click" , countTime);
stopBtn.addEventListener("click" , stopTime)
pauseBtn.addEventListener("click" , pauseTime)
sesionMin.addEventListener("click", changeSesionTime)

//increase,decrease session and break time
let plusN=document.querySelector('#plusN').addEventListener("click", function(){
    min= min+1;
    checkForDecimalN()
    sesionMin.innerHTML=min
})
let minusN=document.querySelector('#minusN').addEventListener("click", function(){
    min= min-1;
    checkForDecimalN()
    sesionMin.innerHTML=min
})


let plusB=document.querySelector('#plusB').addEventListener("click", function(){
    min= parseInt(breakN.innerHTML) + 1;
    checkForDecimalN()
    breakN.innerHTML=min
})
let minusB=document.querySelector('#minusB').addEventListener("click", function(){
    min= parseInt(breakN.innerHTML) - 1;
    checkForDecimalN()
    breakN.innerHTML=min
})



