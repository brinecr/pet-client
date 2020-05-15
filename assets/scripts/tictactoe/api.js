'use strict'

const config = require('./../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': data.index,
          'value': data.value
        }
      },
      'over': false
    }
  })
}

module.exports = {
  // showGame,
  index,
  updateGame,
  createGame
}
