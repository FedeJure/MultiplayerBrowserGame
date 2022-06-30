
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SceneExporter {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__SceneExporter"] = this;

		/* START-USER-CTR-CODE */
		console.log(gameObject)
		gameObject.setInteractive()
		gameObject.on('pointerdown', () => {
			console.log(gameObject.scene.children.list.map(s => JSON.stringify(s.data?.list)))
			console.log(JSON.stringify(gameObject.scene.children.list
			.flatMap(c => c.type === 'Layer' || c.type === 'Container' ? c.list : c)
			.filter(c => c !== gameObject && c.type !== 'TilemapLayer')
			.map(c => {
				const obj = c.toJSON()
				if (c.parentContainer && c.parentContainer.type === 'Container') {
					obj.x += c.parentContainer.x
					obj.y += c.parentContainer.y
				}

				if (c.data)
					obj.data = c.data?.list
				return obj
			})))
		}, this)

		/* END-USER-CTR-CODE */
	}

	/** @returns {SceneExporter} */
	static getComponent(gameObject) {
		return gameObject["__SceneExporter"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */
	exportScene(scene) {
		console.log(scene.children.list.map(c => c.toJSON()))
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
