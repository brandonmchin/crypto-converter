const clientSocket = io.connect('http://localhost:5000');

// DOM
const userValue = document.getElementById('user-value');
const unitFrom = document.getElementById('unit-from');
const outputValue = document.getElementById('output-value');
const unitTo = document.getElementById('unit-to');
const convertButton = document.getElementById('convert-button');

// Events
convertButton.addEventListener('click', () => {
    data = {
        userValue: userValue.value,
        unitFrom: unitFrom.value.toUpperCase(),
        unitTo: unitTo.value.toUpperCase()
    };
    if (data.unitFrom !== "" && data.unitTo !== "") {
        clientSocket.emit('request', data);
    }
    else {
        alert('ERROR: Please provide units.');
    }
});

// Server has responded with the conversion
clientSocket.on('response', (data) => {
    outputValue.value = data;
});