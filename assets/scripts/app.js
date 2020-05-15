'use strict'

const authEvents = require('./auth/events')
const tictactoeEvents = require('./tictactoe/events')

$(() => {
  // auth events
  $('#create-account-show').on('click', authEvents.onCreateAccountShow)
  $('#change-password-button').on('click', authEvents.onChangePasswordButton)
  $('#signed-in-show').on('click', authEvents.onSignedInShow)

  $('#cancel-game').on('click', authEvents.onCancelGame)
  $('#sign-in-show').on('click', authEvents.onSignInShow)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game events
  $('#a1').on('click', tictactoeEvents.onGameClicka1).hover(tictactoeEvents.onHoverIna1, tictactoeEvents.onHoverOuta1)
  $('#a2').on('click', tictactoeEvents.onGameClicka2).hover(tictactoeEvents.onHoverIna2, tictactoeEvents.onHoverOuta2)
  $('#a3').on('click', tictactoeEvents.onGameClicka3).hover(tictactoeEvents.onHoverIna3, tictactoeEvents.onHoverOuta3)

  $('#b1').on('click', tictactoeEvents.onGameClickb1).hover(tictactoeEvents.onHoverInb1, tictactoeEvents.onHoverOutb1)
  $('#b2').on('click', tictactoeEvents.onGameClickb2).hover(tictactoeEvents.onHoverInb2, tictactoeEvents.onHoverOutb2)
  $('#b3').on('click', tictactoeEvents.onGameClickb3).hover(tictactoeEvents.onHoverInb3, tictactoeEvents.onHoverOutb3)

  $('#c1').on('click', tictactoeEvents.onGameClickc1).hover(tictactoeEvents.onHoverInc1, tictactoeEvents.onHoverOutc1)
  $('#c2').on('click', tictactoeEvents.onGameClickc2).hover(tictactoeEvents.onHoverInc2, tictactoeEvents.onHoverOutc2)
  $('#c3').on('click', tictactoeEvents.onGameClickc3).hover(tictactoeEvents.onHoverInc3, tictactoeEvents.onHoverOutc3)

  $('#create-game-button').on('click', tictactoeEvents.onCreateGameShow)
  $('#user-stats-button').on('click', tictactoeEvents.onIndex)

  // $('#games-show').on('submit', tictactoeEvents.onShow)
  // $('#games-update').on('submit', tictactoeEvents.onUpdateGame)
  // $('#games-create').on('submit', tictactoeEvents.onCreate)
})
