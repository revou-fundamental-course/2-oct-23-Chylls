document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';
    let conversionExplanation = '';

    if (unit === 'celsius') {
        const fahrenheit = (temperature * 9/5) + 32;
        result = `${temperature} Celsius = ${fahrenheit} Fahrenheit`;
        conversionExplanation = `Rumus: Fahrenheit = (Celsius × 9/5) + 32`;
    } else if (unit === 'fahrenheit') {
        const celsius = (temperature - 32) * 5/9;
        result = `${temperature} Fahrenheit = ${celsius} Celsius`;
        conversionExplanation = `Rumus: Celsius = (Fahrenheit - 32) × 5/9`;
    }

    document.getElementById('result').innerHTML = `<p>${result}</p><p>${conversionExplanation}</p>`;
});
