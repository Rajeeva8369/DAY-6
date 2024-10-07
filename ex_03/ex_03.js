
function addCarToAgent(agent, brand, model, color, power) {
  
    if (typeof agent !== 'object' || !brand || !model || !color || !power) {
        console.warn('Error: Missing or incorrectly typed parameters.');
        return null;
    }
    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };


    shareThatBeauty(agent);
    return agent;
}


const agent = {
    firstName: 'James',
    lastName: 'Bond',
    age: 57,
    code: '007'
};

addCarToAgent(agent, 'Aston Martin', 'DB5', 'silver', '282 hp');
