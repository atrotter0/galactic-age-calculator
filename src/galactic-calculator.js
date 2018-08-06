export class GalacticCalculator {
  constructor(age, dateOfBirth) {
    this.age = age;
    this.dob = dateOfBirth;
    this.lifeExpectancy = 78;
    this.planetAgeAdjusters = {
      mercury: 0.24,
      venus: 0.62,
      earth: 1.00,
      mars: 1.88,
      jupiter: 11.86
    };
    this.ageResults = {
      mercury: this.getPlanetAge("mercury"),
      venus: this.getPlanetAge("venus"),
      earth: this.getPlanetAge("earth"),
      mars: this.getPlanetAge("mars"),
      jupiter: this.getPlanetAge("jupiter")
    };
    this.lifeExpectancyResults = {
      mercury: this.getPlanetLifespan("mercury"),
      venus: this.getPlanetLifespan("venus"),
      earth: this.getPlanetLifespan("earth"),
      mars: this.getPlanetLifespan("mars"),
      jupiter: this.getPlanetLifespan("jupiter")
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

  getPlanetAge(planet) {
    return parseFloat((this.age / this.planetAgeAdjusters[planet]).toFixed(2));
  }

  getPlanetLifespan(planet) {
    const planetLifespan = parseFloat((this.lifeExpectancy / this.planetAgeAdjusters[planet]).toFixed(2));
    const yearsOver = this.ageResults[planet] - planetLifespan;
    const yearsUnder = planetLifespan - this.ageResults[planet];

    return this.planetLifespanMsg(planet, planetLifespan, yearsOver.toFixed(2), yearsUnder.toFixed(2));
  }

  planetLifespanMsg(planet, planetLifespan, yearsOver, yearsUnder) {
    if (this.ageResults[planet] > planetLifespan) {
      return this.lifeExpectancyOverMsg(planet, this.ageResults[planet], yearsOver);
    }
    return this.lifeExpectancyUnderMsg(planet, this.ageResults[planet], yearsUnder);
  }

  lifeExpectancyOverMsg(planet, ageResult, yearsOver) {
    return `User is ${ageResult} years old and has lived ${yearsOver} solar years longer than the average for planet ${planet}.`
  }

  lifeExpectancyUnderMsg(planet, ageResult, yearsUnder) {
    return `User is ${ageResult} years old and has ${yearsUnder} solar years left on ${planet}.`
  }
}
