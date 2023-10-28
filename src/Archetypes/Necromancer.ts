import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  static necromancerInstanceCount = 0;
  energyType : EnergyType;
  constructor(name: string) {
    super(name);

    this.energyType = 'mana';
    Necromancer.necromancerInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.necromancerInstanceCount;
  }
}
export default Necromancer;