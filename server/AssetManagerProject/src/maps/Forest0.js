
// You can write more code here

/* START OF COMPILED CODE */

class Forest0 extends Phaser.Scene {

	constructor() {
		super("Forest0");

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("forest", "assets/forest.json");
	}

	/** @returns {void} */
	editorCreate() {

		// forest_1
		const forest_1 = this.add.tilemap("forest_1");

		// groundCollider
		const groundCollider = this.add.rectangle(1, 1697, 128, 128);
		groundCollider.scaleX = 2052.681359110714;
		groundCollider.scaleY = 358.81356416070133;
		groundCollider.setOrigin(0, 0);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 1184, 128, 128);
		rectangle_1.scaleX = 3.003711237517988;
		rectangle_1.scaleY = 0.12244768649666016;
		rectangle_1.setOrigin(0, 0);

		// tree2
		this.add.image(820, 1627, "texture", "tree2");

		// tree1
		this.add.image(1005, 1614, "texture", "tree1");

		// box
		this.add.image(858, 1674, "texture", "box");

		// tree
		const tree = this.add.image(737, 1592, "texture", "tree2");
		tree.scaleX = 1.5;
		tree.scaleY = 1.5;

		// ladder
		this.add.image(242, 1648, "texture", "ladder");

		// ladder_1
		this.add.image(242, 1554, "texture", "ladder");

		// ladder_2
		this.add.image(242, 1459, "texture", "ladder");

		// ladder_3
		this.add.image(241, 1364, "texture", "ladder");

		// ladder_4
		this.add.image(240, 1269, "texture", "ladder");

		// ladder_5
		this.add.image(240, 1236, "texture", "ladder");

		// button
		const button = this.add.image(972, 1286, "button");

		// rectangle_2
		const rectangle_2 = this.add.rectangle(226, 1185, 128, 128);
		rectangle_2.scaleX = 0.24048457424385264;
		rectangle_2.scaleY = 3.995842206570253;
		rectangle_2.setOrigin(0, 0);

		// groundCollider (components)
		new Collider(groundCollider);

		// rectangle_1 (components)
		const rectangle_1Collider = new Collider(rectangle_1);
		rectangle_1Collider.up = true;

		// button (components)
		new SceneExporter(button);

		// rectangle_2 (components)
		new Ladder(rectangle_2);

		this.forest_1 = forest_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	forest_1;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
