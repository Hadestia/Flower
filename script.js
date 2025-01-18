const div = document.getElementById("bg");
const audio = document.getElementById("music");

div.addEventListener("click", () => {
	try {
		audio.volume = 0.7;
		audio.play();
	} catch (err) {
		console.error(err);
	}
});

window.addEventListener("DOMContentLoaded", event => {
  document.body.classList.remove("container");
});