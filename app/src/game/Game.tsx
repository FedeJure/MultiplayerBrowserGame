import React, { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { InitClientGame } from "@fedejure/multiplayer-game-core/lib/index";


export const Game = ({ playerId }: { playerId: string }) => {

    const [connected, setConnected] = useState(false)

    useEffect(() => {
        var host = document.location.origin.replace(/^http/, 'ws')
        const socket = io(host, {
            auth: {
                token: "1234"
            },
            query: {
                playerId
            },
            transports: ["websocket", "polling"]
        });

        socket.on("connect", () => {
            console.log("[Game] :: Successfully connected :D")
            setConnected(true)
            InitClientGame(socket, playerId, document.location.origin)
        })

        socket.on("disconnect", () => {
            console.log("Disconnected from server")
            setConnected(false)
        })

    }, [playerId])

    return <div>
        {connected && <div id="gameContainer"></div>}
    </div>
}