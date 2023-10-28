import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  static rangerInstanceCount = 0;
  energyType : EnergyType;
  constructor(name: string) {
    super(name);

    this.energyType = 'stamina';
    Ranger.rangerInstanceCount += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.rangerInstanceCount;
  }
}
export default Ranger;