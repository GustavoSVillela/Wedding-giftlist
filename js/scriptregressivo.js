const daysElements = document.querySelector("[data-days]")
const hoursElements = document.querySelector("[data-hours]")
const minutesElements = document.querySelector("[data-minutes]")
const secondsElements = document.querySelector("[data-seconds]")

function FormatNumber(n){
    return n.toString().padStart(2,"0")
}

const render =(days, hours, minutes, seconds)=>{ //function to show countdown 
    daysElements.innerHTML = days
    hoursElements.innerHTML = hours
    minutesElements.innerHTML = minutes
    secondsElements.innerHTML = seconds
};

const targetDate = new Date(2025,6,26,20,0,0)


const messageElement=document.querySelector("#message")

const countdown=()=>{ // arrow function to countdown
const now = new Date() // take atual day
const timeleft = targetDate - now //calc Now - target day

if(timeleft <= 86400000 && !mensagemMostrada){
    messageElement.innerText="⏳ Faltam menos de 24 horas para a festa! Prepare-se!"
} else if (timeleft <= 86400000 && !avisouUltimoDiaMostrado){
    
}


if(timeleft<=0){
    clearInterval(intervalId) //Stop the count 
    render("00","00","00","00")

    messageElement.innerText = "🎉 Hoje é o dia da nossa festa de despedida! 🎉"
    messageElement.style.display = "block"
    return
}

const days = Math.floor(timeleft / (1000 *60 *60 *24)) // calc days
const hours = Math.floor((timeleft % (1000 *60 *60 *24))/(1000*60 *60)) // calc hours
const minutes = Math.floor((timeleft % (1000 *60 *60))/(1000*60)) //calc minutes
const seconds = Math.floor((timeleft % (1000 *60))/1000) //calc seconds

render(
    FormatNumber(days),
    FormatNumber(hours),
    FormatNumber(minutes),
    FormatNumber(seconds)
   )
}

const intervalId = setInterval(countdown,1000)