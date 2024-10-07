const car = {
    brand: 'Aston Martin',
    model: 'DB5',
    color: 'grey',
    logInfo() {
        console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
    }
};

const agent = {
    name: 'James Bond',
    code: '007',
    age: 57,
    car: car,
    logInfo() {
        console.log(`Agent information: ${this.name}, ${this.code}, ${this.age}`);
        console.log(`${this.name}'s Car information:`);
        this.car.logInfo();
    }
};

agent.logInfo();
