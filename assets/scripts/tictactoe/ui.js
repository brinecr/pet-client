'use strict'

const store = require('../store')

const indexGameSuccess = function (data) {
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#message').text('Successfully showed games!')
  let gameHtml = ''
  data.games.forEach(function (game) {
    const gameSection = (`
        <strong>Game ID</strong>: ${game.id}
        <br>
        <strong>Cells</strong>:
        <br>
        |${game.cells[0]}-${game.cells[1]}-${game.cells[2]}| <br>
        |${game.cells[3]}-${game.cells[4]}-${game.cells[5]}| <br>
        |${game.cells[6]}-${game.cells[7]}-${game.cells[8]}|
        <br>
        <br>
      `)
    gameHtml += gameSection
  })
  $('#games-played-total').show()
  $('#games-played-total').html(gameHtml)
}

const indexGameFailure = function (error) {
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('#message').text(`Failure to index game! ${error.responseText}`)
  $('form').trigger('reset')
}

const updateGameSuccess = function (data) {
}

const updateGameFailure = function (error) {
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('#message').text(`Failure to update game! ${error.responseText}`)
  $('form').trigger('reset')
}

const createGameSuccess = function (data) {
  store.game = data.game
  $('#create-game-button').hide()
  $('#stats-button').hide()
  $('#whose-turn').show()
  $('#cancel-game').show()
  $('#message').text('')
  $('#message').removeClass()
  $('#change-password-button').hide()
  $('#message').hide()
  $('#change-password').hide()
  $('.textbox').hide()
  $('#game').show()
  $('#continue-game-button').hide()
  $('#signed-in-show-button').show()
  $('form').trigger('reset')
  $('#whose-turn').html(`Player X's Turn`)
  $('#a1').html(' ').css('background-color', 'white')
  $('#a2').html(' ').css('background-color', 'white')
  $('#a3').html(' ').css('background-color', 'white')
  $('#b1').html(' ').css('background-color', 'white')
  $('#b2').html(' ').css('background-color', 'white')
  $('#b3').html(' ').css('background-color', 'white')
  $('#c1').html(' ').css('background-color', 'white')
  $('#c2').html(' ').css('background-color', 'white')
  $('#c3').html(' ').css('background-color', 'white')
  $('#game-id').html('Game ID is: ' + data.game.id)
}

const createGameFailure = function (error) {
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('#message').text(`Failure to create game! ${error.responseText}`)
  $('form').trigger('reset')
}

const win = function (playerX) {
  $('#message').show()
  $('#whose-turn').hide()
  $('#sign-out-button').hide()
  $('#message').removeClass()
  $('#message').addClass('alert alert-success')
  $('#game').hide()
  if (playerX === false) {
    $('#message').text('PLAYER X WINS!')
  } else if (playerX === true) {
    $('#message').text('PLAYER O WINS!')
  }
}

const draw = function (gameOver) {
  $('#message').show()
  $('#message').text('GAME OVER - DRAW')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
  $('#whose-turn').hide()
  $('#sign-out-button').hide()
  $('#game').hide()
  gameOver = true
}

const invalidMove = function () {
  $('#message').show()
  $('#message').text('Invalid move! Please choose a spot not taken already!')
  $('#message').removeClass()
  $('#message').addClass('alert alert-danger')
}

module.exports = {
  indexGameSuccess,
  indexGameFailure,
  updateGameSuccess,
  updateGameFailure,
  createGameSuccess,
  createGameFailure,
  win,
  draw,
  invalidMove
}
