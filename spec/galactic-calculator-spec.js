import { GalacticCalculator } from './../src/galactic-calculator';

describe('GalacticCalculator', function() {
  it('should test that the object is instantiated with the correct properties', function() {
    const birthday = "1/1/1984";
    const calculator = new GalacticCalculator(birthday);
    expect(calculator.dateOfBirth).toEqual(birthday);
    expect(calculator.lifeExpectancy).toEqual(78);
  });
});
