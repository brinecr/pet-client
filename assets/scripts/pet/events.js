'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onShowAllPets = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.indexPet(formData)
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
  console.log(event)
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
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.removePet(formData)
    .then(ui.removePetSuccess)
    .catch(ui.removePetFailure)
}

module.exports = {
  onShowAllPets,
  onShowPet,
  onAddPet,
  onUpdatePet,
  onRemovePet

}
