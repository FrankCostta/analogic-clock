
function setClock() {
	const ptHours = document.querySelector(".pt-hr");
	const ptMinutes = document.querySelector(".pt-min");
	const ptSeconds = document.querySelector(".pt-sec");

	const date = new Date();

	let hour = date.getHours();

	if (hour > 12) hour -= 12
	
	ptHours.style.transform = `rotate(${hour * 30}deg)`;
	ptMinutes.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
	ptSeconds.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
}

setInterval(setClock, 1000)