// Pari e Dispari

// Questo evento si verifica dopo aver caricato l'html
document.addEventListener('DOMContentLoaded', function(){
// Funzione che racchiude la sequenza del gioco
function Gioco() {
// L’utente sceglie pari o dispari 
let UtenteScegliePoD = prompt("Scegli pari o dispari").toLowerCase();
console.log(UtenteScegliePoD);
// e inserisce un numero da 1 a 5.
let UtenteNumero = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(UtenteNumero);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let PcNumero = Math.floor(Math.random() * 5);
    console.log(PcNumero);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
let somma = UtenteNumero + PcNumero;
console.log(somma);

let chiHaVinto = document.getElementById("chivince");

let verifica = Pari(somma) ? "pari" : "dispari";
console.log(verifica);

let risultato;

    if (verifica === UtenteScegliePoD) {
        risultato = "Hai Vinto!!!";
        console.log("Hai Vinto!!!");
        
    } else {
        risultato = "Il Pc ha vinto!";
        console.log("Il Pc ha vinto!");
    }
// Dichiariamo chi ha vinto.
// Quello che viene scritto in pagina
chiHaVinto.innerHTML = `
    <div>L'Utente ha scelto ${UtenteScegliePoD}</div>
    <div>L'Utente ha scelto il numero: ${UtenteNumero}</div>
    <div>Il Pc ha scelto il numero: ${PcNumero}</div>
    <div>La somma dei due numeri è: ${somma}</div>
    <h2>${risultato}</h2>
    `;

}

Gioco();

});
