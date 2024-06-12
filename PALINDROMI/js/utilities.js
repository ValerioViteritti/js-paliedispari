// Funzione per verificare se la parola è palindroma

function Palindromo(parola) {

    // let Palindromo;

    // Confronta la parola con la sua versione invertita
    return parola === parola.split('').reverse().join('');
    
}