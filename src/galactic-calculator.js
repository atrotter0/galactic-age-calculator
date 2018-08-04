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

  getDifferenceInSeconds() {
    const dobSplit = this.dobInput.split("/");
    const dobAsDate = new Date(dobSplit[2], dobSplit[0], dobSplit[1]);
    const dateNow = Date.now();
    return Math.round((dateNow - Date.parse(dobAsDate)) / 1000);
  }
}
