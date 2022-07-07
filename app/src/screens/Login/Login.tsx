import React, { useState } from "react"
import { login } from "../../services/apiGateway"

export const Login = ({ onLogin }: { onLogin: (loggedPlayerId: string) => void }) => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [loading, setLoading] = useState(false)

    const handleEmail = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(evnt.currentTarget.value)
    }

    const handlePassword = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setPass(evnt.currentTarget.value)
    }

    const handleSubmit = (evnt: React.FormEvent) => {
        evnt.preventDefault()
        console.log(`Submitted user: ${email} and pass: ${pass}`)
        setLoading(true)
        login(email, pass)
            .then(response => {
                setLoading(false)
                if (response.ok && response.playerId) onLogin(response.playerId)
                else alert(response.message)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input disabled={loading} type="text" onChange={handleEmail} placeholder="Email" />
            <input disabled={loading} type="password" onChange={handlePassword} placeholder="Password" />
            <button disabled={loading} type="submit">Login</button>
        </form>
    </div>
}