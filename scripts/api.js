export const indexCharacter = () => {
    return fetch(`http://localhost:5500/characters`)
}

export const createCharacter = (data) => {
    return fetch(`http://127.0.0.1:5500/characters`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showCharacter = (id) => {
    return fetch(`http://127.0.0.1:5500/characters/${id}`)
}

export const updateCharacter = (data, id) => {
    return fetch(`http://localhost:8000/characters/${id}`, {
			method: 'PATCH',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
}

export const deleteCharacter = (id) => {
    return fetch(`http://localhost:8000/characters/${id}`, {
			method: 'DELETE'
		})
}
