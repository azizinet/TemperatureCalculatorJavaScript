var fahrenheit = document.getElementById('fahrenheit');
var celsius = document.getElementById('celsius');
var form = document.getElementById('fahrenheitCelsiusConversion');
var resultFC = document.getElementById('resultFahrenheitCelsius');

form.addEventListener('submit', function(event) {
    if (fahrenheit.value && celsius.value) {
        alert("Sila letakkan hanya satu nilai Fahrenheit atau Celsius");
        event.preventDefault();
    } 

    else if (celsius.value) {
        var result = 9 * celsius.value / 5 + 32;
        fahrenheit.value = result;
        resultFC.innerHTML = celsius.value + " &#8451; = " + fahrenheit.value + " &#8457;.";
        event.preventDefault();
    }

    else if (fahrenheit.value) {
        var result = 5 * (fahrenheit.value - 32) / 9;
        celsius.value = result;
        resultFC.innerHTML = fahrenheit.value + " &#8457; = " + celsius.value + " &#8451;.";
        event.preventDefault();
    }

    else {
        alert("Sila letakkan nilai Fahrenheit atau Celsius");
        event.preventDefault();
    }
});

function refresh() {
    fahrenheit.value = "";
    celsius.value = "";
    resultFC.innerHTML = "<br>";
}