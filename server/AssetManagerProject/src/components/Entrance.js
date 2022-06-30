
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Entrance {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Entrance"] = this;

		/* START-USER-CTR-CODE */
		gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
			gameObject.setName('entrance')
		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Entrance} */
	static getComponent(gameObject) {
		return gameObject["__Entrance"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
