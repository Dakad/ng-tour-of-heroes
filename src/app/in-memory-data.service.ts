import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 1009187 | 1011130,
        name: 'Black Panther',
        characteristics: ['skilled fighter', 'Royal Warrior'],
        powers: {
          level: 60,
          damage: 6118,
          speed: 9,
          energy: 9,
          fighting: 36,
          strength: 9
        }
      },
      {
        id: 1009220 | 1010913,
        name: 'Captain America',
        characteristics: ['super-soldier', 'living legend', ''],
        powers: {
          level: 60,
          damage: 3576,
          speed: 9,
          energy: 50,
          fighting: 57,
          strength: 36
        }
      },
      {
        id: 1009351,
        name: 'HULK',
        characteristics: ['violence', 'rage', 'invicible'],
        powers: {
          level: 60,
          damage: 3791,
          speed: 7,
          energy: 5,
          fighting: 35,
          strength: 40
        }
      },
      {
        id: 1009664,
        name: 'Thor',
        characteristics: ['god of Thunder', 'master of mmjolnir'],
        powers: {
          level: 60,
          damage: 3661,
          speed: 9,
          energy: 25,
          fighting: 40,
          strength: 35
        }
      },
      {
        id: 1010740,
        name: 'Silver Surfer',
        characteristics: ['power Cosmic', 'Starfarer'],
        powers: {
          level: 60,
          damage: 3732,
          speed: 46,
          energy: 54,
          fighting: 11,
          strength: 10
        }
      },
      {
        id: 1009718,
        name: 'Wolverine',
        characteristics: ['mutant', 'weapon-X', 'adamantium Will'],
        powers: {
          level: 60,
          damage: 4457,
          speed: 6,
          energy: 4,
          fighting: 69,
          strength: 6
        }
      },
      {
        id: 1009262,
        name: 'Daredevil',
        characteristics: [
          'master of martial arts',
          'super-human',
          'acrobatic prowess',
          'berserker'
        ],
        powers: {
          level: 60,
          damage: 4512,
          speed: 8,
          energy: 3,
          fighting: 42,
          strength: 7
        }
      },
      {
        id: 1009282,
        name: 'Doctor Strange',
        characteristics: ['supreme sorcerer', 'master of Mystic arts'],
        powers: {
          level: 60,
          damage: 4610,
          speed: 6,
          energy: 10,
          fighting: 32,
          strength: 4
        }
      }
    ];
    return { heroes };
  }
}
