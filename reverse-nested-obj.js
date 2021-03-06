function reverseNestedObj(inputValue) {
  if (!isObject(inputValue)) throw new Error('InputValue must be an object')
  if (!Object.keys(inputValue).length) return inputValue
  let outputValue
  outputValue = reverseAndMerge(inputValue, outputValue)
  return outputValue
}

function reverseAndMerge(object, finalObject) {
  //reverse
  const [key, value] = Object.entries(object)[0]
  finalObject = finalObject ? wrapObject(finalObject, key) : key

  //check before continuing to reverse residual value
  if (Array.isArray(value)) throw new Error('Cannot reverse an nested object which contains arrays')
  if (!isObject(value)) return wrapObject(finalObject, value)
  if (!Object.keys(value).length) return finalObject
  //continue to reverse
  return reverseAndMerge(value, finalObject)
}

function wrapObject(variable, key) {
  const newObject = {}
  newObject[key] = isObject(variable) ? { ...variable } : variable
  return newObject
}

function isObject(variable) {
  return Object.prototype.toString.call(variable) === '[object Object]'
}

module.exports = reverseNestedObj

//-------Check------//
// Input:
let inputValue = {
  hired: {
    be: {
      to: {
        deserve: 'I'
      }
    }
  }
};

// Output:
let outputValue = {
  I: {
    deserve: {
      to: {
        be: 'hired'
      }
    }
  }
};

const result = reverseNestedObj(inputValue)
console.log('result', result)
