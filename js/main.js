var secondHand = document.querySelector('.sec'),
 minHand = document.querySelector('.min'),
 hourHand = document.querySelector('.hour');

function makeTime () {
	var now = new Date(),
	 sec = now.getSeconds(),
	 hour = now.getHours(),
	 min = now.getMinutes(),
	 secondsDeg = Math.round(sec * 6),
	 hourDeg = hour * 30,
	 minDeg = min * 6;
	secondHand.style.transform = `rotate(${secondsDeg + 90}deg)`;
	minHand.style.transform = `rotate(${minDeg + 90}deg)`;
	hourHand.style.transform = `rotate(${(hourDeg + minDeg/12) + 90}deg)`;
	console.log(secondsDeg);
}

setInterval(makeTime, 1000);