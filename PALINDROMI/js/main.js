// Palidroma


// Creare una funzione per capire se la parola inserita è palindroma

// Questo evento si verifica dopo aver caricato l'html
document.addEventListener("DOMContentLoaded", function() {
    // Chiedere all’utente di inserire una parola
    let parola = prompt("inserisci una parola:");
    // aggancio l'html al risultato che voglio mostrare
    let risultato = document.getElementById("Risultato");
    // i due casi della funzione
    if (Palindromo(parola)) {
        risultato.textContent = `La parola '${parola}' è palindroma`;
        console.log(`La parola '${parola}' è palindroma`);
    } else {
        risultato.textContent = `La parola '${parola}' non è palindroma`;
        console.log(`La parola '${parola}' non è palindroma`);
    }

});