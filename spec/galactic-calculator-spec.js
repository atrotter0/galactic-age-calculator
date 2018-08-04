import { GalacticCalculator } from './../src/galactic-calculator';

describe('GalacticCalculator', function() {
  let calculator;

  beforeEach(function() {
    calculator = new GalacticCalculator(32, "1/1/1985");
  });

  it('should test that the object is instantiated with the correct properties', function() {
    expect(calculator.ageInput).toEqual(32);
    expect(calculator.dobInput).toEqual("1/1/1985");
    expect(calculator.lifeExpectancy).toEqual(78);
  });

  it('should test that a users age is converted to seconds', function() {
    const expectedSeconds = 32 * 31536000;
    expect(calculator.getAgeInSeconds()).toEqual(expectedSeconds);
  });
});
