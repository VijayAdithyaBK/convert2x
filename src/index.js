/**
 * Simple Unit Conversion Module
 * -----------------------------
 * A Node.js module for performing various unit conversions.
 *
 * Features:
 * - Temperature conversions:
 * - Celsius to Fahrenheit, Kelvin
 * - Fahrenheit to Celsius, Kelvin
 * - Kelvin to Celsius, Fahrenheit
 * - Distance conversions:
 * - Miles to kilometers, meters
 * - Kilometers to miles, meters
 * - Meters to miles, kilometers
 * - Weight conversions:
 * - Pounds to kilograms, grams
 * - Kilograms to pounds, grams
 * - Grams to pounds, kilograms
 * - Volume Conversions:
 * - Liters to Milliliters, Gallons, Cubic Meters
 * - Milliliters to Liters, Gallons, Cubic Meters
 * - Gallons to Liters, Milliliters, Cubic Meters
 * - Cubic Meters to Liters, Milliliters, Gallons
 * - Time Conversions:
 * - Seconds to Minutes, Hours, Days
 * - Minutes to Seconds, Hours, Days
 * - Hours to Seconds, Minutes, Days
 * - Days to Seconds, Minutes, Hours
 * - Area Conversions
 * - Square Meters to Square Kilometers, Square Centimeters, Square Millimeters
 * - Square Kilometers to Square Meters, Square Centimeters, Square Millimeters
 * - Square Centimeters to Square Meters, Square Kilometers, Square Millimeters
 * - Square Millimeters to Square Meters, Square Kilometers, Square Centimeters
 * - Speed Conversions
 * - Meters per second to Kilometers per hour, Miles per hour
 * - Kilometers per hour to Meters per second, Miles per hour
 * - Miles per hour to Meters per second, Kilometers per hour
 *
 *
 * API:
 * - Each conversion type (temperature, distance, weight, etc.) has its own sub-object.
 * - Each conversion function takes a value and an optional decimalPlaces parameter.
 * - If decimalPlaces is provided, the result is rounded to that many decimal places.
 * - If decimalPlaces is not provided, the result is not rounded.
 * - Function names are descriptive (e.g., celsiusToFahrenheit, milesToKilometers).
 *
 * Example Usage:
 * const unitConverter = require('simple-unit-converter');
 *
 * // Temperature
 * const fahrenheit = unitConverter.temperature.celsiusToFahrenheit(25, 2);
 * console.log(fahrenheit); // Output: 77.00
 *
 * // Distance
 * const kilometers = unitConverter.distance.milesToKilometers(10, 3);
 * console.log(kilometers); // Output: 16.093
 *
 * // Weight
 * const kilograms = unitConverter.weight.poundsToKilograms(150, 1);
 * console.log(kilograms); // Output: 68.0
 *
 * // Volume
 * const liters = unitConverter.volume.millilitersToLiters(500, 2);
 * console.log(liters); // Output: 0.50
 *
 * // Time
 * const hours = unitConverter.time.minutesToHours(120, 1);
 * console.log(hours); // Output: 2.0
 *
 * // Area
 * const squareKilometers = unitConverter.area.squareMetersToSquareKilometers(1000000, 2);
 * console.log(squareKilometers); //output 1.00
 *
 * // Speed
 * const kilometersPerHour = unitConverter.speed.metersPerSecondToKilometersPerHour(10, 2);
 * console.log(kilometersPerHour); // Output: 36.00
 */

const unitConverter = {
    temperature: {
        celsiusToFahrenheit: (celsius, decimalPlaces) => {
            const result = (celsius * 9) / 5 + 32;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        celsiusToKelvin: (celsius, decimalPlaces) => {
            const result = celsius + 273.15;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        fahrenheitToCelsius: (fahrenheit, decimalPlaces) => {
            const result = ((fahrenheit - 32) * 5) / 9;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        fahrenheitToKelvin: (fahrenheit, decimalPlaces) => {
            const result = ((fahrenheit - 32) * 5) / 9 + 273.15;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kelvinToCelsius: (kelvin, decimalPlaces) => {
            const result = kelvin - 273.15;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kelvinToFahrenheit: (kelvin, decimalPlaces) => {
            const result = ((kelvin - 273.15) * 9) / 5 + 32;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
    },
    distance: {
        milesToKilometers: (miles, decimalPlaces) => {
            const result = miles * 1.60934;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        milesToMeters: (miles, decimalPlaces) => {
            const result = miles * 1609.34;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kilometersToMiles: (kilometers, decimalPlaces) => {
            const result = kilometers / 1.60934;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kilometersToMeters: (kilometers, decimalPlaces) => {
            const result = kilometers * 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        metersToMiles: (meters, decimalPlaces) => {
            const result = meters / 1609.34;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        metersToKilometers: (meters, decimalPlaces) => {
            const result = meters / 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
    },
    weight: {
        poundsToKilograms: (pounds, decimalPlaces) => {
            const result = pounds * 0.453592;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        poundsToGrams: (pounds, decimalPlaces) => {
            const result = pounds * 453.592;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kilogramsToPounds: (kilograms, decimalPlaces) => {
            const result = kilograms / 0.453592;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kilogramsToGrams: (kilograms, decimalPlaces) => {
            const result = kilograms * 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        gramsToPounds: (grams, decimalPlaces) => {
            const result = grams / 453.592;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        gramsToKilograms: (grams, decimalPlaces) => {
            const result = grams / 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
    },
    volume: {
        litersToMilliliters: (liters, decimalPlaces) => {
            const result = liters * 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        litersToGallons: (liters, decimalPlaces) => {
            const result = liters * 0.264172;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        litersToCubicMeters: (liters, decimalPlaces) => {
            const result = liters / 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        millilitersToLiters: (milliliters, decimalPlaces) => {
            const result = milliliters / 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        millilitersToGallons: (milliliters, decimalPlaces) => {
            const result = milliliters * 0.000264172;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        millilitersToCubicMeters: (milliliters, decimalPlaces) => {
            const result = milliliters / 1e6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        gallonsToLiters: (gallons, decimalPlaces) => {
            const result = gallons / 0.264172;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        gallonsToMilliliters: (gallons, decimalPlaces) => {
            const result = gallons * 3785.411784;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        gallonsToCubicMeters: (gallons, decimalPlaces) => {
            const result = gallons * 0.00378541;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        cubicMetersToLiters: (cubicMeters, decimalPlaces) => {
            const result = cubicMeters * 1000;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        cubicMetersToMilliliters: (cubicMeters, decimalPlaces) => {
            const result = cubicMeters * 1e6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        cubicMetersToGallons: (cubicMeters, decimalPlaces) => {
            const result = cubicMeters / 0.00378541;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
    },
    time: {
        secondsToMinutes: (seconds, decimalPlaces) => {
            const result = seconds / 60;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        secondsToHours: (seconds, decimalPlaces) => {
            const result = seconds / 3600;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        secondsToDays: (seconds, decimalPlaces) => {
            const result = seconds / 86400;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        minutesToSeconds: (minutes, decimalPlaces) => {
            const result = minutes * 60;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        minutesToHours: (minutes, decimalPlaces) => {
            const result = minutes / 60;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        minutesToDays: (minutes, decimalPlaces) => {
            const result = minutes / 1440;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        hoursToSeconds: (hours, decimalPlaces) => {
            const result = hours * 3600;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        hoursToMinutes: (hours, decimalPlaces) => {
            const result = hours * 60;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        hoursToDays: (hours, decimalPlaces) => {
            const result = hours / 24;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        daysToSeconds: (days, decimalPlaces) => {
            const result = days * 86400;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        daysToMinutes: (days, decimalPlaces) => {
            const result = days * 1440;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        daysToHours: (days, decimalPlaces) => {
            const result = days * 24;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
    },
    area: {
        squareMetersToSquareKilometers: (squareMeters, decimalPlaces) => {
            const result = squareMeters / 1e6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareMetersToSquareCentimeters: (squareMeters, decimalPlaces) => {
            const result = squareMeters * 1e4;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareMetersToSquareMillimeters: (squareMeters, decimalPlaces) => {
            const result = squareMeters * 1e6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareKilometersToSquareMeters: (squareKilometers, decimalPlaces) => {
            const result = squareKilometers * 1e6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareKilometersToSquareCentimeters: (
            squareKilometers,
            decimalPlaces
        ) => {
            const result = squareKilometers * 1e10;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareKilometersToSquareMillimeters: (
            squareKilometers,
            decimalPlaces
        ) => {
            const result = squareKilometers * 1e12;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareCentimetersToSquareMeters: (squareCentimeters, decimalPlaces) => {
            const result = squareCentimeters / 1e4;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareCentimetersToSquareKilometers: (
            squareCentimeters,
            decimalPlaces
        ) => {
            const result = squareCentimeters / 1e10;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareCentimetersToSquareMillimeters: (
            squareCentimeters,
            decimalPlaces
        ) => {
            const result = squareCentimeters * 1e2;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareMillimetersToSquareMeters: (squareMillimeters, decimalPlaces) => {
            const result = squareMillimeters / 1e6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareMillimetersToSquareKilometers: (
            squareMillimeters,
            decimalPlaces
        ) => {
            const result = squareMillimeters / 1e12;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        squareMillimetersToSquareCentimeters: (
            squareMillimeters,
            decimalPlaces
        ) => {
            const result = squareMillimeters / 1e2;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
    },
    speed: {
        metersPerSecondToKilometersPerHour: (
            metersPerSecond,
            decimalPlaces
        ) => {
            const result = metersPerSecond * 3.6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        metersPerSecondToMilesPerHour: (metersPerSecond, decimalPlaces) => {
            const result = metersPerSecond * 2.23694;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kilometersPerHourToMetersPerSecond: (
            kilometersPerHour,
            decimalPlaces
        ) => {
            const result = kilometersPerHour / 3.6;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        kilometersPerHourToMilesPerHour: (kilometersPerHour, decimalPlaces) => {
            const result = kilometersPerHour / 1.60934;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        milesPerHourToMetersPerSecond: (milesPerHour, decimalPlaces) => {
            const result = milesPerHour / 2.23694;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
        milesPerHourToKilometersPerHour: (milesPerHour, decimalPlaces) => {
            const result = milesPerHour * 1.60934;
            return typeof decimalPlaces === "number"
                ? parseFloat(result.toFixed(decimalPlaces))
                : result;
        },
    },
};

// Export the module
module.exports = unitConverter;
