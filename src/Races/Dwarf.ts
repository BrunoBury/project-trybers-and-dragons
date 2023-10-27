import Race from './Race';

class Dwarf extends Race {
  maxLifePoints: number ;
  static dwarfInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.dwarfInstanceCount += 1;
  }

  static createdRacesInstances() {
    return Dwarf.dwarfInstanceCount;
  }
}
export default Dwarf;
