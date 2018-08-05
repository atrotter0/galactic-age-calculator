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
    const ageAdjustment = 0.24;
    const mercuryAvgLifespan = this.lifeExpectancy * ageAdjustment;
    const yearsOver = this.ageResults.mercury - mercuryAvgLifespan;
    const yearsUnder = mercuryAvgLifespan - this.ageResults.mercury;

    if (this.ageResults.mercury > mercuryAvgLifespan) {
      return this.lifeExpectancyOverMsg("Mercury", this.ageResults.mercury, yearsOver);
    }
    return this.lifeExpectancyUnderMsg("Mercury", this.ageResults.mercury, yearsUnder);
  }

  getVenusLifespan() {

  }

  getMarsLifespan() {

  }

  getJupiterLifespan() {

  }

  lifeExpectancyOverMsg(planet, ageResult, yearsOver) {
    return `User is ${ageResult} years old and has lived ${yearsOver} solar years longer than the average for planet ${planet}.`
  }

  lifeExpectancyUnderMsg(planet, ageResult, yearsUnder) {
    return `User is ${ageResult} years old and has ${yearsUnder} solar years left on ${planet}.`
  }
}
