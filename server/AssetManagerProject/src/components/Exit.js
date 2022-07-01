
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
			gameObject.setData('id', this.id)
			gameObject.setData('action_required', this.action_required)
			gameObject.setData('destination_map_id', this.destination_map_id)
			gameObject.setData('destination_entrance_id', this.destination_entrance_id)

		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {Exit} */
	static getComponent(gameObject) {
		return gameObject["__Exit"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;
	/** @type {string} */
	id = "";
	/** @type {boolean} */
	action_required = false;
	/** @type {number} */
	destination_map_id;
	/** @type {string} */
	destination_entrance_id = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
