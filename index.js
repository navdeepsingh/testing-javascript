'use strict'

const sum = (a,b) => a - b

result = sum(3, 7)
expected = 10

expect(result).toBe(expected)

// Abstract Test Assertions into Javascript Assertion Library
const expect = (actual) => {
  return {
    toBe = (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}