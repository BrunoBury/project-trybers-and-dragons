import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  static warriorInstanceCount = 0;
  energyType : EnergyType;
  constructor(name: string) {
    super(name);

    this.energyType = 'stamina';
    Warrior.warriorInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.warriorInstanceCount;
  }
}
export default Warrior;