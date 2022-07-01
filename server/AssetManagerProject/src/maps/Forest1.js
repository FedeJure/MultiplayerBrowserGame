
// You can write more code here

/* START OF COMPILED CODE */

class Forest1 extends Phaser.Scene {

	constructor() {
		super("Forest1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1705, 1642, 128, 128);
		rectangle_1.isFilled = true;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(933, 1305, 128, 128);
		rectangle_2.isFilled = true;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
