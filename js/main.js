const circle = document.querySelector(".circle");
const text = document.querySelector("#text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

animationControl();
function animationControl() {
	text.innerText = "Breath In";
	circle.classList.add("breathIn");
	setTimeout(() => {
		text.innerText = "Hold";
		setTimeout(() => {
			text.innerText = "Breath Out";
			circle.className = "circle";
		}, holdTime);
	}, breathTime);
}
setInterval(animationControl, totalTime);
