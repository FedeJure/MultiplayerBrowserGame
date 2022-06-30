
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Exit {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Exit"] = this;

		/* START-USER-CTR-CODE */
		gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
			gameObject.setName('exit')
		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Exit} */
	static getComponent(gameObject) {
		return gameObject["__Exit"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
