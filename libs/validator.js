export class Validator {
  constructor (obj, schema) {
    this.object = obj
    this.schema = schema
  }

  validateObject () {
    let validation = {}
    const errors = []
    // Check if object and schema exists
    if (!this.schema || !this.object) {
      errors.push('Missing object or schema')
      validation = {
        isValid: false,
        errors: errors
      }
    } else {
      // Loop through schema and compare against object
      for (const [key, value] of Object.entries(this.schema)) {
        if (this.getType(this.object[key]) !== value) {
          errors.push(`${key} is ${this.getType(this.object[key])}, expected ${value}`)
        }
      }

      if (errors.length > 0) {
        validation = {
          isValid: false,
          errors: errors
        }
      } else {
        validation = { isValid: true }
      }
    }
    return validation
  }

  getType (val) {
    return Array.isArray(val) ? 'array' : typeof val
  }
}
