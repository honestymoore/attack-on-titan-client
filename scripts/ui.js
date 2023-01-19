const indexCharacterContainer = document.querySelector('#index-character-container')
const messageContainer = document.querySelector('#message-container')
const showCharacterContainer = document.querySelector('#show-character-container')

export const onIndexCharacterSuccess = (characters) => {
    characters.forEach(character => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${character.firstName}  ${character.lastName}</h3>
            <button data-id="${character._id}" >Show Character</button>
        `

        indexCharacterContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateCharacterSuccess = () => {
    messageContainer.innerText = 'You have created a character!! :)'
}

export const onShowCharacterSuccess = (character) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${character.firstName}  ${character.lastName}</h3>
        <p>${character.class}</p>
        <p>${character.strength}</p>
        <p>${character._id}</p>

        <form data-id="${character._id}">
            <input type="text" name="firstName" value="${character.firstName}">
            <input type="text" name="lastName" value="${character.lastName}">
            <input type="text" name="class" value="${character.class}">
            <input type="number" name="strength" value="${character.strength}">
            <input type="submit" value="Update Character">
        </form>

        <button data-id="${character._id}">Delete Character</button> 
    `
    showCharacterContainer.appendChild(div)
}