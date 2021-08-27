function animalCount(miles){
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if(miles <= 10){
        const count  = miles * animalDensityFirst10Miles;
        return count;
    }else if (miles <= 20) {
        const firstDensityAnimal = 10 * animalDensityFirst10Miles;
        const restMiles = miles -10;
        const secondDensityAnimal = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDensityAnimal + secondDensityAnimal;
        return totalAnimals;
    }else{
        const firstDensityAnimal = 10 * animalDensityFirst10Miles;
        const secondDensityAnimal = 10 * animalDensitySecond10Miles;
        const restMiles = miles -20;
        const restDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDensityAnimal + secondDensityAnimal + restDenseAnimals;
        return totalAnimals;

    }
}

const animals = animalCount(500);
console.log(animals);