var fahrenheit = document.getElementById('fahrenheit');
var celsius = document.getElementById('celsius');
var form = document.getElementById('fahrenheitCelsiusConversion');

form.addEventListener('submit', function(event) {
    if (fahrenheit.value && celsius.value) {
        alert("Please insert only one output");
        event.preventDefault();
    } 
    
    else if (celsius.value) {
        var result = 9 * celsius.value / 5 + 32;
        fahrenheit.value = result;
        event.preventDefault();
    }

    else if (fahrenheit.value) {
        var result = 5 * (fahrenheit.value - 32) / 9;
        celsius.value = result;
        event.preventDefault();
    }

    else {
        alert("Please insert at least one output");
        event.preventDefault();
    }
});

function refresh() {
    fahrenheit.value = "";
    celsius.value = "";
}