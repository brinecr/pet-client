'use strict'

const showPets = require('../templates/pet-listing.handlebars')
const store = require('../store')

// Show All of Your Pets
const showAllPetsSuccess = function (data) {
  $('#message').show()
  $('.see-your-pets-section').hide()
  $('.clear-pets-section').show()
  $('.add-a-pet-section').show()
  $('#message').text('Showed all pets successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success alert-dismissible fade show')
  $('form').trigger('reset')
  // console.log(store.user)
  const showPetsHtml = showPets({ pets: data.pets, user: store.user })
  $('.content').html(showPetsHtml)
}

const showAllPetsFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to show all pets! ${error.responseText}`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

// // Show a Pet By ID
// const showPetSuccess = function (data) {
//   $('#message').show()
//   $('#message').text('Showed pet successfully!')
//   $('#message').removeClass()
//   $('#message').addClass('alert alert-success alert-dismissible fade show')
//   $('form').trigger('reset')
// }
//
// const showPetFailure = function (error) {
//   $('#message').show()
//   $('#message').text(`Failure to show pet! ${error.responseText}`)
//   $('#message').removeClass()
//   $('#message').addClass('alert alert-danger justify-content-center')
//   $('form').trigger('reset')
// }

// Add a Pet
const addPetSuccess = function (data) {
  $('#partialMessage').show()
  $('#partialMessage').text('Added pet successfully!')
  $('#partialMessage').removeClass()
  $('#partialMessage').addClass('alert alert-success alert-dismissible fade show')
  $('form').trigger('reset')
}

const addPetFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to add pet! ${error.responseText}`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

// Update a Pet
const updatePetSuccess = function (data) {
  $('#partialMessage').show()
  $('#partialMessage').text('Updated pet successfully!')
  $('#partialMessage').removeClass()
  $('#partialMessage').addClass('alert alert-success alert-dismissible fade show')
  $('form').trigger('reset')
}

const updatePetFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to update pet! ${error.responseText}`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

// Remove Pet
const removePetSuccess = function (data) {
  $('#partialMessage').show()
  $('#partialMessage').text('Removed pet successfully!')
  $('#partialMessage').removeClass()
  $('#partialMessage').addClass('alert alert-success justify-content-center')
}

const removePetFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to remove pet! ${error.responseText}`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

const clearPets = () => {
  $('#message').show()
  $('#partialMessage').hide()
  $('.add-a-pet-section').hide()
  $('#message').text(`Hide all pets successful!`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-success justify-content-center')
  $('form').trigger('reset')
  $('.see-your-pets-section').show()
  $('.greetings-text').show()
  $('.clear-pets-section').hide()
  $('.content').empty()
}

module.exports = {
  showAllPetsSuccess,
  showAllPetsFailure,
  // showPetSuccess,
  // showPetFailure,
  addPetSuccess,
  addPetFailure,
  updatePetSuccess,
  updatePetFailure,
  removePetSuccess,
  removePetFailure,
  clearPets
}
