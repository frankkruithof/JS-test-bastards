import { Validator } from './libs/validator.js'
import * as data from './examples/data.js'

// New validation
const ov = new Validator(data.personObjF, data.personSchema)

console.log(ov.validateObject().isValid ? 'Validation complete' : ov.validateObject().errors)
