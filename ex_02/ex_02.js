function addCar(agentString, car) {
    let agent = JSON.parse(agentString);
    agent.car = car;
    return agent; 
}

const agentJSON = '{"age": 57, "code": "007", "firstName": "James", "lastName": "Bond"}';
const carBrand = 'Aston Martin';

const updatedAgent = addCar(agentJSON, carBrand);

console.log(updatedAgent); 

function displayUpdatedAgent(agent) {
    const message = `Agent ${agent.firstName} ${agent.lastName} drives a ${agent.car}.`;
    const p = document.querySelector('#container p');
    
    if (p) {
        p.textContent = message;
    } else {
        console.error('Paragraph element not found');
    }
}
