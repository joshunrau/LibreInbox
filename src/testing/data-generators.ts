import { faker } from '@faker-js/faker';
import { range } from 'lodash-es';

import type { Email } from '@/models/email';

class DataGenerator<T extends object> {
  constructor(private factory: (overrides?: Partial<T>) => T) {}

  generateMany(count: number, overrides?: Partial<T>): T[] {
    return range(count).map(() => this.factory(overrides));
  }

  generateOne(overrides?: Partial<T>): T {
    return this.factory(overrides);
  }
}

export const emailGenerator = new DataGenerator<Email>((overrides) => ({
  date: faker.date.past({ years: 1 }),
  email: faker.internet.email(),
  id: faker.string.uuid(),
  labels: faker.helpers.arrayElements(['meeting', 'work', 'important', 'personal', 'budget']),
  name: faker.person.fullName(),
  read: faker.datatype.boolean(),
  subject: faker.lorem.sentence(),
  text: faker.lorem.paragraphs({ max: 3, min: 1 }),
  ...overrides
}));
