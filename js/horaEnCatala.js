////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// horaEnCatala
// jsirera@gmail.com
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "constructor" de l'objecte.
function horaEnCatala(objecteDOM){
	this.objecteDOM = objecteDOM;
	this.objecteDOM = objecteDOM;
	this.nomHores = 		["dotze",	"una",	"dos",	"tres",	"quatre",	"cinc",	"sis",	"set",	"vuit",	"nou",	"deu",	"onze",	"dotze"]; 
	this.articleHores = 	["les",		"la",	"les",	"les",	"les",		"les",	"les",	"les",	"les",	"les",	"les",	"les",	"les"];
	this.preposicioHores =	["de ",		"d'",	"de ",	"de ",	"de ",		"de ",	"de ",	"de ",	"de ",	"de ",	"de ",	"d'",	"de "];
	
	//Actualitza l'hora	
	this.actualitzar = actualitzar;
	function actualitzar(){
		var d = new Date();
		var hora = d.getHours() % 12;
		var minuts = d.getMinutes();
		switch (minuts) {
			case 0: case 1: 
				text = this.articleHores[hora] + " " + this.nomHores[hora] + " en punt";
				break;
			case 2: case 3: case 4: case 5:
				text = this.articleHores[hora] + " " + this.nomHores[hora] + " tocades";
				break;
			case 6: case 7: case 8: case 9:
				text = "mig quart " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 10: case 11: case 12: case 13:
				text = "vora un quart " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 14: case 15: case 16: 
				text = "un quart " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 17: case 18: case 19: case 20:
				text = "un quart tocat " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 21: case 22: case 23: case 24:
				text = "un quart i mig " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 25: case 26: case 27: case 28:
				text = "vora dos quarts " + this.preposicioHores[hora + 1]+ this.nomHores[hora + 1];
				break;
			case 29: case 30: case 31: 
				text = "dos quarts " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 32: case 33: case 34: case 35:
				text = "dos quarts tocats " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 36: case 37: case 38: case 39:
				text = "dos quarts i mig " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 40: case 41: case 42: case 43:
				text = "vora tres quarts " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 44: case 45: case 46: 
				text = "tres quarts " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 47: case 48: case 49: case 50:
				text = "tres quarts tocats " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 51: case 52: case 53: case 54:
				text = "tres quarts i mig " + this.preposicioHores[hora + 1] + this.nomHores[hora + 1];
				break;
			case 55: case 56: case 57: case 58:
				text = "vora " + this.articleHores[hora +1] + " " + this.nomHores[hora + 1];
				break;
			case 59: 
				text = this.articleHores[hora + 1] + " " + this.nomHores[hora + 1] + " en punt";
				break;

		}
		document.getElementById(this.objecteDOM).innerHTML = text;
	}
	
	//Calculem hora el primer cop
	this.actualitzar();

	
}
