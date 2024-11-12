// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS

//Funzione in cui dichiaro un nuovo array che conterrà i numeri compresi 
//tra un minimo ed un massimo specificati
function myFunction(array, min, max) {
    newArray = [];

    for (let i = 0; i < array.length; i++) {
        const curArray = array [i];
        if(curArray >= a && curArray <= b){
            newArray.push(curArray);
        }
    }
    return newArray;
}

//Array con diversi numeri
const array0 = [13, 22, 3, 78, 9,];

//Intervallo di valori 
const a = 1;
const b = 20;

//La funzione restituisce un nuovo array con i numeri di array0 che sono compresi tra 1 e 20 
console.log(myFunction(array0, a, b));