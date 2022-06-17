import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"
import { InitClientGame } from "@fedejure/multiplayer-game-core/lib/clientIndex";


export const Game = ({ playerId }: { playerId: string }) => {

    const [connected, setConnected] = useState(false)
    const isConnectedRef = useRef(false)

    useEffect(() => {
        const host =
            process.env.NODE_ENV === "development"
                ? `ws://${document.location.hostname}:8081`
                : document.location.origin.replace(/^http/, 'ws');
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
            InitClientGame(socket, playerId, process.env.NODE_ENV === "development" ? `http://${document.location.hostname}:8081` : document.location.origin)
            setConnected(true)
            isConnectedRef.current = true
        })

        socket.on("disconnect", () => {
            console.log("Disconnected from server")
            setConnected(false)
            isConnectedRef.current = false
        })

    }, [playerId])

    useEffect(() => {
        if (!connected && isConnectedRef.current) {
            window.location.reload()
        }
    }, [connected])

    return <div id="gameContainer"></div>

}