import { indexCharacter, createCharacter, showCharacter, updateCharacter, deleteCharacter } from './api.js'
import {
	onIndexCharacterSuccess,
	onFailure,
	onCreateCharacterSuccess,
	onShowCharacterSuccess,
	onUpdateCharacterSuccess,
	onDeleteCharacterSuccess
} from './ui.js'

const createCharacterForm = document.querySelector('#create-character-form')
const indexCharacterContainer = document.querySelector('#index-character-container')
const showCharacterContainer = document.querySelector('#show-character-container')

indexCharacter()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexCharacterSuccess(res.characters)
    })
    .catch(onFailure)


createCharacterForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const characterData = {
			character: {
				firstName: event.target['firstName'].value,
				lastName: event.target['lastName'].value,
				class: event.target['class'].value,
				strength: event.target['strength'].value,
			},
		}

    // console.log(characterData)
    createCharacter(characterData)
			.then(onCreateCharacterSuccess)
			.catch(onFailure)
})

indexCharacterContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    // console.log(id)

    showCharacter(id)
			.then((res) => res.json())
			.then((res) => onShowCharacterSuccess(res.character))
			.catch(onFailure)
})

showCharacterContainer.addEventListener('submit', (event) => {
	event.preventDefault()
	const id = event.target.getAttribute('data-id')
	const characterData = {
		character: {
			firstName: event.target['firstName'].value,
			lastName: event.target['lastName'].value,
			strength: event.target['strength'].value,
			class: event.target['class'].value,
		},
	}
	updateCharacter(characterData, id)
		.then(onUpdateCharacterSuccess)
		.catch(onFailure)
})

showCharacterContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

	if (!id) return

	deleteCharacter(id)
		.then(onDeleteCharacterSuccess)
		.catch(onFailure)
})
