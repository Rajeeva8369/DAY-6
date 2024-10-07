function displayAgentInfo() {
    const agent = {
        age: 57,
        code: '007',
        firstName: 'James',
        lastName: 'Bond'
    };
    
    const message = `My name is ${agent.lastName}, ${agent.firstName} ${agent.lastName}! I'm the agent ${agent.code} and I'm ${agent.age} years old.`;
    
    const p = document.querySelector('#container p');
   
    p.textContent = message;
}

document.addEventListener('DOMContentLoaded' ,function() { 
displayAgentInfo();
});
