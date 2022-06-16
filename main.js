window.addEventListener('load',main);

function main(){
	let datumKaoTekst='2019-05-06T01:02:33+02:00';
	let datum= new Date();
	datum.setMonth(9);
	datum.setDate(20);
	datum.setFullYear(1968);
	console.log(datum);
}
