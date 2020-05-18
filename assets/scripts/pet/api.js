'use strict'

const config = require('./../config')
const store = require('../store')

const indexPet = function (event) {
  return $.ajax({
    url: config.apiUrl + '/pets',
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
    data
  })
}

// data: {
//   'pet': {
//     'name': data.name,
//     'breed': data.breed,
//     'description': data.description,
//     'owner': data.owner
//   }

const updatePet = function (data) {
  return $.ajax({
    url: config.apiUrl + '/pets/' + data.pet.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data
  })
}

const removePet = function (id) {
  return $.ajax({
    url: config.apiUrl + '/pets/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  // showGame,
  indexPet,
  showPet,
  updatePet,
  addPet,
  removePet
}
