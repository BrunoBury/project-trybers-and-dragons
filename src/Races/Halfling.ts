import Race from './Race';

class Halfling extends Race {
  maxLifePoints: number ;
  static halflingInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.halflingInstanceCount += 1;
  }

  static createdRacesInstances() {
    return Halfling.halflingInstanceCount;
  }
}
export default Halfling;
