
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Ladder {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Ladder"] = this;

		/* START-USER-CTR-CODE */
		gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
			gameObject.setName('ladder')
		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Ladder} */
	static getComponent(gameObject) {
		return gameObject["__Ladder"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
