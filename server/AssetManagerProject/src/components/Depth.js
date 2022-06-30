
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Depth {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Depth"] = this;

		/* START-USER-CTR-CODE */
		gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
			gameObject.setDepth(this.depth)
		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Depth} */
	static getComponent(gameObject) {
		return gameObject["__Depth"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	depth = 0;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
