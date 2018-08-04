import { GalacticCalculator } from './../src/galactic-calculator';

describe('GalacticCalculator', function() {
  it('should test that the object is instantiated with the correct properties', function() {
    const birthday = "1/1/1984";
    const age = 33;
    const calculator = new GalacticCalculator(33, birthday);
    expect(calculator.ageInput).toEqual(33);
    expect(calculator.dobInput).toEqual(birthday);
    expect(calculator.lifeExpectancy).toEqual(78);
  });
});
