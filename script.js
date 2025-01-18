onload = () => {
  document.body.classList.remove("container");
};

window.addEventListener("load", () => {
	const bgm = document.getElementById("bgm");
	
	try {
		bgm.play();
	} catch (err) {
		console.log(err);
	}
});