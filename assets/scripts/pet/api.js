'use strict'

const config = require('./../config')
const store = require('../store')

const indexPet = function () {
  return $.ajax({
    url: config.apiUrl + '/pets/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showPet = function () {
  return $.ajax({
    url: config.apiUrl + '/pets/' + store.pet.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addPet = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pets/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'pet': {
        'name': data.name,
        'breed': data.breed,
        'description': data.description,
        'owner': data.owner
      }
    }
  })
}

const updatePet = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pets/' + store.pet.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'pet': {
        'name': data.name,
        'breed': data.breed,
        'description': data.description
      }
    }
  })
}

module.exports = {
  // showGame,
  indexPet,
  showPet,
  updatePet,
  addPet
}
