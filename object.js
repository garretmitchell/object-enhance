
//1//
function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}
//2//
let favoriteNumber = 42;

const instructor = {
    firstName: "Garret",
    [favoriteNumber]: "My favorite!"
}

//3//
const teacher = {
    firstName: "Garret",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}
//4//
function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

