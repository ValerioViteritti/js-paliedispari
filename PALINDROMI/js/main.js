// Palidroma
// Chiedere all’utente di inserire una parola
let parola = prompt("inserisci una parola:")

console.log(parola);



function Palindromo(parola) {

    // let Palindromo;

    // Confronta la parola con la sua versione invertita
    return parola === parola.split('').reverse().join('');
    
}

// Creare una funzione per capire se la parola inserita è palindroma
function Verifica() {
    
let parola
let Risultato;

if (Palindromo(parola)) {
    document.getElementById(Risultato).textContent = `La parola '${parola}' è palindroma`
    console.log(`La parola '${parola}' è palindroma`);
} else {
    document.getElementById(Risultato).textContent = `La parola '${parola}' non è palindroma`
    console.log(`La parola '${parola}' non è palindroma`);
}

}
