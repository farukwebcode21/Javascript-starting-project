function animalCount (miles){
    const firstTenDensityAnimal = 10;
    const secondDensityAnimal = 50;

    if(miles <= 10){
        const count = miles * firstTenDensityAnimal;
        return count;
    }else if (miles <= 20) {
        const first10 = 10 * firstTenDensityAnimal;
        const restMiles = miles -10;
        const secondDensity = restMiles * secondDensityAnimal;
        const total = first10 + secondDensity;
        return total;

    // }else{
    //     const first10 = 10* firstTenDensityAnimal;
    //     const secondDensity = 10* firstTenDensityAnimal;

    }
}

const animal = animalCount(250);
console.log(animal);