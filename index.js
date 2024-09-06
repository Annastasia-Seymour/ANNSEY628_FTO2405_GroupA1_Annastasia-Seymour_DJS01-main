/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmPerHour = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distanceInKm = 0 ; // distance (km)
const fuelRemaining = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const regex = /^\d+(\.\d+)$/;

const newDistanceInKm = distanceInKm + velocityKmPerHour ; //calculates new distance
const newFuelRemaining = fuelRemaining - fuelBurnRate * timeInSeconds;//calculates remaining fuel
const newVelocity = calcNewVel(acceleration, velocityKmPerHour, timeInSeconds); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
//robust like try/catch possible errors? but this shouldn't get any errors if it doesn't have user intervention

function calcNewVel (acceleration, velocityKmPerHour, timeInSeconds){
  return velocityKmPerHour + (acceleration*timeInSeconds) *3600/1000;
}

function isNumber (inputSearch){
  return regex.test(String(inputSearch)) && inputSearch >= 0;
}

if (isNumber(newDistanceInKm) || isNumber(newFuelRemaining) || isNumber(newVelocity)) {
    console.log("Invalid input , cannot be string or negative");
} else {
  console.log("Correct input, All inputs are numbers");
}


console.log(`Corrected New Velocity: ${newVelocity} km/h`);//48880km/h
console.log(`Corrected New Distance: ${newDistanceInKm} km`);//10000Km
console.log(`Corrected Remaining Fuel: ${newFuelRemaining} kg`);//3200kg


calcNewVel();
isNumber();


