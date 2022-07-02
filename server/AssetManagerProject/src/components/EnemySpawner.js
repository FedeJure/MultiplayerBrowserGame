
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class EnemySpawner {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__EnemySpawner"] = this;

		/* START-USER-CTR-CODE */
		gameObject.scene.events.once(Phaser.Scenes.Events.UPDATE, () => {
			gameObject.setName('enemySpawner')
			gameObject.setData('enemyModelId', this.enemyModelId)
			gameObject.setData('maxEnemies', this.maxEnemies)
			gameObject.setData('minInterval', this.minInterval)
			gameObject.setData('maxInterval', this.maxInterval)
		}, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {EnemySpawner} */
	static getComponent(gameObject) {
		return gameObject["__EnemySpawner"];
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	gameObject;
	/** @type {string} */
	enemyModelId = "";
	/** @type {number} */
	maxEnemies = 1;
	/** @type {number} */
	minInterval = 500;
	/** @type {number} */
	maxInterval = 10000;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
