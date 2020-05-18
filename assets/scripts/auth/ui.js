'use strict'

const store = require('../store')
// Sign-Up
const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success alert-dismissible fade show')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to Sign-Up! ${error.responseText}`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

// Sign-In
const signInSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed-In successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#username').text(data.user.email)
  store.user = data.user
  $('.sign-out-section').show()
  $('.signed-in-section').show()
  $('.sign-in-section').hide()
  $('.sign-up-section').hide()
  $('.see-your-pets-section').show()
  $('.carousel').hide()
  $('.change-password-section').show()
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to Sign-In! ${error.statusText}`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

// Change Password
const changePasswordSuccess = function (data) {
  $('#message').show()
  $('#message').text('Password changed successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success justify-content-center')
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#stats-button').show()
  $('#create-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#change-password-button').show()
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to change password! ${error.statusText}: Invalid Starting Password`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

// Sign-Out
const signOutSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed-Out successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success justify-content-center')
  $('.sign-in-section').show()
  $('.sign-up-section').show()
  $('.carousel').show()
  $('.signed-in-section').hide()
  $('.sign-out-section').hide()
  $('.change-password-section').hide()
  $('.clear-pets-section').hide()
  $('.content').empty()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').show()
  $('#message').text(`Failure to Sign-Out! ${error.responseText}`)
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger justify-content-center')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
