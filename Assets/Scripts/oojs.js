class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} hangot ad ki.`;
    }

    render() {
        const p = document.createElement("p");
        p.textContent = this.speak();
        document.getElementById("oojs-app").appendChild(p);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        return `${this.name}, a ${this.breed}, ugat: "Vau vau!"`;
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    speak() {
        return `${this.name}, a ${this.color} macska, nyávog: "Miau!"`;
    }
}

// Alkalmazás indítása
const allAnimals = [
    new Dog("Bodri", "vizsla"),
    new Cat("Cirmi", "fehér"),
    new Dog("Morzsi", "terrier"),
    new Cat("Pötyi", "cirmos")
];

allAnimals.forEach(animal => animal.render());
