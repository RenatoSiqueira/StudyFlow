let countDown;
let timeInterval;
const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('#clock');
const daysSpan = clock.querySelector('.days');
const hoursSpan = clock.querySelector('.hours');
const minutesSpan = clock.querySelector('.minutes');
const secondsSpan = clock.querySelector('.seconds');
const savedTime = localStorage.getItem('countdown') || false;
if(savedTime){
    startClock(savedTime);
    let dated = new Date(savedTime);
    endDate.valueAsDate = dated;
}
endDate.addEventListener('change',function(e){
    e.preventDefault();
    clearInterval(timeInterval);
    //console.dir(this);
    const endDateTemp = new Date(this.value);
    localStorage.setItem('countdown',endDateTemp);
    startClock(endDateTemp);
})
function startClock(endTime){
    function updateCounter(){
        let t = timeRemaining(endTime);  
        console.log(t);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0'+t.hours).slice(-2);
        minutesSpan.innerHTML = ('0'+t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0'+t.seconds).slice(-2);
        if(t.total <= 0){
            clearInterval(timeInterval);   
        }
    }
    updateCounter();
    timeInterval = setInterval(updateCounter,1000);
}
function timeRemaining(endTime){
    let t = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((t/1000)%60);
    let minutes = Math.floor((t/1000/60)%60);
    let hours = Math.floor((t/(1000*60*60))%24);
    let days = Math.floor(t/(1000*60*60*24));
    return {
        'total':t,
        'days':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };
}
//console.log(endDate);