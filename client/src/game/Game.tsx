import React , {useEffect, useState} from "react"
import SocketIo from "socket.io-client"
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import { InitClientGame } from "multiplayer-game-core/lib/index";
import { ClientConfig } from "multiplayer-game-core/lib/view/DefaultGameConfigs";
import { GameScene } from "multiplayer-game-core/lib/view/GameScene"


export const Game = () => {

    useEffect(() => {
        const socket= SocketIo("http://127.0.0.1:8080")
        const scene = new GameScene()
        InitClientGame(ClientConfig, scene,  socket)
      }, [])

    return <div>
        <div id="gameContainer"></div>
    </div>
}