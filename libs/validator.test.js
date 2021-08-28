import { Validator } from './validator.js'
import * as data from '../examples/tests.js'

test('No object or schema', () => {
  const ov = new Validator()
  expect(ov.validateObject().isValid).toBeFalsy()
})

test('valid object', () => {
  const ov = new Validator(data.object, data.schema)
  expect(ov.validateObject().isValid).toBeTruthy()
})

test('invalid object', () => {
  const ov = new Validator(data.objectFalse, data.schema)
  expect(ov.validateObject().isValid).toBeFalsy()
})
