function displayTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('timedisplay').textContent = currentTime;

};
displayTime();
setInterval(displayTime, 1000)

const alarmButton = document.getElementById('setalarm');

 alarmButton.addEventListener('click', function(){
    const enterTime = document.getElementById('entertime').value;
    const [hours, minutes, seconds] = enterTime.split(':').map(Number);
    
    const alarmTime = new Date();
    alarmTime.setHours(hours);
    alarmTime.setMinutes(minutes);
    alarmTime.setSeconds(seconds);

  
    window.alarmTime = alarmTime;

   
});
function checkAlarm() {
    // Get the current time
    const currentTime = new Date();

    
    const alarmTime = window.alarmTime;

    // Check if the current time matches the alarm time
    if (alarmTime && currentTime.getHours() === alarmTime.getHours() &&
        currentTime.getMinutes() === alarmTime.getMinutes() &&
        currentTime.getSeconds() === alarmTime.getSeconds()) {
        // Call the function to trigger the alarm action
        triggerAlarm();
    }
}



function triggerAlarm(){
    alert('alarm');
}
setInterval(checkAlarm, 1000);