/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

/*
// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
*/

// ESERCIZIO 1 SOLUZIONE
for (let i = 0; i < 5; i++) {
    console.log(i);
}

/*

Un ciclo

Il problema è dato che si inizializza da 0 se c'è il > il ciclo non partirà mai

*/

/*
// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
*/

// ESERCIZIO 2 SOLUZIONE
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}
/*

Controlla se il numero è pari con la formula, se pari torna il numero + 5, se falsa torna il numero senza modifiche

Il problema è l'= 

*/

// ESERCIZIO 3
/*
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
*/

// ESERCIZIO 3 SOLUZIONE
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
/*

Cicla fino al numero 5 attraverso una funzione

Si usano i punti e virgola non le virgole

*/

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
/*
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
*/

// ESERCIZIO 4 SOLUZIONE
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]

/*

Estrae da un array o numeri pari per pusharli all'interno di un secondo array

il -1 va rimosso in quanto dobbiamo prendere la lunghezza dell'array
togliere il ;
numbers è un array
aggiungere i 3 uguali
pushare dentro l'array di numbers
il return va posizionato fuori dal ciclo for, affinchè completi il ciclo e non si fermi

*/