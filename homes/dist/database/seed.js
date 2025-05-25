"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSeed = runSeed;
const datasource_1 = require("./datasource");
const homes_entity_1 = require("../homes/homes.entity");
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
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function generateRandomPrice() {
    return Math.floor(Math.random() * 450) + 50;
}
async function seedHomes(ds, count = 10) {
    const homeRepository = ds.getRepository(homes_entity_1.Home);
    console.log(`Seeding ${count} homes...`);
    const homes = [];
    for (let i = 0; i < count; i++) {
        const home = new homes_entity_1.Home(getRandomElement(streets), getRandomElement(cities), getRandomElement(zipCodes), generateRandomPrice());
        homes.push(home);
    }
    try {
        console.log('here!');
        await homeRepository.save(homes);
        console.log(`Successfully seeded ${count} homes!`);
    }
    catch (error) {
        console.error('Error seeding homes:', error);
        throw error;
    }
}
async function runSeed(ds) {
    try {
        if (!ds.isInitialized) {
            await ds.initialize();
        }
        console.log('Database connection established');
        const homeRepository = ds.getRepository(homes_entity_1.Home);
        const existingCount = await homeRepository.count();
        if (existingCount > 0) {
            console.log(`Database already has ${existingCount} homes. Skipping seed.`);
            return;
        }
        await seedHomes(ds, 20);
    }
    catch (error) {
        console.error('Seeding failed:', error);
    }
}
if (require.main === module) {
    runSeed(datasource_1.dataSource).catch(console.error);
}
//# sourceMappingURL=seed.js.map