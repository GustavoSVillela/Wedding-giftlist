const daysElements = document.querySelector("[data-days]")
const hoursElements = document.querySelector("[data-hours]")
const minutesElements = document.querySelector("[data-minutes]")
const secondsElements = document.querySelector("[data-seconds]")

const render =(days, hours, minutes, seconds)=>{
    daysElements.innerHTML = days
    hoursElements.innerHTML = hours
    minutesElements.innerHTML = minutes
    secondsElements.innerHTML = seconds
};

const coutdown=()=>{
const now = new Date()
const nextYear = now.getFullYear()
const targetDate = new Date(nextYear, 6, 26)

const timeleft = targetDate - now

const days = Math.floor(timeleft / (1000 *60 *60 *24))
const hours = Math.floor(
    (timeleft % (1000 *60 *60 *24))/(1000*60 *60)
)

const minutes = Math.floor((timeleft % (1000 *60 *60))/(1000*60))
const seconds = Math.floor((timeleft % (1000 *60))/1000)


render(days,hours,minutes,seconds)
}

setInterval(coutdown,1000)