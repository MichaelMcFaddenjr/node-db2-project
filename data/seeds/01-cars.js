// DO YOUR MAGIC
const cars = [
  {
    vin: '1111111111111',
    make: 'toyota',
    model: 'prius',
    mileage: 20000,
    title: 'clean',
    transmission: 'manuel',
  },
  {
    vin: '1111111111112',
    make: 'toyota',
    model: 'camry',
    mileage: 20005,
    title: 'salvage',
  },
  {
    vin: '1111111111113',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
    title: 'clean',
    transmission: 'manuel',
  },
]

exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}