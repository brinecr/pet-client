'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateAccountShow = function () {
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#message').hide()
  $('form').trigger('reset')
}

const onChangePasswordButton = function () {
  $('#change-password').show()
  $('#create-game-button').hide()
  $('#stats-button').hide()
  $('.textbox').hide()
  $('#sign-out-button').show()
  $('#sign-in').hide()
  $('#message').hide()
  $('#continue-game-button').hide()
  $('#change-password-button').hide()
  $('form').trigger('reset')
}

const onSignedInShow = function () {
  $('#stats-button').show()
  $('#change-password').hide()
  $('#create-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#change-password-button').show()
  $('form').trigger('reset')
  $('#message').hide()
}

const onCancelGame = function () {
  $('#sign-out-button').show()
  $('#stats-button').show()
  $('#message').hide()
  $('#change-password').hide()
  $('#cancel-game').hide()
  $('#game').hide()
  $('#create-game-button').show()
  $('#continue-game-button').show()
  $('.textbox').show()
  $('#sign-out-button').show()
  $('#change-password-button').show()
  $('form').trigger('reset')
}

const onSignInShow = function () {
  $('#sign-up').hide()
  $('#sign-in').show()
  $('form').trigger('reset')
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut(event)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onCreateAccountShow,
  onChangePasswordButton,
  onSignedInShow,
  onCancelGame,
  onSignInShow,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
