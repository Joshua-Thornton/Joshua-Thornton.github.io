function randomBackground() {
	var bg = ["defaultBG","enableBG1","enableBG2","enableBG3","enableBG4"];
	var number = (Math.floor(Math.random() * bg.length) + 1)-1;

	document.getElementById('bg').classList.add(bg[number]);


}

function changeBackground() {
	location.reload();
}
