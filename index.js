let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return (year - this.startDate.getFullYear());
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let northSouthTravelled = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical));
    let eastWestTravelled = Math.abs(eastWest.findIndex(e => e === this.beginningLocation.horizontal) - eastWest.findIndex(e => e === this.endingLocation.horizontal));
      return northSouthTravelled + eastWestTravelled
  }

  estimatedTime(peakHours = false) {
    if (peakHours) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
