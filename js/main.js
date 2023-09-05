/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Malik Houbbi
 * @version 0.1
 * @since   2023-09-05
 */

'use strict'; // Demande un interprétation stricte du code

let degreCelcius = prompt('Temperature en celcius :');
let degreFahrenheit;

degreCelcius = parseInt(degreCelcius);

// Test si la variable degreCelcius est NaN
if (isNaN(degreCelcius)) {
    alert(`Erreur, saisissez un nombre`);
}else {
    degreFahrenheit = degreCelcius * 9 / 5 + 32;
    alert(`${degreCelcius}°C = ${degreFahrenheit}°F`);
}
