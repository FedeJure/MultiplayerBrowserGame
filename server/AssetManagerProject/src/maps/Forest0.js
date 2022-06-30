
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

		// forest_0
		const forest_0 = this.add.tilemap("forest_0");
		forest_0.addTilesetImage("forest", "forest");

		// button
		const button = this.add.image(991, 389, "button");

		// background_1
		forest_0.createLayer("background", ["forest"], 0, -1);

		// ground_1
		forest_0.createLayer("ground", ["forest"], 0, -1);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(39, 1384, 128, 128);
		rectangle_1.scaleX = 10.68626108394472;
		rectangle_1.scaleY = 0.09690901094702309;
		rectangle_1.setOrigin(0, 0.5);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(97, 1544, 128, 128);
		rectangle_2.scaleX = 2.981174022935841;
		rectangle_2.scaleY = 0.10398898654357956;
		rectangle_2.setOrigin(0, 0.5);

		// rectangle
		const rectangle = this.add.rectangle(288, 1479, 128, 128);
		rectangle.scaleX = 0.24074522319938652;
		rectangle.scaleY = -0.09519227595036016;
		rectangle.setOrigin(0, 0.5);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(417, 1447, 128, 128);
		rectangle_3.scaleX = 0.24074522319938652;
		rectangle_3.scaleY = -0.09519227595036016;
		rectangle_3.setOrigin(0, 0.5);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(446.49263650980174, 1509.9982761127053, 128, 128);
		rectangle_4.scaleX = 0.24074522319938652;
		rectangle_4.scaleY = -0.09519227595036016;
		rectangle_4.setOrigin(0, 0.5);

		// rectangle_5
		const rectangle_5 = this.add.rectangle(1.551687653380621, 1698.808022687891, 128, 128);
		rectangle_5.scaleX = 15.988322102918316;
		rectangle_5.scaleY = -0.03783660010527591;
		rectangle_5.setOrigin(0, 0.5);

		// button (components)
		new SceneExporter(button);

		// rectangle_1 (components)
		const rectangle_1Collider = new Collider(rectangle_1);
		rectangle_1Collider.up = true;

		// rectangle_2 (components)
		const rectangle_2Collider = new Collider(rectangle_2);
		rectangle_2Collider.up = true;

		// rectangle (components)
		const rectangleCollider = new Collider(rectangle);
		rectangleCollider.up = true;

		// rectangle_3 (components)
		const rectangle_3Collider = new Collider(rectangle_3);
		rectangle_3Collider.up = true;

		// rectangle_4 (components)
		const rectangle_4Collider = new Collider(rectangle_4);
		rectangle_4Collider.up = true;

		// rectangle_5 (components)
		const rectangle_5Collider = new Collider(rectangle_5);
		rectangle_5Collider.up = true;

		this.forest_0 = forest_0;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	forest_0;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
