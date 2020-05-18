'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowAllPets = function (event) {
  event.preventDefault()
  api.indexPet(event)
    .then(ui.showAllPetsSuccess)
    .catch(ui.showAllPetsFailure)
}

const onShowPet = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.showPet(formData)
    .then(ui.showPetSuccess)
    .catch(ui.showPetFailure)
}

const onAddPet = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addPet(formData)
    .then(ui.addPetSuccess)
    .catch(ui.addPetFailure)
}

const onUpdatePet = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updatePet(formData)
    .then(ui.updatePetSuccess)
    .catch(ui.updatePetFailure)
}

const onRemovePet = function (event) {
  const petId = $(event.target).data('id')
  event.preventDefault()
  api.removePet(petId)
    .then(function (data) {
      console.log(data)
      onShowAllPets(event)
    })
    .catch(ui.removePetFailure)
}

const addHandlers = () => {
  $('.see-your-pets-section').on('click', onShowAllPets)
  $('.show-a-pet-section').on('submit', onShowPet)
  $('.add-a-pet-section').on('submit', onAddPet)
  $('.update-a-pet-section').on('submit', onUpdatePet)
  $('.remove-a-pet-section').on('submit', onRemovePet)
}

module.exports = {
  addHandlers
}
