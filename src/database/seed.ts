import { dataSource } from './datasource';
import { Home } from '../homes/homes.entity';
import { DataSource } from 'typeorm';

// Sample data for generating random homes
const streets = [
  '123 Oak Street',
  '456 Maple Avenue',
  '789 Pine Lane',
  '321 Elm Drive',
  '654 Cedar Court',
  '987 Birch Boulevard',
  '147 Willow Way',
  '258 Spruce Street',
  '369 Aspen Avenue',
  '741 Hickory Hill',
  '852 Dogwood Drive',
  '963 Magnolia Manor',
  '159 Cherry Circle',
  '357 Poplar Place',
  '486 Sycamore Street',
];

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'Fort Worth',
  'Columbus',
  'Charlotte',
  'San Francisco',
  'Indianapolis',
  'Seattle',
  'Denver',
  'Boston',
];

const zipCodes = [
  '10001',
  '90210',
  '60601',
  '77001',
  '85001',
  '19101',
  '78201',
  '92101',
  '75201',
  '95101',
  '73301',
  '32099',
  '76101',
  '43085',
  '28201',
  '94102',
  '46201',
  '98101',
  '80202',
  '02101',
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomPrice(): number {
  // Generate prices between $50 and $500 per night
  return Math.floor(Math.random() * 450) + 50;
}

async function seedHomes(count: number = 10): Promise<void> {
  const homeRepository = dataSource.getRepository(Home);

  console.log(`Seeding ${count} homes...`);

  const homes: Home[] = [];

  for (let i = 0; i < count; i++) {
    const home = new Home(
      getRandomElement(streets),
      getRandomElement(cities),
      getRandomElement(zipCodes),
      generateRandomPrice(),
    );

    homes.push(home);
  }

  try {
    await homeRepository.save(homes);
    console.log(`Successfully seeded ${count} homes!`);
  } catch (error) {
    console.error('Error seeding homes:', error);
    throw error;
  }
}

export async function runSeed(ds: DataSource): Promise<void> {
  try {
    if (!ds.isInitialized) {
      await ds.initialize();
    }
    console.log('Database connection established');

    // Check if homes already exist
    const homeRepository = ds.getRepository(Home);
    const existingCount = await homeRepository.count();

    if (existingCount > 0) {
      console.log(
        `Database already has ${existingCount} homes. Skipping seed.`,
      );
      return;
    }

    // Seed 15 random homes
    await seedHomes(20);
  } catch (error) {
    console.error('Seeding failed:', error);
  } finally {
    await ds.destroy();
    console.log('Database connection closed');
  }
}

// Run the seed if this file is executed directly
if (require.main === module) {
  runSeed(dataSource).catch(console.error);
}
