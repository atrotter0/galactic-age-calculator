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
    const expectedResult = 7.68;
    expect(calculator.getMercuryAge()).toEqual(expectedResult);
  });

  it('should test that the users age is converted to age in Venus years', function() {
    const expectedResult = 19.84;
    expect(calculator.getVenusAge()).toEqual(expectedResult);
  });

  it('should test that the users age is converted to age in Mars years', function() {
    const expectedResult = 60.16;
    expect(calculator.getMarsAge()).toEqual(expectedResult);
  });

  it('should test that the users age is converted to age in Jupiter years', function() {
    const expectedResult = 379.52;
    expect(calculator.getJupiterAge()).toEqual(expectedResult);
  });

  it('should test that ageResults object has all properties after instantiation', function() {
    const expectedResult = {
      mercury: 7.68,
      venus: 19.84,
      mars: 60.16,
      jupiter: 379.52
    };
    expect(calculator.ageResults).toEqual(expectedResult);
  });

  it('should test that getMercuryLifespan returns the correct msg based on user age', function() {
    const expectedMsg = "User is 7.68 years old and has 11.04 solar years left on Mercury.";
    expect(calculator.lifeExpectancyResults.mercury).toEqual(expectedMsg);
  });
});
