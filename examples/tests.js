const schema = {
  name: 'string',
  age: 'number',
  siblings: 'array',
  address: 'object',
  active: 'boolean'
}

const object = {
  name: 'Frank',
  age: 27,
  siblings: ['Kwik', 'Kwek', 'Kwak'],
  address: { street: 'Straat' },
  active: true
}

const objectFalse = {
  name: 'Frank',
  age: '27',
  address: ['Straat 2'],
  siblings: { name: 'Kwik' }
}

export { schema, object, objectFalse }
