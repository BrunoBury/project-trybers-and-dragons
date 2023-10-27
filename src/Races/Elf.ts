import Race from './Race';

class Elf extends Race {
  maxLifePoints: number ;
  static elfInstanceCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.elfInstanceCount += 1;
  }

  static createdRacesInstances() {
    return Elf.elfInstanceCount;
  }
}
export default Elf;
