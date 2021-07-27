import React , {useEffect, useState} from "react"
import { io } from "socket.io-client"
import { InitClientGame } from "multiplayer-game-core/lib/index";


export const Game = () => {

    const [connected, setConnected] = useState(false)

    useEffect(() => {
        const socket = io("ws://127.0.0.1:8080", {
            auth: {
                token: "1234"
            },
            query: {
                playerId: "1"
            },
            transports: ["websocket","polling"]
        });
        
        socket.on("connect", () => {
            console.log("[Game] :: Successfully connected :D")
            setConnected(true)            
            InitClientGame(socket, "1")    
        })

        socket.on("disconnect", () => {
            console.log("Disconnected from server")
            setConnected(false)
        })
        
      }, [])

    return <div>
        {connected && <div id="gameContainer"></div>}
    </div>
}