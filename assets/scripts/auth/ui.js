'use strict'

const store = require('../store')
// Sign-Up
const signUpSuccess = function (data) {
  $('#message').show()
  $('#message').text('Signed up successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#sign-up').hide()
  $('#sign-in').show()
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
  $('#username').text(data.user.email)
  $('#lucky-number').text(Math.floor(Math.random() * 100))
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#games-played').text(0)
  $('#stats-button').show()
  store.user = data.user
  $('#create-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#sign-in').hide()
  $('#change-password-button').show()
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
  $('#stats-button').hide()
  $('#message').show()
  $('#message').text('Signed-Out successfully!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-success justify-content-center')
  $('#sign-in').show()
  $('#cancel-game').hide()
  $('#create-game-button').hide()
  $('#sign-out-button').hide()
  $('.textbox').hide()
  $('#game').hide()
  $('#change-password').hide()
  $('#change-password-button').hide()
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
