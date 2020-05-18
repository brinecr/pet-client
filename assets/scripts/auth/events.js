'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

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

const guestSignIn = function (event) {
  event.preventDefault()
  const data = {
    credentials: {
      email: 'test@test.com',
      password: 'test'
    }
  }
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = () => {
  $('.sign-up-section').on('submit', onSignUp)
  $('.sign-in-section').on('submit', onSignIn)
  $('.sign-out-section').on('click', onSignOut)
  $('.change-password-section').on('submit', onChangePassword)
  $('.guest-account-section').on('click', guestSignIn)
}

module.exports = {
  addHandlers
}
