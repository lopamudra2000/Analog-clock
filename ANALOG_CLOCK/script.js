setInterval(setClock, 100)

function setClock(){
const deg = 6;

const hourHand= document.querySelector('[data-hour-hand]') ;
const minuteHand= document.querySelector('[data-minute-hand]');
const secondHand= document.querySelector('[data-second-hand]');


    const currentDate= new Date();
    const secondsRatio= currentDate.getSeconds() * deg;
    const minutesRatio=currentDate.getMinutes() * deg;
    const hoursRatio=currentDate.getHours() * 30;
     
    
    hourHand.style.transform = `rotateZ(${(hoursRatio)+(minutesRatio/12)}deg)`;
    minuteHand.style.transform =`rotateZ(${minutesRatio}deg)`;
    secondHand.style.transform =`rotateZ(${secondsRatio}deg)`;
}

setClock()