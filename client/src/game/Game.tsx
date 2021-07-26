import React , {useEffect, useState} from "react"
import { io } from "socket.io-client"
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { InitClientGame } from "multiplayer-game-core/lib/index";
import { ClientConfig } from "multiplayer-game-core/lib/view/DefaultGameConfigs";
import { ClientGameScene } from "multiplayer-game-core/lib/view/ClientGameScene"
import { GameEvents } from "multiplayer-game-core/lib/infrastructure/events/gameEvents"
import { PlayerInfo } from "../../../core/lib/domain/playerInfo";


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
            InitClientGame(socket, 1)    
        })

        socket.on("disconnect", () => {
            console.log("Disconnected from server")
        })
        
      }, [])

    return <div>
        <div id="gameContainer"></div>
    </div>
}