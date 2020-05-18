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

// const onShowPet = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api.showPet(formData)
//     .then(ui.showPetSuccess)
//     .catch(ui.showPetFailure)
// }

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

const onRemovePet = (event) => {
  const petId = $(event.target).data('id')
  console.log(petId)
  event.preventDefault()
  api.removePet(petId)
    .then(function (data) {
      onShowAllPets(event)
    })
    .then(ui.removePetSuccess)
    .catch(ui.removePetFailure)
}

const onClearPets = (event) => {
  event.preventDefault()
  ui.clearPets()
}

const addHandlers = () => {
  $('.see-your-pets-section').on('click', onShowAllPets)
  // $('.show-a-pet-section').on('submit', onShowPet)
  $('.add-a-pet-section').on('submit', onAddPet)
  $('.update-a-pet-section').on('submit', onUpdatePet)
  $('.clear-pets-section').on('click', onClearPets)
  $('.content').on('click', '.removePetButton', onRemovePet)
}

module.exports = {
  addHandlers
}
