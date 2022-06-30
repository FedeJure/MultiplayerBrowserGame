window.addEventListener('load', function () {
    var game = new Phaser.Game({
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1366,
        height: 768,
        type: Phaser.AUTO,
        backgroundColor: "#242424",
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
    });
    game.scene.add("SceneLoader", SceneLoader, true);
    

});

class SceneLoader extends Phaser.Scene {
    scenes = [
        'Forest0',
        'ForestVillage'
    ]
    cursors
    camera
    zoomIn
    zoomOut
    constructor() {
        super();
    }

    preload() {
        //  It's essential that the key given here is the exact class name used in the JS file. It's case-sensitive.
        //  See the SceneB.js file and documentation for details.
        this.load.pack("pack", "assets/assetPreload.json");
    }

    create() {
        this.camera = this.cameras.main
        this.cursors = this.input.keyboard.createCursorKeys()

        this.zoomIn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS);
        this.zoomOut = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);


        const select = document.createElement('select')
        select.style.position = 'absolute'
        select.style.left = '0'
        document.body.appendChild(select)

        const selector = document.createElement('option')
        selector.value = undefined
        selector.innerText = 'Select an scene to load'
        select.appendChild(selector)

        this.scenes.forEach(scene => {
            const selector = document.createElement('option')
            selector.value = scene
            selector.innerText = scene
            select.appendChild(selector)
        })

        select.onchange = ev => {
            const value = ev.currentTarget.value
            if (!value) return
            this.scenes.forEach(scene => {
                this.scene.stop(scene)
            })
            
            this.scene.launch(value);
            this.camera = this.scene.get(value).cameras.main
            if (this.camera)
            this.camera.setSize(2048, 2048)
        }

    }

    update() {
        if (!this.camera) return
        if (this.cursors.left.isDown) {
            this.camera.setPosition(this.camera.x  + 10, this.camera.y);
        }
        else if (this.cursors.right.isDown) {
            this.camera.setPosition(this.camera.x  - 10, this.camera.y);
        }
        if (this.cursors.up.isDown) {
            this.camera.setPosition(this.camera.x, this.camera.y + 10);
        }
        if (this.cursors.down.isDown) {
            this.camera.setPosition(this.camera.x, this.camera.y - 10);
        }
        if (this.zoomIn.isDown) {
            this.camera.setZoom(this.camera.zoom + 0.01)
        }
        if (this.zoomOut.isDown) {
            this.camera.setZoom(this.camera.zoom - 0.01)
        }
    }

}
