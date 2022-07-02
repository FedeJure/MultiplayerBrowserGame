
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SpawnPosition {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__SpawnPosition"] = this;

		/* START-USER-CTR-CODE */
		gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
			gameObject.setName('spawn')
			gameObject.setData('default', this.default)

		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {SpawnPosition} */
	static getComponent(gameObject) {
		return gameObject["__SpawnPosition"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;
	/** @type {boolean} */
	default = false;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
