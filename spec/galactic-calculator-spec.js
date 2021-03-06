import { GalacticCalculator } from './../src/galactic-calculator';

describe('GalacticCalculator', function() {
  let calculator;

  beforeEach(function() {
    calculator = new GalacticCalculator(32, "1/1/1985");
  });

  it('should test that the object is instantiated with the correct properties', function() {
    expect(calculator.age).toEqual(32);
    expect(calculator.dob).toEqual("1/1/1985");
    expect(calculator.lifeExpectancy).toEqual(78);
  });

  it('should test that a users age is converted to seconds', function() {
    const expectedSeconds = 32 * 31536000;
    expect(calculator.getAgeInSeconds()).toEqual(expectedSeconds);
  });

  it('should test that the difference in seconds is found between two dates', function() {
    const date = new Date(1985, 1, 1);
    const dateNow = Date.now();
    const difference = Math.round((dateNow - Date.parse(date)) / 1000);
    expect(calculator.getDifferenceInSeconds()).toEqual(difference);
  });

  it('should test that the users age is converted to age in Mercury years', function() {
    const expectedResult = 133.33;
    expect(calculator.getPlanetAge("mercury")).toEqual(expectedResult);
  });

  it('should test that the users age is converted to age in Venus years', function() {
    const expectedResult = 51.61;
    expect(calculator.getPlanetAge("venus")).toEqual(expectedResult);
  });

  it('should test that the users age is converted to age in Mars years', function() {
    const expectedResult = 17.02;
    expect(calculator.getPlanetAge("mars")).toEqual(expectedResult);
  });

  it('should test that the users age is converted to age in Jupiter years', function() {
    const expectedResult = 2.7;
    expect(calculator.getPlanetAge("jupiter")).toEqual(expectedResult);
  });

  it('should test that ageResults object has all properties after instantiation', function() {
    const expectedResult = {
      mercury: 133.33,
      venus: 51.61,
      earth: 32.00,
      mars: 17.02,
      jupiter: 2.7
    };
    expect(calculator.ageResults).toEqual(expectedResult);
  });

  it('should test that getPlanetLifespan returns the correct msg based on user age (32) and planet (mercury)', function() {
    const expectedMsg = "User is 133.33 years old and has 191.67 solar years left on mercury.";
    expect(calculator.lifeExpectancyResults.mercury).toEqual(expectedMsg);
  });

  it('should test that getPlanetLifespan returns the correct msg based on user age (32) and planet (venus)', function() {
    const expectedMsg = "User is 51.61 years old and has 74.20 solar years left on venus.";
    expect(calculator.lifeExpectancyResults.venus).toEqual(expectedMsg);
  });

  it('should test that getPlanetLifespan returns the correct msg based on user age (32) and planet (earth)', function() {
    const expectedMsg = "User is 32 years old and has 46.00 solar years left on earth.";
    expect(calculator.lifeExpectancyResults.earth).toEqual(expectedMsg);
  });

  it('should test that getPlanetLifespan returns the correct msg based on user age (32) and planet (mars)', function() {
    const expectedMsg = "User is 17.02 years old and has 24.47 solar years left on mars.";
    expect(calculator.lifeExpectancyResults.mars).toEqual(expectedMsg);
  });

  it('should test that getPlanetLifespan returns the correct msg based on user age (32) and planet (jupiter)', function() {
    const expectedMsg = "User is 2.7 years old and has 3.88 solar years left on jupiter.";
    expect(calculator.lifeExpectancyResults.jupiter).toEqual(expectedMsg);
  });

  it('should test that getPlanetLifespan returns the correct msg based on old user age (85) and planet (mars)', function() {
    const newCalculator = new GalacticCalculator(85, "1/1/1933");
    const expectedMsg = "User is 45.21 years old and has lived 3.72 solar years longer than the average for planet mars.";
    expect(newCalculator.lifeExpectancyResults.mars).toEqual(expectedMsg);
  });
});
