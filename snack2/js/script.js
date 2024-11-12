// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


//Array squadre di calcio 
const team = [
    {
        name: "Palermo",
        points: 0,
        fouls: 0
    },

    {
        name: "Napoli",
        points: 0, 
        fouls: 0
    },

    {
        name: "Roma",
        points: 0, 
        fouls: 0
    },

    {
        name: "Milan",
        points: 0, 
        fouls: 0
    }
]

//Funzione per generare numeri random per i punti fatti e i falli subiti
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//Asseggno i valori
for (let i = 0; i < team.length; i++) {
    team[i].points = randomNum(0, 40);
    team[i].fouls = randomNum(0, 9);
}
console.log(team);

//Creo nuovo array con solo nomi e falli subiti
const newArray = [];
for (let i = 0; i < team.length; i++) {
    newArray.push({
        name: team[i].name, 
        fouls: team[i].fouls
    });
}
console.log(newArray);