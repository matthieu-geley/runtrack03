let bouton = document.getElementById("button");

function showhide() {
	var text = document.getElementById("citation");
	if (text.style.display !== "none") {
		text.style.display = "none";
	} else {
		text.style.display = "block"
	}
};

bouton.addEventListener("click", showhide)