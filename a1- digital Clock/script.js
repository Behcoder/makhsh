function updateTime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    let AmPmEl = document.getElementById("AmPm")
    
    let hourEl = document.getElementById("h")
    let minuteEl = document.getElementById("m")
    let secondEl = document.getElementById("s")

    hourEl.innerText = hours    
    minuteEl.innerText = minutes
    secondEl.innerText = seconds
    
    if (hours>11) {
        AmPmEl.innerText = "PM"
        
    }


    setTimeout(() =>{
        updateTime()
    }, 1000);
}

updateTime()