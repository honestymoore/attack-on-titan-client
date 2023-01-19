export const indexCharacter = () => {
    return fetch(`http://localhost:5501/characters`)
}

export const createCharacter = (data) => {
    return fetch(`http://127.0.0.1:5501/characters`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
export const showCharacter = (id) => {
    return fetch(`http://127.0.0.1:5501/characters/${id}`)
}
