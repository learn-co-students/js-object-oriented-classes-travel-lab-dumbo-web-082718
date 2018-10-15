class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    return year - (this.startDate.getYear()+1900);
  }
}


class Route{


  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let deltaHorizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

    let deltaVertical = Number(this.endingLocation.vertical) - Number(this.beginningLocation.vertical);
    return deltaVertical + deltaHorizontal;
  }

  estimatedTime(isPeak = false){
    if (isPeak) {
      return this.blocksTravelled()/2;
    }else{
      return this.blocksTravelled()/3;
    }
  }


}
