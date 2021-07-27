import React , {useEffect} from "react"
import { io } from "socket.io-client"
import { InitClientGame } from "multiplayer-game-core/lib/index";


export const Game = () => {

    useEffect(() => {
        const socket = io({
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
            InitClientGame(socket, "1")    
        })

        socket.on("disconnect", () => {
            console.log("Disconnected from server")
        })
        
      }, [])

    return <div>
        <div id="gameContainer"></div>
    </div>
}