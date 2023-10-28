import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  static mageInstanceCount = 0;
  energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.mageInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageInstanceCount;
  }
}

export default Mage;
