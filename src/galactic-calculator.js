export class GalacticCalculator {
  constructor(age, dateOfBirth) {
    this.ageInput = age;
    this.dobInput = dateOfBirth;
    this.lifeExpectancy = 78;
  }

  getAgeInSeconds() {
    return this.ageInput * this.getSecondsInYear();
  }

  getSecondsInYear() {
    const secondsInYear = 31536000;
    return secondsInYear;
  }
}
