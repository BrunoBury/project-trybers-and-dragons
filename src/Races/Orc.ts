import Race from './Race';

class Orc extends Race {
  maxLifePoints: number ;
  static orcInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.orcInstanceCount += 1;
  }

  static createdRacesInstances() {
    return Orc.orcInstanceCount;
  }
}
export default Orc;
