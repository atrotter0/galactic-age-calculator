export class GalacticCalculator {
  constructor(age, dateOfBirth) {
    this.age = age;
    this.dob = dateOfBirth;
    this.lifeExpectancy = 78;
    this.ageResults = {
      mercury: this.getMercuryAge(),
      venus: this.getVenusAge(),
      mars: this.getMarsAge(),
      jupiter: this.getJupiterAge()
    };
    this.lifeExpectancyResults = {
      mercury: this.getMercuryLifespan(),
      venus: this.getVenusLifespan(),
      mars: this.getMarsLifespan(),
      jupiter: this.getJupiterLifespan()
    };
  }

  getAgeInSeconds() {
    return this.age * this.getSecondsInYear();
  }

  getSecondsInYear() {
    const secondsInYear = 31536000;
    return secondsInYear;
  }

  getDifferenceInSeconds() {
    const dobSplit = this.dob.split("/");
    const dobAsDate = new Date(dobSplit[2], dobSplit[0], dobSplit[1]);
    const dateNow = Date.now();
    return Math.round((dateNow - Date.parse(dobAsDate)) / 1000);
  }

  getMercuryAge() {
    const ageAdjustment = 0.24;
    return this.age * ageAdjustment;
  }

  getVenusAge() {
   const ageAdjustment = 0.62;
   return this.age * ageAdjustment;
  }

  getMarsAge() {
    const ageAdjustment = 1.88;
    return this.age * ageAdjustment;
  }

  getJupiterAge() {
    const ageAdjustment = 11.86;
    return this.age * ageAdjustment;
  }

  getMercuryLifespan() {

  }

  getVenusLifespan() {

  }

  getMarsLifespan() {

  }

  getJupiterLifespan() {

  }
}
