function bissextile(année) {
	let resultat;
	if ((année % 4 === 0) | (année % 100 === 0)) {
		resultat = true;
	} else  {
		resultat = false;
	}
	return resultat;
}

console.log(bissextile(1800));