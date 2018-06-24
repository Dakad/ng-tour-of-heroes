import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Black Panther' },
      { id: 12, name: 'Captain America' },
      { id: 13, name: 'HULK' },
      { id: 15, name: 'Thor' },
      { id: 16, name: 'Winter Soldier' },
      { id: 17, name: 'Wolverine' },
      { id: 18, name: 'Daredevil' },
      { id: 19, name: 'Doctor Strange' }
    ];
    return { heroes };
  }
}
