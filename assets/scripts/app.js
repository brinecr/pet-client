'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const petEvents = require('./pet/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.sign-up-section').on('submit', authEvents.onSignUp)
  $('.sign-in-section').on('submit', authEvents.onSignIn)
  $('.sign-out-section').on('click', authEvents.onSignOut)
  $('.change-password-section').on('submit', authEvents.onChangePassword)
  $('.guest-account-section').on('click', authEvents.guestSignIn)

  $('.see-your-pets-section').on('click', petEvents.onShowAllPets)
  $('.show-a-pet-section').on('submit', petEvents.onShowPet)
  $('.add-a-pet-section').on('submit', petEvents.onAddPet)
  $('.update-a-pet-section').on('submit', petEvents.onUpdatePet)
  $('.remove-a-pet-section').on('submit', petEvents.onRemovePet)
})
