'use strict'

const owner = (data, pet) => {
  if (data._id === pet) {
    return true
  } else {
    return false
  }
}
module.exports = owner
