const inputMin = prompt("Enter the number of minutes")
    var sec = inputMin * 60

const outputValue = document.getElementById("countdown");

document.getElementById("copyright").innerHTML = "A Rithin Nagaraj Production";

function timer () {
	setInterval(updateTimer, 1000)
	setTimeout(completeTimer, sec*1000)
}

function updateTimer () {
	const minutes = Math.floor(sec/60)
	let seconds = sec % 60

	if(minutes > -1 || seconds > -1) {
	seconds = seconds < 10 ? '0' + seconds : seconds;
	outputValue.innerHTML = `${minutes}:${seconds}`
	sec--;
	}
}

function completeTimer () {
	document.getElementById("complete").innerHTML = "Timer Complete";
}
