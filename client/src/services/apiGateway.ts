export function login(username: string, password: string) {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }
    return fetch(`${document.location.origin}/login`, config).then(res => res.json())
}