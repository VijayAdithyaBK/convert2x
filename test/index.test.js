const unitConverter = require("../src/index"); // Adjust the path if needed

describe("unitConverter", () => {
  describe("temperature", () => {
    it("should convert Celsius to Fahrenheit", () => {
      expect(unitConverter.temperature.celsiusToFahrenheit(0)).toBe(32);
      expect(unitConverter.temperature.celsiusToFahrenheit(100)).toBe(212);
      expect(unitConverter.temperature.celsiusToFahrenheit(25, 2)).toBe(77.00);
      expect(unitConverter.temperature.celsiusToFahrenheit(-40)).toBe(-40);
    });

    it("should convert Celsius to Kelvin", () => {
      expect(unitConverter.temperature.celsiusToKelvin(0)).toBe(273.15);
      expect(unitConverter.temperature.celsiusToKelvin(100)).toBe(373.15);
      expect(unitConverter.temperature.celsiusToKelvin(25, 2)).toBe(298.15);
      expect(unitConverter.temperature.celsiusToKelvin(-273.15)).toBe(0);
    });

    it("should convert Fahrenheit to Celsius", () => {
      expect(unitConverter.temperature.fahrenheitToCelsius(32)).toBe(0);
      expect(unitConverter.temperature.fahrenheitToCelsius(212)).toBe(100);
      expect(unitConverter.temperature.fahrenheitToCelsius(77, 2)).toBe(25.00);
      expect(unitConverter.temperature.fahrenheitToCelsius(-40)).toBe(-40);
    });

    it("should convert Fahrenheit to Kelvin", () => {
      expect(unitConverter.temperature.fahrenheitToKelvin(32)).toBeCloseTo(273.15, 2);
      expect(unitConverter.temperature.fahrenheitToKelvin(212)).toBeCloseTo(373.15, 2);
      expect(unitConverter.temperature.fahrenheitToKelvin(77, 2)).toBeCloseTo(298.15, 2);
      expect(unitConverter.temperature.fahrenheitToKelvin(-459.67)).toBe(0);
    });

    it("should convert Kelvin to Celsius", () => {
      expect(unitConverter.temperature.kelvinToCelsius(273.15)).toBe(0);
      expect(unitConverter.temperature.kelvinToCelsius(373.15)).toBe(100);
      expect(unitConverter.temperature.kelvinToCelsius(298.15, 2)).toBe(25.00);
      expect(unitConverter.temperature.kelvinToCelsius(0)).toBe(-273.15);
    });

    it("should convert Kelvin to Fahrenheit", () => {
      expect(unitConverter.temperature.kelvinToFahrenheit(273.15)).toBeCloseTo(32, 2);
      expect(unitConverter.temperature.kelvinToFahrenheit(373.15)).toBeCloseTo(212, 2);
      expect(unitConverter.temperature.kelvinToFahrenheit(298.15, 2)).toBeCloseTo(77, 2);
      expect(unitConverter.temperature.kelvinToFahrenheit(0)).toBeCloseTo(-459.67, 2);
    });
  });

  describe("distance", () => {
    it("should convert miles to kilometers", () => {
      expect(unitConverter.distance.milesToKilometers(1)).toBeCloseTo(1.60934);
      expect(unitConverter.distance.milesToKilometers(10)).toBeCloseTo(16.0934);
      expect(unitConverter.distance.milesToKilometers(5, 3)).toBeCloseTo(8.047, 3);
    });

    it("should convert miles to meters", () => {
      expect(unitConverter.distance.milesToMeters(1)).toBeCloseTo(1609.34);
      expect(unitConverter.distance.milesToMeters(10)).toBeCloseTo(16093.4);
      expect(unitConverter.distance.milesToMeters(5, 3)).toBeCloseTo(8046.700, 3);
    });

    it("should convert kilometers to miles", () => {
      expect(unitConverter.distance.kilometersToMiles(1)).toBeCloseTo(0.621371);
      expect(unitConverter.distance.kilometersToMiles(10)).toBeCloseTo(6.21371);
      expect(unitConverter.distance.kilometersToMiles(5, 3)).toBeCloseTo(3.107, 3);
    });

    it("should convert kilometers to meters", () => {
      expect(unitConverter.distance.kilometersToMeters(1)).toBe(1000);
      expect(unitConverter.distance.kilometersToMeters(10)).toBe(10000);
      expect(unitConverter.distance.kilometersToMeters(5, 3)).toBe(5000.000);
    });

    it("should convert meters to miles", () => {
      expect(unitConverter.distance.metersToMiles(1)).toBeCloseTo(0.000621371);
      expect(unitConverter.distance.metersToMiles(1000)).toBeCloseTo(0.621371);
      expect(unitConverter.distance.metersToMiles(500, 3)).toBeCloseTo(0.311, 3);
    });

    it("should convert meters to kilometers", () => {
      expect(unitConverter.distance.metersToKilometers(1)).toBe(0.001);
      expect(unitConverter.distance.metersToKilometers(1000)).toBe(1);
      expect(unitConverter.distance.metersToKilometers(500, 3)).toBe(0.500);
    });
  });

  describe("weight", () => {
    it("should convert pounds to kilograms", () => {
      expect(unitConverter.weight.poundsToKilograms(1)).toBeCloseTo(0.453592);
      expect(unitConverter.weight.poundsToKilograms(10)).toBeCloseTo(4.53592);
      expect(unitConverter.weight.poundsToKilograms(2.20462, 2)).toBeCloseTo(1.00, 2);
    });

    it("should convert pounds to grams", () => {
      expect(unitConverter.weight.poundsToGrams(1)).toBeCloseTo(453.592);
      expect(unitConverter.weight.poundsToGrams(10)).toBeCloseTo(4535.92);
      expect(unitConverter.weight.poundsToGrams(2.20462, 2)).toBeCloseTo(1000.00, 2);
    });

    it("should convert kilograms to pounds", () => {
      expect(unitConverter.weight.kilogramsToPounds(1)).toBeCloseTo(2.20462);
      expect(unitConverter.weight.kilogramsToPounds(10)).toBeCloseTo(22.0462);
      expect(unitConverter.weight.kilogramsToPounds(5, 1)).toBeCloseTo(11.0, 1);
    });

    it("should convert kilograms to grams", () => {
      expect(unitConverter.weight.kilogramsToGrams(1)).toBe(1000);
      expect(unitConverter.weight.kilogramsToGrams(10)).toBe(10000);
      expect(unitConverter.weight.kilogramsToGrams(2.5, 2)).toBe(2500.00);
    });

    it("should convert grams to pounds", () => {
      expect(unitConverter.weight.gramsToPounds(1)).toBeCloseTo(0.00220462);
      expect(unitConverter.weight.gramsToPounds(1000)).toBeCloseTo(2.20462);
      expect(unitConverter.weight.gramsToPounds(500, 3)).toBeCloseTo(1.102, 3);
    });

    it("should convert grams to kilograms", () => {
      expect(unitConverter.weight.gramsToKilograms(1)).toBe(0.001);
      expect(unitConverter.weight.gramsToKilograms(1000)).toBe(1);
      expect(unitConverter.weight.gramsToKilograms(500, 3)).toBe(0.500);
    });
  });

  describe("volume", () => {
    it("should convert liters to milliliters", () => {
      expect(unitConverter.volume.litersToMilliliters(1)).toBe(1000);
      expect(unitConverter.volume.litersToMilliliters(5)).toBe(5000);
      expect(unitConverter.volume.litersToMilliliters(2.5, 2)).toBe(2500.00);
    });

    it("should convert liters to gallons", () => {
      expect(unitConverter.volume.litersToGallons(1)).toBeCloseTo(0.264172);
      expect(unitConverter.volume.litersToGallons(5)).toBeCloseTo(1.32086);
      expect(unitConverter.volume.litersToGallons(10, 2)).toBeCloseTo(2.64, 2);
    });

    it("should convert liters to cubic meters", () => {
      expect(unitConverter.volume.litersToCubicMeters(1)).toBe(0.001);
      expect(unitConverter.volume.litersToCubicMeters(1000)).toBe(1);
      expect(unitConverter.volume.litersToCubicMeters(500, 3)).toBe(0.500);
    });

    it("should convert milliliters to liters", () => {
      expect(unitConverter.volume.millilitersToLiters(1000)).toBe(1);
      expect(unitConverter.volume.millilitersToLiters(500)).toBe(0.5);
      expect(unitConverter.volume.millilitersToLiters(2500, 2)).toBe(2.50);
    });

    it("should convert milliliters to gallons", () => {
      expect(unitConverter.volume.millilitersToGallons(1000)).toBeCloseTo(0.264172);
      expect(unitConverter.volume.millilitersToGallons(500)).toBeCloseTo(0.132086);
      expect(unitConverter.volume.millilitersToGallons(100, 4)).toBeCloseTo(0.0264, 4);
    });

    it("should convert milliliters to cubic meters", () => {
      expect(unitConverter.volume.millilitersToCubicMeters(1e6)).toBe(1);
      expect(unitConverter.volume.millilitersToCubicMeters(5e5)).toBe(0.5);
      expect(unitConverter.volume.millilitersToCubicMeters(2e6, 3)).toBe(2.000);
    });

    it("should convert gallons to liters", () => {
      expect(unitConverter.volume.gallonsToLiters(1)).toBeCloseTo(3.78541);
      expect(unitConverter.volume.gallonsToLiters(5)).toBeCloseTo(18.9271);
      expect(unitConverter.volume.gallonsToLiters(2, 2)).toBeCloseTo(7.57, 2);
    });

    it("should convert gallons to milliliters", () => {
      expect(unitConverter.volume.gallonsToMilliliters(1)).toBeCloseTo(3785.41);
      expect(unitConverter.volume.gallonsToMilliliters(15)).toBeCloseTo(56781.17676);
      expect(unitConverter.volume.gallonsToMilliliters(2, 2)).toBeCloseTo(7570.82, 2);
    });

    it("should convert gallons to cubic meters", () => {
      expect(unitConverter.volume.gallonsToCubicMeters(1)).toBeCloseTo(0.00378541);
      expect(unitConverter.volume.gallonsToCubicMeters(10)).toBeCloseTo(0.0378541);
      expect(unitConverter.volume.gallonsToCubicMeters(5, 3)).toBeCloseTo(0.01893, 3);
    });

    it("should convert cubic meters to liters", () => {
      expect(unitConverter.volume.cubicMetersToLiters(1)).toBe(1000);
      expect(unitConverter.volume.cubicMetersToLiters(0.5)).toBe(500);
      expect(unitConverter.volume.cubicMetersToLiters(2, 2)).toBe(2000.00);
    });

    it("should convert cubic meters to milliliters", () => {
      expect(unitConverter.volume.cubicMetersToMilliliters(1)).toBe(1e6);
      expect(unitConverter.volume.cubicMetersToMilliliters(0.5)).toBe(5e5);
      expect(unitConverter.volume.cubicMetersToMilliliters(2, 3)).toBe(2e6);
    });

    it("should convert cubic meters to gallons", () => {
      expect(unitConverter.volume.cubicMetersToGallons(1)).toBeCloseTo(264.172);
      expect(unitConverter.volume.cubicMetersToGallons(0.1)).toBeCloseTo(26.4172);
      expect(unitConverter.volume.cubicMetersToGallons(2, 2)).toBeCloseTo(528.34, 2);
    });
  });

  describe("time", () => {
    it("should convert seconds to minutes", () => {
      expect(unitConverter.time.secondsToMinutes(60)).toBe(1);
      expect(unitConverter.time.secondsToMinutes(120)).toBe(2);
      expect(unitConverter.time.secondsToMinutes(90, 1)).toBe(1.5);
    });

    it("should convert seconds to hours", () => {
      expect(unitConverter.time.secondsToHours(3600)).toBe(1);
      expect(unitConverter.time.secondsToHours(7200)).toBe(2);
      expect(unitConverter.time.secondsToHours(1800, 1)).toBe(0.5);
    });

    it("should convert seconds to days", () => {
      expect(unitConverter.time.secondsToDays(86400)).toBe(1);
      expect(unitConverter.time.secondsToDays(172800)).toBe(2);
      expect(unitConverter.time.secondsToDays(43200, 1)).toBe(0.5);
    });

    it("should convert minutes to seconds", () => {
      expect(unitConverter.time.minutesToSeconds(1)).toBe(60);
      expect(unitConverter.time.minutesToSeconds(2)).toBe(120);
      expect(unitConverter.time.minutesToSeconds(1.5, 0)).toBe(90);
    });

    it("should convert minutes to hours", () => {
      expect(unitConverter.time.minutesToHours(60)).toBe(1);
      expect(unitConverter.time.minutesToHours(120)).toBe(2);
      expect(unitConverter.time.minutesToHours(30, 1)).toBe(0.5);
    });

    it("should convert minutes to days", () => {
      expect(unitConverter.time.minutesToDays(1440)).toBe(1);
      expect(unitConverter.time.minutesToDays(2880)).toBe(2);
      expect(unitConverter.time.minutesToDays(720, 1)).toBe(0.5);
    });

    it("should convert hours to seconds", () => {
      expect(unitConverter.time.hoursToSeconds(1)).toBe(3600);
      expect(unitConverter.time.hoursToSeconds(2)).toBe(7200);
      expect(unitConverter.time.hoursToSeconds(0.5, 0)).toBe(1800);
    });

    it("should convert hours to minutes", () => {
      expect(unitConverter.time.hoursToMinutes(1)).toBe(60);
      expect(unitConverter.time.hoursToMinutes(2)).toBe(120);
      expect(unitConverter.time.hoursToMinutes(0.5, 1)).toBe(30.0);
    });

    it("should convert hours to days", () => {
      expect(unitConverter.time.hoursToDays(24)).toBe(1);
      expect(unitConverter.time.hoursToDays(48)).toBe(2);
      expect(unitConverter.time.hoursToDays(12, 1)).toBe(0.5);
    });

    it("should convert days to seconds", () => {
      expect(unitConverter.time.daysToSeconds(1)).toBe(86400);
      expect(unitConverter.time.daysToSeconds(2)).toBe(172800);
      expect(unitConverter.time.daysToSeconds(0.5, 0)).toBe(43200);
    });

    it("should convert days to minutes", () => {
      expect(unitConverter.time.daysToMinutes(1)).toBe(1440);
      expect(unitConverter.time.daysToMinutes(2)).toBe(2880);
      expect(unitConverter.time.daysToMinutes(0.5, 1)).toBe(720.0);
    });

    it("should convert days to hours", () => {
      expect(unitConverter.time.daysToHours(1)).toBe(24);
      expect(unitConverter.time.daysToHours(2)).toBe(48);
      expect(unitConverter.time.daysToHours(0.5, 1)).toBe(12.0);
    });
  });

  describe("area", () => {
    it("should convert square meters to square kilometers", () => {
      expect(unitConverter.area.squareMetersToSquareKilometers(1e6)).toBe(1);
      expect(unitConverter.area.squareMetersToSquareKilometers(2e6)).toBe(2);
      expect(unitConverter.area.squareMetersToSquareKilometers(5e5, 2)).toBe(0.50);
    });

    it("should convert square meters to square centimeters", () => {
      expect(unitConverter.area.squareMetersToSquareCentimeters(1)).toBe(1e4);
      expect(unitConverter.area.squareMetersToSquareCentimeters(2)).toBe(2e4);
      expect(unitConverter.area.squareMetersToSquareCentimeters(0.5, 1)).toBe(5000.0);
    });

    it("should convert square meters to square millimeters", () => {
      expect(unitConverter.area.squareMetersToSquareMillimeters(1)).toBe(1e6);
      expect(unitConverter.area.squareMetersToSquareMillimeters(2)).toBe(2e6);
      expect(unitConverter.area.squareMetersToSquareMillimeters(0.5, 0)).toBe(500000);
    });

    it("should convert square kilometers to square meters", () => {
      expect(unitConverter.area.squareKilometersToSquareMeters(1)).toBe(1e6);
      expect(unitConverter.area.squareKilometersToSquareMeters(2)).toBe(2e6);
      expect(unitConverter.area.squareKilometersToSquareMeters(0.5, 0)).toBe(500000);
    });

    it("should convert square kilometers to square centimeters", () => {
      expect(unitConverter.area.squareKilometersToSquareCentimeters(1)).toBe(1e10);
      expect(unitConverter.area.squareKilometersToSquareCentimeters(2)).toBe(2e10);
      expect(unitConverter.area.squareKilometersToSquareCentimeters(0.5, 0)).toBe(5e9);
    });

    it("should convert square kilometers to square millimeters", () => {
      expect(unitConverter.area.squareKilometersToSquareMillimeters(1)).toBe(1e12);
      expect(unitConverter.area.squareKilometersToSquareMillimeters(2)).toBe(2e12);
      expect(unitConverter.area.squareKilometersToSquareMillimeters(0.5, 0)).toBe(5e11);
    });

    it("should convert square centimeters to square meters", () => {
      expect(unitConverter.area.squareCentimetersToSquareMeters(1e4)).toBe(1);
      expect(unitConverter.area.squareCentimetersToSquareMeters(2e4)).toBe(2);
      expect(unitConverter.area.squareCentimetersToSquareMeters(5e3, 1)).toBe(0.5);
    });

    it("should convert square centimeters to square kilometers", () => {
      expect(unitConverter.area.squareCentimetersToSquareKilometers(1e10)).toBe(1);
      expect(unitConverter.area.squareCentimetersToSquareKilometers(2e10)).toBe(2);
      expect(unitConverter.area.squareCentimetersToSquareKilometers(5e9, 1)).toBe(0.5);
    });

    it("should convert square centimeters to square millimeters", () => {
      expect(unitConverter.area.squareCentimetersToSquareMillimeters(1)).toBe(1e2);
      expect(unitConverter.area.squareCentimetersToSquareMillimeters(2)).toBe(2e2);
      expect(unitConverter.area.squareCentimetersToSquareMillimeters(0.5, 0)).toBe(50);
    });

    it("should convert square millimeters to square meters", () => {
      expect(unitConverter.area.squareMillimetersToSquareMeters(1e6)).toBe(1);
      expect(unitConverter.area.squareMillimetersToSquareMeters(2e6)).toBe(2);
      expect(unitConverter.area.squareMillimetersToSquareMeters(5e5, 1)).toBe(0.5);
    });

    it("should convert square millimeters to square kilometers", () => {
      expect(unitConverter.area.squareMillimetersToSquareKilometers(1e12)).toBe(1);
      expect(unitConverter.area.squareMillimetersToSquareKilometers(2e12)).toBe(2);
      expect(unitConverter.area.squareMillimetersToSquareKilometers(5e11, 1)).toBe(0.5);
    });

    it("should convert square millimeters to square centimeters", () => {
      expect(unitConverter.area.squareMillimetersToSquareCentimeters(1e2)).toBe(1);
      expect(unitConverter.area.squareMillimetersToSquareCentimeters(2e2)).toBe(2);
      expect(unitConverter.area.squareMillimetersToSquareCentimeters(50, 0)).toBe(1);
    });
  });

  describe("speed", () => {
    it("should convert meters per second to kilometers per hour", () => {
      expect(unitConverter.speed.metersPerSecondToKilometersPerHour(1)).toBeCloseTo(3.6);
      expect(unitConverter.speed.metersPerSecondToKilometersPerHour(10)).toBeCloseTo(36);
      expect(unitConverter.speed.metersPerSecondToKilometersPerHour(5, 2)).toBeCloseTo(18.00, 2);
    });

    it("should convert meters per second to miles per hour", () => {
      expect(unitConverter.speed.metersPerSecondToMilesPerHour(1)).toBeCloseTo(2.23694);
      expect(unitConverter.speed.metersPerSecondToMilesPerHour(10)).toBeCloseTo(22.3694);
      expect(unitConverter.speed.metersPerSecondToMilesPerHour(5, 3)).toBeCloseTo(11.185, 3);
    });

    it("should convert kilometers per hour to meters per second", () => {
      expect(unitConverter.speed.kilometersPerHourToMetersPerSecond(3.6)).toBeCloseTo(1);
      expect(unitConverter.speed.kilometersPerHourToMetersPerSecond(36)).toBeCloseTo(10);
      expect(unitConverter.speed.kilometersPerHourToMetersPerSecond(18, 1)).toBeCloseTo(5.0, 1);
    });

    it("should convert kilometers per hour to miles per hour", () => {
      expect(unitConverter.speed.kilometersPerHourToMilesPerHour(1.60934)).toBeCloseTo(1);
      expect(unitConverter.speed.kilometersPerHourToMilesPerHour(16.0934)).toBeCloseTo(10);
      expect(unitConverter.speed.kilometersPerHourToMilesPerHour(8.0467, 2)).toBeCloseTo(5.00, 2);
    });

    it("should convert miles per hourto meters per second", () => {
      expect(unitConverter.speed.milesPerHourToMetersPerSecond(2.23694)).toBeCloseTo(1);
      expect(unitConverter.speed.milesPerHourToMetersPerSecond(22.3694)).toBeCloseTo(10);
      expect(unitConverter.speed.milesPerHourToMetersPerSecond(11.1847, 3)).toBeCloseTo(5.000, 3);
    });

    it("should convert miles per hour to kilometers per hour", () => {
      expect(unitConverter.speed.milesPerHourToKilometersPerHour(1)).toBeCloseTo(1.60934);
      expect(unitConverter.speed.milesPerHourToKilometersPerHour(10)).toBeCloseTo(16.0934);
      expect(unitConverter.speed.milesPerHourToKilometersPerHour(5, 1)).toBeCloseTo(8, 1);
    });
  });
});
