// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

//Array di oggetti
const bike = [
    {
        name: "Bike1",
        weight: 40
    },

    {
        name: "Bike2",
        weight: 50
    },

    {
        name: "Bike3",
        weight: 30
    }, 
    
    {
        name: "Bike4",
        weight: 45
    }
]
console.log(bike)

//Calcolo la bici con il peso minone e la stampo
let lighterBike = bike[0]

for (let i = 0; i < bike.length; i++) {
    const curBike = bike [i];
    if (curBike.weight < lighterBike.weight) {
        lighterBike = curBike   
    }  
}
console.log(lighterBike)
