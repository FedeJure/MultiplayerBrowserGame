import React, { useState } from "react"
import { login } from "../../services/apiGateway"

export const Login = ({ onLogin }: { onLogin: (loggedPlayerId: string) => void }) => {

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [loading, setLoading] = useState(false)

    const handleUsername = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(evnt.currentTarget.value)
    }

    const handlePassword = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setPass(evnt.currentTarget.value)
    }

    const handleSubmit = (evnt: React.FormEvent) => {
        evnt.preventDefault()
        console.log(`Submitted user: ${username} and pass: ${pass}`)
        setLoading(true)
        login(username, pass)
            .then(response => {
                setLoading(false)
                if (response.ok && response.playerId) onLogin(response.playerId)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input disabled={loading} type="text" onChange={handleUsername} placeholder="Username" />
            <input disabled={loading} type="password" onChange={handlePassword} placeholder="Password" />
            <button disabled={loading} type="submit">Login</button>
        </form>
    </div>
}