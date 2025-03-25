# **convert2x**

A **lightweight** and **efficient** Node.js module for performing various unit conversions.

![convert2x](https://img.shields.io/badge/convert2x-v1.0.1-darkred)  
![Node.js](https://img.shields.io/badge/Node.js-14%2B-green)  
![License](https://img.shields.io/badge/license-MIT-blue)

## **✨ Features**

-   Supports multiple unit conversions:
    -   **Temperature** (Celsius, Fahrenheit, Kelvin)
    -   **Distance** (Miles, Kilometers, Meters)
    -   **Weight** (Pounds, Kilograms, Grams)
    -   **Volume** (Liters, Milliliters, Gallons, Cubic Meters)
    -   **Time** (Seconds, Minutes, Hours, Days)
    -   **Area** (Square Meters, Square Kilometers, etc.)
    -   **Speed** (Meters per second, Kilometers per hour, Miles per hour)
-   **Easy-to-use** API
-   **Zero dependencies**

## **📦 Installation**

Install using **npm**:

```sh
npm install convert2x
```

## **🚀 Usage**

Import the package and call the conversion functions:

```js
const converter = require("convert2x");

console.log(converter.temperature.celsiusToFahrenheit(25)); // Output: 77
console.log(converter.distance.milesToKilometers(10)); // Output: 16.09
console.log(converter.weight.poundsToKilograms(150)); // Output: 68.04
console.log(converter.volume.litersToGallons(3.5)); // Output: 0.92
console.log(converter.time.minutesToHours(90)); // Output: 1.5
```

## **📖 API Reference**

### **🌡 Temperature Conversions**

```js
converter.temperature.celsiusToFahrenheit(value); // Celsius → Fahrenheit
converter.temperature.fahrenheitToCelsius(value); // Fahrenheit → Celsius
converter.temperature.celsiusToKelvin(value); // Celsius → Kelvin
converter.temperature.kelvinToCelsius(value); // Kelvin → Celsius
```

### **📏 Distance Conversions**

```js
converter.distance.milesToKilometers(value); // Miles → Kilometers
converter.distance.kilometersToMiles(value); // Kilometers → Miles
converter.distance.metersToKilometers(value); // Meters → Kilometers
converter.distance.kilometersToMeters(value); // Kilometers → Meters
```

### **⚖ Weight Conversions**

```js
converter.weight.poundsToKilograms(value); // Pounds → Kilograms
converter.weight.kilogramsToPounds(value); // Kilograms → Pounds
converter.weight.gramsToKilograms(value); // Grams → Kilograms
converter.weight.kilogramsToGrams(value); // Kilograms → Grams
```

### **🛢 Volume Conversions**

```js
converter.volume.litersToGallons(value); // Liters → Gallons
converter.volume.gallonsToLiters(value); // Gallons → Liters
converter.volume.millilitersToLiters(value); // Milliliters → Liters
converter.volume.litersToMilliliters(value); // Liters → Milliliters
```

### **⏳ Time Conversions**

```js
converter.time.secondsToMinutes(value); // Seconds → Minutes
converter.time.minutesToHours(value); // Minutes → Hours
converter.time.hoursToDays(value); // Hours → Days
```

### **🚗 Speed Conversions**

```js
converter.speed.metersPerSecondToKilometersPerHour(value); // Meters/sec → km/h
converter.speed.kilometersPerHourToMilesPerHour(value); // km/h → mph
converter.speed.milesPerHourToKilometersPerHour(value); // mph → km/h
```

## **🛠 Contributing**

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m "Add new feature"`
4. Push: `git push origin feature-branch`
5. Open a Pull Request.

## **📝 License**

This project is licensed under the **MIT License**.
