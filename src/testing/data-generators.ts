import { faker } from '@faker-js/faker';

import type { Email } from '@/models/email';

export const emailGenerator = (overrides?: Partial<Email>): Email => ({
  date: faker.date.past({ years: 1 }),
  email: faker.internet.email(),
  id: faker.string.uuid(),
  labels: faker.helpers.arrayElements(['meeting', 'work', 'important', 'personal', 'budget']),
  name: faker.person.fullName(),
  read: faker.datatype.boolean(),
  subject: faker.lorem.sentence(),
  text: faker.lorem.paragraphs({ max: 3, min: 1 }),
  ...overrides
});
