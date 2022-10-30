function celciusToFahrenheit(celcius) {

    let fahrenheit = (celcius * 9/5) + 32;

    console.log(`${celcius} \xB0C is ${fahrenheit} \xB0F `);
}

function fahrenheitToCelcius(fahrenheit) {
    
    let celcius = (fahrenheit - 32) * 5/9;

    console.log(`${fahrenheit} \xB0F  is ${celcius} \xB0C`);
}

celciusToFahrenheit(60);
fahrenheitToCelcius(45)