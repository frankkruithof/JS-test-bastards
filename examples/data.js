export const personSchema = {
  name: 'string',
  age: 'number',
  siblings: 'array',
  metaData: 'object',
  active: 'boolean'
}

// Validates true
export const personObj = {
  name: 'James',
  age: 25,
  siblings: ['Johnnathan'],
  metaData: {},
  active: true
}

// Validates false
export const personObjF = {
  name: 'James',
  age: 25,
  active: true
}

export const carSchema = {
  brand: 'string',
  type: 'string',
  milage: 'number',
  extras: 'array'
}

// Validates true
export const carObj = {
  brand: 'Mazda',
  type: 'MX5 NB 1.8',
  milage: 199999.99,
  extras: [
    '2001 Special Edition'
  ]
}

// Validates false
export const carObjF = {
  brand: 'BMW',
  type: '335',
  milage: '100000', // < No number
  extras: [
    'LCI',
    'KW Coilovers'
  ]
}

export const barSchema = {
  name: 'string',
  address: 'string',
  drinks: 'object'
}

// Validates true
export const barObj = {
  name: 'Jimmys drinks',
  address: 'Somewhere over the rainbow',
  drinks: {
    beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard']
  }
}

// Validates false
export const barObjF = {
  name: 'Sjonnies',
  address: 2,
  drinks: [ // < No object
    'Heineken'
  ]
}
