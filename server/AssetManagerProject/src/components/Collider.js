
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Collider {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__Collider"] = this;

		/* START-USER-CTR-CODE */
		gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
			gameObject.setName('collider')
			gameObject.setData('up', this.up)
			gameObject.setData('down', this.down)
			gameObject.setData('left', this.left)
			gameObject.setData('right', this.right)
		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Collider} */
	static getComponent(gameObject) {
		return gameObject["__Collider"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {boolean} */
	up = false;
	/** @type {boolean} */
	down = false;
	/** @type {boolean} */
	left = false;
	/** @type {boolean} */
	right = false;

	/* START-USER-CODE */


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
