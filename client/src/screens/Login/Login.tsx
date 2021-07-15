import React, {InputHTMLAttributes, useState} from "react"

export const Login = ({onLogin} : {onLogin: () => void}) => {

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const handleUsername = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(evnt.currentTarget.value)
    }

    const handlePassword = (evnt: React.ChangeEvent<HTMLInputElement>) => {
        setPass(evnt.currentTarget.value)
    }

    const handleSubmit = (evnt: React.FormEvent) => {
        evnt.preventDefault()
        console.log(`Submitted user: ${username} and pass: ${pass}`)
        onLogin()
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleUsername} placeholder="Username"/>
            <input type="password" onChange={handlePassword} placeholder="Password"/>
            <button type="submit">Login</button>
        </form>
    </div>
}