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

  it('should test that the difference in seconds is found between two dates', function() {
    const stringDate = "1/1/1985";
    const dateSplit = stringDate.split("/");
    const inputToDate = new Date(dateSplit[2], dateSplit[0], dateSplit[1]);
    const dateNow = Date.now();
    const difference = Math.round((dateNow - Date.parse(inputToDate)) / 1000);
    expect(calculator.getDifferenceInSeconds()).toEqual(difference);
  });
});
