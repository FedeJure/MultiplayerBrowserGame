
// You can write more code here

/* START OF COMPILED CODE */

class Forest0 extends Phaser.Scene {

	constructor() {
		super("Forest0");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// forest_0
		const forest_0 = this.add.tilemap("forest_0");
		forest_0.addTilesetImage("forest", "forest");

		// object_RaCsMXm
		const object_RaCsMXm = this.add.image(991, 389, "button");

		// object_mJvpYVa
		forest_0.createLayer("background", ["forest"], 0, -1);

		// object_HrIrOLB
		forest_0.createLayer("ground", ["forest"], 0, -2);

		// object_HwvGEMl
		const object_HwvGEMl = this.add.rectangle(39, 1383, 128, 128);
		object_HwvGEMl.scaleX = 10.68626108394472;
		object_HwvGEMl.scaleY = 0.09690901094702309;
		object_HwvGEMl.setOrigin(0, 0.5);

		// object_fGDxhMj
		const object_fGDxhMj = this.add.rectangle(97, 1543, 128, 128);
		object_fGDxhMj.scaleX = 2.981174022935841;
		object_fGDxhMj.scaleY = 0.10398898654357956;
		object_fGDxhMj.setOrigin(0, 0.5);

		// object_qoHmeUQ
		const object_qoHmeUQ = this.add.rectangle(288, 1478, 128, 128);
		object_qoHmeUQ.scaleX = 0.24074522319938652;
		object_qoHmeUQ.scaleY = -0.09519227595036016;
		object_qoHmeUQ.setOrigin(0, 0.5);

		// object_uZXXcDN
		const object_uZXXcDN = this.add.rectangle(417, 1446, 128, 128);
		object_uZXXcDN.scaleX = 0.24074522319938652;
		object_uZXXcDN.scaleY = -0.09519227595036016;
		object_uZXXcDN.setOrigin(0, 0.5);

		// object_JchqctV
		const object_JchqctV = this.add.rectangle(446.49263650980174, 1508.9982761127053, 128, 128);
		object_JchqctV.scaleX = 0.24074522319938652;
		object_JchqctV.scaleY = -0.09519227595036016;
		object_JchqctV.setOrigin(0, 0.5);

		// object_gQbRDhk
		const object_gQbRDhk = this.add.rectangle(1.551687653380621, 1699.808022687891, 128, 128);
		object_gQbRDhk.scaleX = 15.988322102918316;
		object_gQbRDhk.scaleY = 0.07245906185043288;
		object_gQbRDhk.setOrigin(0, 0.5);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(322, 1348, 128, 128);
		rectangle_1.scaleX = 0.06665368990587373;
		rectangle_1.scaleY = 0.05728857228202444;

		// rectangle
		const rectangle = this.add.rectangle(1163.0687441002233, 1337.609785445011, 128, 128);
		rectangle.scaleX = 0.06665368990587373;
		rectangle.scaleY = 0.05728857228202444;

		// rectangle_2
		const rectangle_2 = this.add.rectangle(1176.878180122916, 1641.4173779442528, 128, 128);
		rectangle_2.scaleX = 0.06665368990587373;
		rectangle_2.scaleY = 0.05728857228202444;

		// rectangle_3
		const rectangle_3 = this.add.rectangle(326.6114764399729, 1655.2268139669457, 128, 128);
		rectangle_3.scaleX = 0.06665368990587373;
		rectangle_3.scaleY = 0.05728857228202444;

		// object_RaCsMXm (components)
		new SceneExporter(object_RaCsMXm);

		// object_HwvGEMl (components)
		const object_HwvGEMlCollider = new Collider(object_HwvGEMl);
		object_HwvGEMlCollider.up = true;

		// object_fGDxhMj (components)
		const object_fGDxhMjCollider = new Collider(object_fGDxhMj);
		object_fGDxhMjCollider.up = true;

		// object_qoHmeUQ (components)
		const object_qoHmeUQCollider = new Collider(object_qoHmeUQ);
		object_qoHmeUQCollider.up = true;

		// object_uZXXcDN (components)
		const object_uZXXcDNCollider = new Collider(object_uZXXcDN);
		object_uZXXcDNCollider.up = true;

		// object_JchqctV (components)
		const object_JchqctVCollider = new Collider(object_JchqctV);
		object_JchqctVCollider.up = true;

		// object_gQbRDhk (components)
		const object_gQbRDhkCollider = new Collider(object_gQbRDhk);
		object_gQbRDhkCollider.up = true;

		// rectangle_1 (components)
		const rectangle_1EnemySpawner = new EnemySpawner(rectangle_1);
		rectangle_1EnemySpawner.enemyModelId = "spider";
		rectangle_1EnemySpawner.maxEnemies = 2;
		rectangle_1EnemySpawner.minInterval = 5000;

		// rectangle (components)
		const rectangleEnemySpawner = new EnemySpawner(rectangle);
		rectangleEnemySpawner.enemyModelId = "spider";
		rectangleEnemySpawner.maxEnemies = 2;
		rectangleEnemySpawner.minInterval = 5000;

		// rectangle_2 (components)
		const rectangle_2EnemySpawner = new EnemySpawner(rectangle_2);
		rectangle_2EnemySpawner.enemyModelId = "spider";
		rectangle_2EnemySpawner.maxEnemies = 2;
		rectangle_2EnemySpawner.minInterval = 5000;

		// rectangle_3 (components)
		const rectangle_3EnemySpawner = new EnemySpawner(rectangle_3);
		rectangle_3EnemySpawner.enemyModelId = "spider";
		rectangle_3EnemySpawner.maxEnemies = 2;
		rectangle_3EnemySpawner.minInterval = 5000;

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
