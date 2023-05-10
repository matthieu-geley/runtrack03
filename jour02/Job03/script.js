let bouton = document.getElementById("button");
var Cliques = 0

function addone() {
	Cliques++;
		document.getElementById("compteur").textContent = Cliques
}

bouton.addEventListener("click", addone)