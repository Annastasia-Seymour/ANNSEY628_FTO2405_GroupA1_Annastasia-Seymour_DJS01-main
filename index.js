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
const distanceInKm = 0; // distance (km)
const fuelRemaining = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = distance + (velocityKmPerHour*timeInSeconds) //calculates new distance
const newFuelRemaining = fuelBurnRate*timeInSeconds //calculates remaining fuel
//const newVelocity = calcNewVel(acceleration, velocity, timeInSeconds) ; //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
/*calcNewVel = (acc, vel, time) => { 
  return vel + (acc*time);
}*/

//console.log(`Corrected New Velocity: ${vel2} km/h`);//48880km/h
console.log("No banana");
console.log(`Corrected New Distance: ${velocityKmPerHour} km`);//10000Km
console.log(`Corrected Remaining Fuel: ${newFuelRemaining} kg`);//3200kg






