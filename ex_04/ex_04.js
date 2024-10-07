function updateLicensePlates(agent, plates) {
    if (!agent.car || !Array.isArray(plates)) {
        console.warn('Error: Invalid input. Agent must have a car and plates should be an array.');
        return null;
    }

    agent.car.licensePlates = plates;
    return agent;
}

function showLicensePlates(agent) {
    if (!agent.car || !Array.isArray(agent.car.licensePlates)) {
        console.warn('Error: No license plates found.');
        return;
    }

    const ul = document.querySelector('.plates-container');
    
    ul.innerHTML = '';
    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement('li');
        li.textContent = plate;
        ul.appendChild(li);
    });
}

const agent = {
    firstName: 'James',
    lastName: 'Bond',
    age: 57,
    code: '007',
    car: {
        brand: 'Aston Martin',
        model: 'DB5',
        color: 'silver',
        power: '282 hp'
    }
};


updateLicensePlates(agent, ['LU6789', '4711-EA-62', 'BMT216A']);

showLicensePlates(agent);
