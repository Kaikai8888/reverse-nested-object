const reverseNestedObj = require('./reverse-nested-obj.js')

test('Reverse nested objects with single key in every layer', () => {
  expect(
    reverseNestedObj({
      hired: {
        be: {
          to: {
            deserve: 'I'
          }
        }
      }
    })
  ).toEqual({
    I: {
      deserve: {
        to: {
          be: 'hired'
        }
      }
    }
  })
})

test('Empty object at the innermost layer will be ignore', () => {
  expect(
    reverseNestedObj({
      hired: {
        be: {
          to: {
            deserve: { I: {} }
          }
        }
      }
    })
  ).toEqual({
    I: {
      deserve: {
        to: {
          be: 'hired'
        }
      }
    }
  })
})

test('Return empty object when inputValue is an empty object', () => {
  expect(
    reverseNestedObj({})
  ).toEqual({})
})

test('Throw error when the innermost layer is an array', () => {
  expect(() => {
    reverseNestedObj({
      hired: {
        be: {
          to: {
            deserve: ['I', 'He', 'She']
          }
        }
      }
    })
  }).toThrow('Cannot reverse an nested object which contains array')
})

test('Throw error when inputValue is an array', () => {
  expect(() => {
    reverseNestedObj([1, 2, 3, 4])
  }).toThrow('InputValue must be an object')
})


