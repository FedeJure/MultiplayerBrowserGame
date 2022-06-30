# Map editor for [Core project](https://github.com/FedeJure/MultiplayerBrowserGameCore)

## Which problem this project resolve?
In the very beginning the project was develop entire using Tiled, but when I tried to build complex levels combinating many textures that was impossible with Tiled.


-----------

## How to create a Level

1) Have created the Tiled map
1) Have created the Atlas texture with [Free Tex Packer](https://free-tex-packer.com/app/) ```aclaration: you may have to change the atlas Json generated letting as the root children the 'frames' array and remove the "textures" layer```
2) Create a new Scene with the level name inside `maps` folder
3) import the Tiled map with his assets (just to know how is the map ground and can create another objects relative to the map)
4) Setup the Scene border on `x:0, y:0` and with the `width` and `heigh` exactly as the Tiled map (like 2048px)
5) add the tilemap to the scene
6) Build all you want using only textures from atlas and another global atlas using in whole game.
7) WIP: export with the custom script all the level new objects.