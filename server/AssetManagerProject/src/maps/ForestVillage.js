
// You can write more code here

/* START OF COMPILED CODE */

class ForestVillage extends Phaser.Scene {

	constructor() {
		super("ForestVillage");

		/* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	preload() {

		this.load.pack("forestVillage", "assets/forestVillage.json");
	}

	/** @returns {void} */
	editorCreate() {

		// forest_2_village
		const forest_2_village = this.add.tilemap("forest_2_village");
		forest_2_village.addTilesetImage("forest", "forest");
		forest_2_village.addTilesetImage("farm", "farm");

		// GrfLbN
		const grfLbN = this.add.layer();

		// UVLFPK
		const uVLFPK = this.add.image(173, 1489, "village", "5");
		uVLFPK.scaleX = 0.3;
		uVLFPK.scaleY = 0.7974303777798181;
		uVLFPK.setOrigin(0, 0.5);
		grfLbN.add(uVLFPK);

		// QFpMRB
		const qFpMRB = this.add.image(173, 1501, "village", "5");
		qFpMRB.scaleX = 0.3;
		qFpMRB.scaleY = 0.7974303777798282;
		qFpMRB.setOrigin(0, 0.5);
		grfLbN.add(qFpMRB);

		// mEWNSz
		const mEWNSz = this.add.image(173, 1512, "village", "5");
		mEWNSz.scaleX = 0.3;
		mEWNSz.scaleY = 0.7974303777798181;
		mEWNSz.setOrigin(0, 0.5);
		grfLbN.add(mEWNSz);

		// GDRhDb
		const gDRhDb = this.add.image(173, 1523, "village", "5");
		gDRhDb.scaleX = 0.3;
		gDRhDb.scaleY = 0.7974303777798282;
		gDRhDb.setOrigin(0, 0.5);
		grfLbN.add(gDRhDb);

		// SwIHHs
		const swIHHs = this.add.image(173, 1534, "village", "5");
		swIHHs.scaleX = 0.3;
		swIHHs.scaleY = 0.7974303777798282;
		swIHHs.setOrigin(0, 0.5);
		grfLbN.add(swIHHs);

		// qXqkmO
		const qXqkmO = this.add.image(173, 1545, "village", "5");
		qXqkmO.scaleX = 0.3;
		qXqkmO.scaleY = 0.7974303777798181;
		qXqkmO.setOrigin(0, 0.5);
		grfLbN.add(qXqkmO);

		// VtwSAj
		const vtwSAj = this.add.image(173, 1556, "village", "5");
		vtwSAj.scaleX = 0.3;
		vtwSAj.scaleY = 0.7974303777798282;
		vtwSAj.setOrigin(0, 0.5);
		grfLbN.add(vtwSAj);

		// IqrhHd
		const iqrhHd = this.add.image(173, 1567, "village", "5");
		iqrhHd.scaleX = 0.3;
		iqrhHd.scaleY = 0.7974303777798282;
		iqrhHd.setOrigin(0, 0.5);
		grfLbN.add(iqrhHd);

		// DTconH
		const dTconH = this.add.image(172, 1580, "village", "5");
		dTconH.scaleX = 0.3;
		dTconH.scaleY = 0.7974303777798282;
		dTconH.setOrigin(0, 0.5);
		grfLbN.add(dTconH);

		// aBZPlv
		const aBZPlv = this.add.image(172, 1591, "village", "5");
		aBZPlv.scaleX = 0.3;
		aBZPlv.scaleY = 0.7974303777798181;
		aBZPlv.setOrigin(0, 0.5);
		grfLbN.add(aBZPlv);

		// pPKHrS
		const pPKHrS = this.add.image(172, 1602, "village", "5");
		pPKHrS.scaleX = 0.3;
		pPKHrS.scaleY = 0.7974303777798181;
		pPKHrS.setOrigin(0, 0.5);
		grfLbN.add(pPKHrS);

		// zgsbkl
		const zgsbkl = this.add.image(172, 1613, "village", "5");
		zgsbkl.scaleX = 0.3;
		zgsbkl.scaleY = 0.7974303777798181;
		zgsbkl.setOrigin(0, 0.5);
		grfLbN.add(zgsbkl);

		// hCMirf
		const hCMirf = this.add.image(172, 1625, "village", "5");
		hCMirf.scaleX = 0.3;
		hCMirf.scaleY = 0.7974303777798282;
		hCMirf.setOrigin(0, 0.5);
		grfLbN.add(hCMirf);

		// NesLbz
		const nesLbz = this.add.image(172, 1636, "village", "5");
		nesLbz.scaleX = 0.3;
		nesLbz.scaleY = 0.7974303777798181;
		nesLbz.setOrigin(0, 0.5);
		grfLbN.add(nesLbz);

		// rGUxqY
		const rGUxqY = this.add.image(172, 1647, "village", "5");
		rGUxqY.scaleX = 0.3;
		rGUxqY.scaleY = 0.7974303777798282;
		rGUxqY.setOrigin(0, 0.5);
		grfLbN.add(rGUxqY);

		// AnoLRp
		const anoLRp = this.add.image(172, 1658, "village", "5");
		anoLRp.scaleX = 0.3;
		anoLRp.scaleY = 0.7974303777798282;
		anoLRp.setOrigin(0, 0.5);
		grfLbN.add(anoLRp);

		// RCjOhM
		const rCjOhM = this.add.image(172, 1669, "village", "5");
		rCjOhM.scaleX = 0.3;
		rCjOhM.scaleY = 0.7974303777798181;
		rCjOhM.setOrigin(0, 0.5);
		grfLbN.add(rCjOhM);

		// uWoIvM
		const uWoIvM = this.add.image(172, 1680, "village", "5");
		uWoIvM.scaleX = 0.3;
		uWoIvM.scaleY = 0.7974303777798282;
		uWoIvM.setOrigin(0, 0.5);
		grfLbN.add(uWoIvM);

		// IBsyCG
		const iBsyCG = this.add.image(172, 1691, "village", "5");
		iBsyCG.scaleX = 0.3;
		iBsyCG.scaleY = 0.7974303777798282;
		iBsyCG.setOrigin(0, 0.5);
		grfLbN.add(iBsyCG);

		// mkiApQ
		const mkiApQ = this.add.image(169, 1587, "village", "47");
		mkiApQ.scaleX = -0.7101683098224691;
		mkiApQ.scaleY = 1.1780424784473118;
		mkiApQ.setOrigin(0.5, 1);
		grfLbN.add(mkiApQ);

		// yPsack
		const yPsack = this.add.image(168, 1700, "village", "47");
		yPsack.scaleX = -0.7101683098224691;
		yPsack.scaleY = 1.1780424784473118;
		yPsack.setOrigin(0.5, 1);
		grfLbN.add(yPsack);

		// IeKaOw
		const ieKaOw = this.add.rectangle(199, 1578, 128, 128);
		ieKaOw.scaleX = 0.4785165650522041;
		ieKaOw.scaleY = 1.8669475003249871;
		grfLbN.add(ieKaOw);

		// uuuTzf
		forest_2_village.createLayer("ground", ["forest"], 0, 0);

		// UXQGCJ
		this.add.image(883, 1663, "village", "66");

		// hzCAYA
		const hzCAYA = this.add.image(934, 965, "button");

		// hnSjrC
		const hnSjrC = this.add.image(959, 1657, "village", "57");
		hnSjrC.scaleX = 0.5814243205594086;
		hnSjrC.scaleY = 0.5832897418579002;

		// BnuZoG
		const bnuZoG = this.add.layer();

		// zDpxpi
		const zDpxpi = this.add.image(513, 1637, "village", "26");
		zDpxpi.scaleX = 0.7930543644653019;
		zDpxpi.scaleY = 0.7557461198632563;
		bnuZoG.add(zDpxpi);

		// tmtTNw
		const tmtTNw = this.add.image(403, 1637, "village", "26");
		tmtTNw.scaleX = 0.7240953091887501;
		tmtTNw.scaleY = 0.7598126529158429;
		bnuZoG.add(tmtTNw);

		// zaeHzz
		const zaeHzz = this.add.image(459, 1658, "village", "21");
		zaeHzz.scaleX = 0.3594959292043153;
		zaeHzz.scaleY = 0.46578508238192273;
		bnuZoG.add(zaeHzz);

		// jqAGIw
		const jqAGIw = this.add.image(459, 1694, "village", "50");
		jqAGIw.scaleX = 0.35027489539451107;
		jqAGIw.scaleY = 0.4500256982397846;
		bnuZoG.add(jqAGIw);

		// kZuAIh
		const kZuAIh = this.add.image(335, 1699, "village", "47");
		kZuAIh.scaleX = 0.7914539500846772;
		kZuAIh.scaleY = 1.223661139336774;
		kZuAIh.setOrigin(0.5, 1);
		bnuZoG.add(kZuAIh);

		// BVgHfE
		const bVgHfE = this.add.image(596, 1637, "village", "27");
		bVgHfE.scaleX = 0.9655380450841;
		bVgHfE.scaleY = 0.7442999438329971;
		bnuZoG.add(bVgHfE);

		// gXtxBN
		const gXtxBN = this.add.image(578, 1686, "village", "13");
		gXtxBN.scaleX = 0.5348463580196658;
		gXtxBN.scaleY = 0.5137216959198732;
		bnuZoG.add(gXtxBN);

		// FwqsPv
		const fwqsPv = this.add.image(385, 1514, "village", "45");
		bnuZoG.add(fwqsPv);

		// keymuU
		const keymuU = this.add.image(565, 1514, "village", "45");
		keymuU.flipX = true;
		bnuZoG.add(keymuU);

		// YqpKQi
		const yqpKQi = this.add.image(477, 1525, "village", "23");
		yqpKQi.scaleX = 0.574477331289329;
		yqpKQi.scaleY = 0.5434103272625034;
		bnuZoG.add(yqpKQi);

		// fNFGYL
		const fNFGYL = this.add.image(405, 1568, "village", "5");
		bnuZoG.add(fNFGYL);

		// KTxTLF
		const kTxTLF = this.add.image(610, 1700, "village", "47");
		kTxTLF.scaleX = 0.7701003535392317;
		kTxTLF.scaleY = 1.1998572720050202;
		kTxTLF.setOrigin(0.5, 1);
		bnuZoG.add(kTxTLF);

		// Oglqvp
		const oglqvp = this.add.image(539, 1568, "village", "5");
		bnuZoG.add(oglqvp);

		// aJdBxZ
		const aJdBxZ = this.add.image(540, 1625, "village", "35");
		aJdBxZ.scaleX = 0.6001591821876302;
		aJdBxZ.scaleY = 0.5901817840466492;
		bnuZoG.add(aJdBxZ);

		// tqewjU
		const tqewjU = this.add.layer();

		// bnbwrL
		const bnbwrL = this.add.image(808, 1639, "village", "26");
		bnbwrL.scaleX = 0.7603601438280799;
		bnbwrL.scaleY = 0.7198101044061663;
		tqewjU.add(bnbwrL);

		// fhCuHk
		const fhCuHk = this.add.image(730, 1639, "village", "26");
		fhCuHk.scaleX = 0.8134760475775137;
		fhCuHk.scaleY = 0.7288450457049085;
		tqewjU.add(fhCuHk);

		// HACAJz
		const hACAJz = this.add.image(973, 1599, "village", "69");
		hACAJz.scaleX = 0.49492271502716845;
		hACAJz.scaleY = 0.44495973447303216;
		tqewjU.add(hACAJz);

		// DKbCaO
		const dKbCaO = this.add.image(1026, 1517, "village", "32");
		dKbCaO.scaleX = 1.2490347002198205;
		dKbCaO.scaleY = 0.6902382449834523;
		tqewjU.add(dKbCaO);

		// vhptJU
		const vhptJU = this.add.image(836, 1684, "village", "13");
		vhptJU.scaleX = 0.5348463580196658;
		vhptJU.scaleY = 0.5137216959198732;
		tqewjU.add(vhptJU);

		// iddEDQ
		const iddEDQ = this.add.image(1076, 1517, "village", "32");
		iddEDQ.scaleX = 0.7728788478966411;
		iddEDQ.scaleY = 0.6877016528196972;
		tqewjU.add(iddEDQ);

		// JdbqJC
		const jdbqJC = this.add.image(1083, 1580, "village", "5");
		jdbqJC.scaleX = 0.3;
		jdbqJC.scaleY = 0.7974303777798282;
		jdbqJC.setOrigin(0, 0.5);
		tqewjU.add(jdbqJC);

		// nCvDtb
		const nCvDtb = this.add.image(1083, 1591, "village", "5");
		nCvDtb.scaleX = 0.3;
		nCvDtb.scaleY = 0.7974303777798181;
		nCvDtb.setOrigin(0, 0.5);
		tqewjU.add(nCvDtb);

		// dtuhMd
		const dtuhMd = this.add.image(1083, 1602, "village", "5");
		dtuhMd.scaleX = 0.3;
		dtuhMd.scaleY = 0.7974303777798181;
		dtuhMd.setOrigin(0, 0.5);
		tqewjU.add(dtuhMd);

		// kHIqqx
		const kHIqqx = this.add.image(1083, 1613, "village", "5");
		kHIqqx.scaleX = 0.3;
		kHIqqx.scaleY = 0.7974303777798181;
		kHIqqx.setOrigin(0, 0.5);
		tqewjU.add(kHIqqx);

		// lBHUKi
		const lBHUKi = this.add.image(1083, 1624, "village", "5");
		lBHUKi.scaleX = 0.3;
		lBHUKi.scaleY = 0.7974303777798282;
		lBHUKi.setOrigin(0, 0.5);
		tqewjU.add(lBHUKi);

		// scvfYr
		const scvfYr = this.add.image(1083, 1636, "village", "5");
		scvfYr.scaleX = 0.3;
		scvfYr.scaleY = 0.7974303777798181;
		scvfYr.setOrigin(0, 0.5);
		tqewjU.add(scvfYr);

		// otHGag
		const otHGag = this.add.image(1083, 1647, "village", "5");
		otHGag.scaleX = 0.3;
		otHGag.scaleY = 0.7974303777798282;
		otHGag.setOrigin(0, 0.5);
		tqewjU.add(otHGag);

		// TaEwVM
		const taEwVM = this.add.image(1083, 1658, "village", "5");
		taEwVM.scaleX = 0.3;
		taEwVM.scaleY = 0.7974303777798282;
		taEwVM.setOrigin(0, 0.5);
		tqewjU.add(taEwVM);

		// hejOUy
		const hejOUy = this.add.image(1083, 1669, "village", "5");
		hejOUy.scaleX = 0.3;
		hejOUy.scaleY = 0.7974303777798181;
		hejOUy.setOrigin(0, 0.5);
		tqewjU.add(hejOUy);

		// fppfWy
		const fppfWy = this.add.image(1083, 1680, "village", "5");
		fppfWy.scaleX = 0.3;
		fppfWy.scaleY = 0.7974303777798282;
		fppfWy.setOrigin(0, 0.5);
		tqewjU.add(fppfWy);

		// vshenP
		const vshenP = this.add.image(1083, 1691, "village", "5");
		vshenP.scaleX = 0.3;
		vshenP.scaleY = 0.7974303777798282;
		vshenP.setOrigin(0, 0.5);
		tqewjU.add(vshenP);

		// IMOQdQ
		const iMOQdQ = this.add.image(755, 1652, "village", "21");
		iMOQdQ.scaleX = 0.41741044973474417;
		iMOQdQ.scaleY = 0.5056957888525416;
		tqewjU.add(iMOQdQ);

		// bSEYHi
		const bSEYHi = this.add.image(754, 1694, "village", "50");
		bSEYHi.scaleX = 0.3049122531651581;
		bSEYHi.scaleY = 0.37136562028989606;
		tqewjU.add(bSEYHi);

		// aeRijt
		const aeRijt = this.add.image(890, 1595, "village", "47");
		aeRijt.scaleX = 0.7912864545948788;
		aeRijt.scaleY = 0.663417221114047;
		aeRijt.angle = -130;
		aeRijt.flipX = true;
		tqewjU.add(aeRijt);

		// yCTKeA
		const yCTKeA = this.add.image(870, 1701, "village", "47");
		yCTKeA.scaleX = 0.5090171959981575;
		yCTKeA.scaleY = 1.0843360741366268;
		yCTKeA.setOrigin(0.5, 1);
		tqewjU.add(yCTKeA);

		// buclWK
		const buclWK = this.add.image(924, 1517, "village", "32");
		buclWK.scaleX = 0.9293221976713291;
		buclWK.scaleY = 0.8586755404598116;
		tqewjU.add(buclWK);

		// roHEgM
		const roHEgM = this.add.image(920, 1539, "village", "15");
		roHEgM.scaleX = 0.6210579411735648;
		roHEgM.scaleY = 0.6194766279619738;
		tqewjU.add(roHEgM);

		// hNEWhQ
		const hNEWhQ = this.add.image(665, 1700, "village", "47");
		hNEWhQ.scaleX = 0.6547320720268537;
		hNEWhQ.scaleY = 1.0913454200295085;
		hNEWhQ.setOrigin(0.5, 1);
		tqewjU.add(hNEWhQ);

		// aRvpyQ
		const aRvpyQ = this.add.image(927, 1577, "village", "5");
		tqewjU.add(aRvpyQ);

		// hhigcO
		const hhigcO = this.add.image(1064, 1597, "village", "47");
		hhigcO.scaleX = 0.3819034966562591;
		hhigcO.scaleY = 0.46066629721545205;
		hhigcO.angle = -45.00000000000006;
		tqewjU.add(hhigcO);

		// XQxmvs
		const xQxmvs = this.add.image(1032, 1577, "village", "5");
		xQxmvs.scaleY = 0.5;
		tqewjU.add(xQxmvs);

		// OJUzMa
		const oJUzMa = this.add.image(733, 1516, "village", "32");
		oJUzMa.scaleX = 0.7717544187323511;
		oJUzMa.scaleY = 0.7160562684236693;
		tqewjU.add(oJUzMa);

		// uoPYcu
		const uoPYcu = this.add.image(671, 1575, "village", "47");
		uoPYcu.scaleX = 0.9832863745893968;
		uoPYcu.scaleY = 1.5867898687164645;
		uoPYcu.setOrigin(0.5, 1);
		tqewjU.add(uoPYcu);

		// mtvUrC
		const mtvUrC = this.add.image(822, 1515, "village", "32");
		mtvUrC.scaleX = 0.4013203409961602;
		mtvUrC.scaleY = 0.8003378327483526;
		tqewjU.add(mtvUrC);

		// bZHoDI
		const bZHoDI = this.add.image(870, 1573, "village", "47");
		bZHoDI.scaleX = 0.9832863745893968;
		bZHoDI.scaleY = 1.5867898687164645;
		bZHoDI.setOrigin(0.5, 1);
		bZHoDI.flipX = true;
		tqewjU.add(bZHoDI);

		// QCPCft
		const qCPCft = this.add.image(1138, 1578, "village", "47");
		qCPCft.scaleX = 0.9832863745893968;
		qCPCft.scaleY = 1.5867898687164645;
		qCPCft.setOrigin(0.5, 1);
		tqewjU.add(qCPCft);

		// wDJjLv
		const wDJjLv = this.add.image(761, 1426, "village", "10");
		tqewjU.add(wDJjLv);

		// OfwKSK
		const ofwKSK = this.add.image(816, 1426, "village", "10");
		tqewjU.add(ofwKSK);

		// KZnNMD
		const kZnNMD = this.add.image(669, 1426, "village", "9");
		tqewjU.add(kZnNMD);

		// dzKgak
		const dzKgak = this.add.image(834, 1500, "village", "36");
		dzKgak.scaleX = 0.4311401513467299;
		dzKgak.scaleY = 0.4453015811183735;
		tqewjU.add(dzKgak);

		// IKVqFG
		const iKVqFG = this.add.image(707, 1500, "village", "36");
		iKVqFG.scaleX = 0.48464598203624154;
		iKVqFG.scaleY = 0.4250491111196917;
		tqewjU.add(iKVqFG);

		// oldODl
		const oldODl = this.add.image(765, 1450, "village", "4");
		tqewjU.add(oldODl);

		// mvzzdT
		const mvzzdT = this.add.image(839, 1349, "village", "40");
		mvzzdT.scaleX = 0.6906241004849927;
		mvzzdT.scaleY = 0.7628217088156259;
		tqewjU.add(mvzzdT);

		// HteBse
		const hteBse = this.add.image(765, 1465, "village", "35");
		hteBse.scaleX = 0.48937680692732854;
		hteBse.scaleY = 0.43751767340977077;
		tqewjU.add(hteBse);

		// GRNzIs
		const gRNzIs = this.add.image(1065, 1553, "village", "59");
		gRNzIs.scaleX = 0.75;
		gRNzIs.scaleY = 0.75;
		tqewjU.add(gRNzIs);

		// pZgglQ
		const pZgglQ = this.add.image(1017, 1553, "village", "59");
		pZgglQ.scaleX = 0.75;
		pZgglQ.scaleY = 0.75;
		tqewjU.add(pZgglQ);

		// juEyQn
		const juEyQn = this.add.image(970, 1553, "village", "59");
		juEyQn.scaleX = 0.75;
		juEyQn.scaleY = 0.75;
		tqewjU.add(juEyQn);

		// EdUwiF
		const edUwiF = this.add.image(924, 1553, "village", "59");
		edUwiF.scaleX = 0.75;
		edUwiF.scaleY = 0.75;
		tqewjU.add(edUwiF);

		// iTGGLZ
		const iTGGLZ = this.add.image(876, 1553, "village", "59");
		iTGGLZ.scaleX = 0.75;
		iTGGLZ.scaleY = 0.75;
		tqewjU.add(iTGGLZ);

		// YpMqck
		const ypMqck = this.add.image(928, 1426, "village", "10");
		tqewjU.add(ypMqck);

		// ejTJip
		const ejTJip = this.add.image(1041, 1426, "village", "10");
		ejTJip.scaleX = 1.2593554741273;
		tqewjU.add(ejTJip);

		// Vroizx
		const vroizx = this.add.image(689, 1552, "village", "46");
		vroizx.scaleX = 0.8117594610069562;
		vroizx.scaleY = 0.8516507936066724;
		tqewjU.add(vroizx);

		// IddaQf
		const iddaQf = this.add.image(1140, 1426, "village", "9");
		iddaQf.flipX = true;
		tqewjU.add(iddaQf);

		// sMdcdV
		const sMdcdV = this.add.image(639, 1618, "village", "62");
		sMdcdV.scaleX = 0.6116739978240475;
		sMdcdV.scaleY = 0.7259739043534884;
		tqewjU.add(sMdcdV);

		// iPfBjq
		const iPfBjq = this.add.image(1054, 1501, "village", "34");
		iPfBjq.scaleX = 0.5294284815402992;
		iPfBjq.scaleY = 0.5385312547888247;
		tqewjU.add(iPfBjq);

		// nEyzhJ
		const nEyzhJ = this.add.text(624, 1616, "", {});
		nEyzhJ.scaleX = 0.5806729699363473;
		nEyzhJ.scaleY = 0.686343592252415;
		nEyzhJ.text = "Tabern";
		nEyzhJ.setStyle({ "fontSize": "13px" });
		tqewjU.add(nEyzhJ);

		// cuDZhg
		const cuDZhg = this.add.image(1023, 1597, "village", "61");
		cuDZhg.scaleX = 0.5147725980403168;
		cuDZhg.scaleY = 0.5913181204575645;
		tqewjU.add(cuDZhg);

		// wzRjRu
		const wzRjRu = this.add.image(1095, 1349, "village", "41");
		wzRjRu.scaleX = 0.5857657744837543;
		wzRjRu.scaleY = 0.658267335292285;
		tqewjU.add(wzRjRu);

		// eMZpvV
		const eMZpvV = this.add.image(663, 1583, "village", "52");
		eMZpvV.scaleX = 0.8239034322402807;
		eMZpvV.scaleY = 0.8191533999217628;
		tqewjU.add(eMZpvV);

		// snRZSB
		const snRZSB = this.add.image(870, 1576, "village", "52");
		tqewjU.add(snRZSB);

		// CKBXGv
		const cKBXGv = this.add.image(830, 1551, "village", "46");
		cKBXGv.scaleX = 0.7328422598783817;
		cKBXGv.scaleY = 0.8829330634797368;
		cKBXGv.flipX = true;
		tqewjU.add(cKBXGv);

		// VkPDJz
		const vkPDJz = this.add.image(767, 1586, "village", "5");
		vkPDJz.scaleX = 1.1739006890654184;
		vkPDJz.scaleY = -0.4206707704220114;
		tqewjU.add(vkPDJz);

		// qeadMC
		const qeadMC = this.add.image(766, 1517, "village", "53");
		qeadMC.angle = 45;
		tqewjU.add(qeadMC);

		// mQdsqr
		const mQdsqr = this.add.image(766, 1546, "village", "23");
		mQdsqr.scaleX = 0.6337901504862209;
		mQdsqr.scaleY = 0.6567476538507682;
		tqewjU.add(mQdsqr);

		// xgRuJP
		const xgRuJP = this.add.rectangle(1005, 1573, 128, 128);
		xgRuJP.scaleX = 2.0378046044601033;
		xgRuJP.scaleY = 0.06120838851065436;
		tqewjU.add(xgRuJP);

		// uocyLf
		const uocyLf = this.add.rectangle(1138, 1523, 128, 128);
		uocyLf.scaleX = 0.04880316614197011;
		uocyLf.scaleY = 0.8048362793949658;
		tqewjU.add(uocyLf);

		// Mjnwuj
		const mjnwuj = this.add.rectangle(876, 1529, 128, 128);
		mjnwuj.scaleX = 0.04880316614197011;
		mjnwuj.scaleY = 0.8048362793949658;
		tqewjU.add(mjnwuj);

		// yjWUka
		const yjWUka = this.add.rectangle(1110, 1635, 128, 128);
		yjWUka.scaleX = 0.4182170652546042;
		yjWUka.scaleY = 1.0059211112030582;
		tqewjU.add(yjWUka);

		// egtoMK
		const egtoMK = this.add.image(1079, 1700, "village", "47");
		egtoMK.scaleX = -0.7101683098224691;
		egtoMK.scaleY = 1.1780424784473118;
		egtoMK.setOrigin(0.5, 1);
		tqewjU.add(egtoMK);

		// dXYfhh
		const dXYfhh = this.add.image(1141, 1699, "village", "47");
		dXYfhh.scaleX = -0.7101683098224691;
		dXYfhh.scaleY = 1.1780424784473118;
		dXYfhh.setOrigin(0.5, 1);
		tqewjU.add(dXYfhh);

		// nBBoYZ
		const nBBoYZ = this.add.image(826, 1632, "village", "34");
		nBBoYZ.scaleX = 0.48380610685610503;
		nBBoYZ.scaleY = 0.5627643215010802;
		tqewjU.add(nBBoYZ);

		// tzzgTq
		const tzzgTq = this.add.layer();

		// MLmhnI
		const mLmhnI = this.add.image(1797, 854, "village", "9");
		tzzgTq.add(mLmhnI);

		// QUdMvV
		const qUdMvV = this.add.image(1824, 1244, "village", "26");
		qUdMvV.scaleX = 0.7118763441527373;
		qUdMvV.scaleY = 0.8551627529235629;
		tzzgTq.add(qUdMvV);

		// qDdweF
		const qDdweF = this.add.image(1823, 1108, "village", "26");
		qDdweF.scaleX = 0.7118763441527373;
		qDdweF.scaleY = 0.8551627529235629;
		tzzgTq.add(qDdweF);

		// cKQWXn
		const cKQWXn = this.add.image(1824, 1179, "village", "2");
		cKQWXn.scaleX = 0.8664225242661129;
		cKQWXn.scaleY = 0.7316163909380448;
		tzzgTq.add(cKQWXn);

		// dwdwwy
		const dwdwwy = this.add.image(1823, 972, "village", "26");
		dwdwwy.scaleX = 0.7118763441527373;
		dwdwwy.scaleY = 0.8551627529235629;
		tzzgTq.add(dwdwwy);

		// ERyjbS
		const eRyjbS = this.add.image(1823, 1042, "village", "2");
		eRyjbS.scaleX = 0.8664225242661129;
		eRyjbS.scaleY = 0.7316163909380448;
		tzzgTq.add(eRyjbS);

		// opCPCS
		const opCPCS = this.add.image(1782, 880, "village", "58");
		opCPCS.scaleX = 0.8;
		opCPCS.scaleY = 0.8;
		tzzgTq.add(opCPCS);

		// FKNycw
		const fKNycw = this.add.image(1850, 853, "village", "9");
		fKNycw.flipX = true;
		tzzgTq.add(fKNycw);

		// CEzNuq
		const cEzNuq = this.add.image(1830, 883, "village", "59");
		cEzNuq.scaleX = 0.8;
		cEzNuq.scaleY = 0.8;
		tzzgTq.add(cEzNuq);

		// BRVuGa
		const bRVuGa = this.add.image(1863, 880, "village", "58");
		bRVuGa.scaleX = 0.8;
		bRVuGa.scaleY = 0.8;
		bRVuGa.flipX = true;
		tzzgTq.add(bRVuGa);

		// BgEoai
		const bgEoai = this.add.image(1791, 777, "village", "46");
		bgEoai.scaleX = 0.35;
		bgEoai.scaleY = 0.6165274010105828;
		tzzgTq.add(bgEoai);

		// lfVEsh
		const lfVEsh = this.add.image(1855, 777, "village", "46");
		lfVEsh.scaleX = 0.35;
		lfVEsh.scaleY = 0.6165274010105828;
		lfVEsh.flipX = true;
		tzzgTq.add(lfVEsh);

		// RNqyEn
		const rNqyEn = this.add.image(1823, 1091, "village", "37");
		rNqyEn.scaleX = 0.5286167511234134;
		rNqyEn.scaleY = 0.6405581103259028;
		tzzgTq.add(rNqyEn);

		// KFMpJI
		const kFMpJI = this.add.image(1825, 960, "village", "37");
		kFMpJI.scaleX = 0.5286167511234134;
		kFMpJI.scaleY = 0.6405581103259028;
		tzzgTq.add(kFMpJI);

		// VccEjO
		const vccEjO = this.add.image(1823, 1305, "village", "50");
		vccEjO.scaleX = 0.5813575958968366;
		vccEjO.scaleY = 0.6925375255623029;
		tzzgTq.add(vccEjO);

		// nLTTWx
		const nLTTWx = this.add.layer();

		// KtVemn
		const ktVemn = this.add.image(1559, 1689, "village", "5");
		ktVemn.scaleX = 0.3;
		ktVemn.scaleY = 0.7974303777798282;
		ktVemn.setOrigin(0, 0.5);
		nLTTWx.add(ktVemn);

		// BXPcME
		const bXPcME = this.add.image(1559, 1678, "village", "5");
		bXPcME.scaleX = 0.3;
		bXPcME.scaleY = 0.7974303777798282;
		bXPcME.setOrigin(0, 0.5);
		nLTTWx.add(bXPcME);

		// qidhSG
		const qidhSG = this.add.image(1559, 1667, "village", "5");
		qidhSG.scaleX = 0.3;
		qidhSG.scaleY = 0.7974303777798181;
		qidhSG.setOrigin(0, 0.5);
		nLTTWx.add(qidhSG);

		// CwqbPP
		const cwqbPP = this.add.image(1559, 1656, "village", "5");
		cwqbPP.scaleX = 0.3;
		cwqbPP.scaleY = 0.7974303777798282;
		cwqbPP.setOrigin(0, 0.5);
		nLTTWx.add(cwqbPP);

		// WwjGfM
		const wwjGfM = this.add.image(1559, 1645, "village", "5");
		wwjGfM.scaleX = 0.3;
		wwjGfM.scaleY = 0.7974303777798282;
		wwjGfM.setOrigin(0, 0.5);
		nLTTWx.add(wwjGfM);

		// KbGHmx
		const kbGHmx = this.add.image(1559, 1634, "village", "5");
		kbGHmx.scaleX = 0.3;
		kbGHmx.scaleY = 0.7974303777798181;
		kbGHmx.setOrigin(0, 0.5);
		nLTTWx.add(kbGHmx);

		// lmpSFm
		const lmpSFm = this.add.image(1559, 1623, "village", "5");
		lmpSFm.scaleX = 0.3;
		lmpSFm.scaleY = 0.7974303777798282;
		lmpSFm.setOrigin(0, 0.5);
		nLTTWx.add(lmpSFm);

		// mvJaPO
		const mvJaPO = this.add.image(1559, 1611, "village", "5");
		mvJaPO.scaleX = 0.3;
		mvJaPO.scaleY = 0.7974303777798181;
		mvJaPO.setOrigin(0, 0.5);
		nLTTWx.add(mvJaPO);

		// UQjMoY
		const uQjMoY = this.add.image(1559, 1600, "village", "5");
		uQjMoY.scaleX = 0.3;
		uQjMoY.scaleY = 0.7974303777798181;
		uQjMoY.setOrigin(0, 0.5);
		nLTTWx.add(uQjMoY);

		// MmFVeR
		const mmFVeR = this.add.image(1559, 1589, "village", "5");
		mmFVeR.scaleX = 0.3;
		mmFVeR.scaleY = 0.7974303777798181;
		mmFVeR.setOrigin(0, 0.5);
		nLTTWx.add(mmFVeR);

		// jwEjth
		const jwEjth = this.add.image(1559, 1578, "village", "5");
		jwEjth.scaleX = 0.3;
		jwEjth.scaleY = 0.7974303777798282;
		jwEjth.setOrigin(0, 0.5);
		nLTTWx.add(jwEjth);

		// yxMPBP
		const yxMPBP = this.add.image(1560, 1565, "village", "5");
		yxMPBP.scaleX = 0.3;
		yxMPBP.scaleY = 0.7974303777798282;
		yxMPBP.setOrigin(0, 0.5);
		nLTTWx.add(yxMPBP);

		// CeSaNu
		const ceSaNu = this.add.image(1560, 1554, "village", "5");
		ceSaNu.scaleX = 0.3;
		ceSaNu.scaleY = 0.7974303777798282;
		ceSaNu.setOrigin(0, 0.5);
		nLTTWx.add(ceSaNu);

		// sWxXys
		const sWxXys = this.add.image(1560, 1543, "village", "5");
		sWxXys.scaleX = 0.3;
		sWxXys.scaleY = 0.7974303777798181;
		sWxXys.setOrigin(0, 0.5);
		nLTTWx.add(sWxXys);

		// jvomqV
		const jvomqV = this.add.image(1560, 1532, "village", "5");
		jvomqV.scaleX = 0.3;
		jvomqV.scaleY = 0.7974303777798282;
		jvomqV.setOrigin(0, 0.5);
		nLTTWx.add(jvomqV);

		// ycqaoL
		const ycqaoL = this.add.image(1560, 1521, "village", "5");
		ycqaoL.scaleX = 0.3;
		ycqaoL.scaleY = 0.7974303777798282;
		ycqaoL.setOrigin(0, 0.5);
		nLTTWx.add(ycqaoL);

		// rEgDSO
		const rEgDSO = this.add.image(1560, 1510, "village", "5");
		rEgDSO.scaleX = 0.3;
		rEgDSO.scaleY = 0.7974303777798181;
		rEgDSO.setOrigin(0, 0.5);
		nLTTWx.add(rEgDSO);

		// MSJETd
		const mSJETd = this.add.image(1560, 1499, "village", "5");
		mSJETd.scaleX = 0.3;
		mSJETd.scaleY = 0.7974303777798282;
		mSJETd.setOrigin(0, 0.5);
		nLTTWx.add(mSJETd);

		// tRfYXI
		const tRfYXI = this.add.image(1560, 1487, "village", "5");
		tRfYXI.scaleX = 0.3;
		tRfYXI.scaleY = 0.7974303777798181;
		tRfYXI.setOrigin(0, 0.5);
		nLTTWx.add(tRfYXI);

		// GiwXos
		const giwXos = this.add.image(1556, 1585, "village", "47");
		giwXos.scaleX = -0.7101683098224691;
		giwXos.scaleY = 1.1780424784473118;
		giwXos.setOrigin(0.5, 1);
		nLTTWx.add(giwXos);

		// FmpTUw
		const fmpTUw = this.add.image(1555, 1698, "village", "47");
		fmpTUw.scaleX = -0.7101683098224691;
		fmpTUw.scaleY = 1.1780424784473118;
		fmpTUw.setOrigin(0.5, 1);
		nLTTWx.add(fmpTUw);

		// YqCnUh
		const yqCnUh = this.add.image(1619.8086625803492, 1583.9419973193965, "village", "47");
		yqCnUh.scaleX = -0.7101683098224691;
		yqCnUh.scaleY = 1.1780424784473118;
		yqCnUh.setOrigin(0.5, 1);
		nLTTWx.add(yqCnUh);

		// gXYeNn
		const gXYeNn = this.add.image(1618.8086625803492, 1696.9419973193965, "village", "47");
		gXYeNn.scaleX = -0.7101683098224691;
		gXYeNn.scaleY = 1.1780424784473118;
		gXYeNn.setOrigin(0.5, 1);
		nLTTWx.add(gXYeNn);

		// rVIwYU
		const rVIwYU = this.add.rectangle(1587, 1503, 128, 128);
		rVIwYU.scaleX = 0.5445731383988645;
		rVIwYU.scaleY = 3.0235327647274635;
		nLTTWx.add(rVIwYU);

		// VDUjYE
		const vDUjYE = this.add.image(1558, 1479, "village", "47");
		vDUjYE.scaleX = -0.7101683098224691;
		vDUjYE.scaleY = 1.1780424784473118;
		vDUjYE.setOrigin(0.5, 1);
		nLTTWx.add(vDUjYE);

		// CZwpKG
		const cZwpKG = this.add.image(1622, 1478, "village", "47");
		cZwpKG.scaleX = -0.7101683098224691;
		cZwpKG.scaleY = 1.1780424784473118;
		cZwpKG.setOrigin(0.5, 1);
		nLTTWx.add(cZwpKG);

		// WcqXaN
		const wcqXaN = this.add.image(1562, 1381, "village", "5");
		wcqXaN.scaleX = 0.3;
		wcqXaN.scaleY = 0.7974303777798181;
		wcqXaN.setOrigin(0, 0.5);
		nLTTWx.add(wcqXaN);

		// scSMQl
		const scSMQl = this.add.image(1562, 1393, "village", "5");
		scSMQl.scaleX = 0.3;
		scSMQl.scaleY = 0.7974303777798282;
		scSMQl.setOrigin(0, 0.5);
		nLTTWx.add(scSMQl);

		// NbWtxy
		const nbWtxy = this.add.image(1562, 1404, "village", "5");
		nbWtxy.scaleX = 0.3;
		nbWtxy.scaleY = 0.7974303777798181;
		nbWtxy.setOrigin(0, 0.5);
		nLTTWx.add(nbWtxy);

		// ZuAXKy
		const zuAXKy = this.add.image(1562, 1415, "village", "5");
		zuAXKy.scaleX = 0.3;
		zuAXKy.scaleY = 0.7974303777798282;
		zuAXKy.setOrigin(0, 0.5);
		nLTTWx.add(zuAXKy);

		// cUXPMo
		const cUXPMo = this.add.image(1562, 1426, "village", "5");
		cUXPMo.scaleX = 0.3;
		cUXPMo.scaleY = 0.7974303777798282;
		cUXPMo.setOrigin(0, 0.5);
		nLTTWx.add(cUXPMo);

		// DUubUk
		const dUubUk = this.add.image(1562, 1437, "village", "5");
		dUubUk.scaleX = 0.3;
		dUubUk.scaleY = 0.7974303777798181;
		dUubUk.setOrigin(0, 0.5);
		nLTTWx.add(dUubUk);

		// ZifUyj
		const zifUyj = this.add.image(1562, 1448, "village", "5");
		zifUyj.scaleX = 0.3;
		zifUyj.scaleY = 0.7974303777798282;
		zifUyj.setOrigin(0, 0.5);
		nLTTWx.add(zifUyj);

		// SomrTG
		const somrTG = this.add.image(1562, 1459, "village", "5");
		somrTG.scaleX = 0.3;
		somrTG.scaleY = 0.7974303777798282;
		somrTG.setOrigin(0, 0.5);
		nLTTWx.add(somrTG);

		// hrZulJ
		const hrZulJ = this.add.image(1561, 1472, "village", "5");
		hrZulJ.scaleX = 0.3;
		hrZulJ.scaleY = 0.7974303777798282;
		hrZulJ.setOrigin(0, 0.5);
		nLTTWx.add(hrZulJ);

		// uDISqh
		const uDISqh = this.add.image(1559, 1373, "village", "47");
		uDISqh.scaleX = -0.7139053451278526;
		uDISqh.scaleY = 0.774186371502988;
		uDISqh.setOrigin(0.5, 1);
		nLTTWx.add(uDISqh);

		// CVBmwx
		const cVBmwx = this.add.image(1622, 1372, "village", "47");
		cVBmwx.scaleX = -0.619457458008396;
		cVBmwx.scaleY = 0.7773715914699639;
		cVBmwx.setOrigin(0.5, 1);
		nLTTWx.add(cVBmwx);

		// MQoUWl
		const mQoUWl = this.add.image(1563, 1320, "village", "5");
		mQoUWl.scaleX = 0.3;
		mQoUWl.scaleY = 0.7974303777798282;
		mQoUWl.setOrigin(0, 0.5);
		nLTTWx.add(mQoUWl);

		// fUfPur
		const fUfPur = this.add.image(1563, 1331, "village", "5");
		fUfPur.scaleX = 0.3;
		fUfPur.scaleY = 0.7974303777798181;
		fUfPur.setOrigin(0, 0.5);
		nLTTWx.add(fUfPur);

		// eSNZMF
		const eSNZMF = this.add.image(1563, 1342, "village", "5");
		eSNZMF.scaleX = 0.3;
		eSNZMF.scaleY = 0.7974303777798282;
		eSNZMF.setOrigin(0, 0.5);
		nLTTWx.add(eSNZMF);

		// kDScpr
		const kDScpr = this.add.image(1563, 1353, "village", "5");
		kDScpr.scaleX = 0.3;
		kDScpr.scaleY = 0.7974303777798282;
		kDScpr.setOrigin(0, 0.5);
		nLTTWx.add(kDScpr);

		// TBhyzC
		const tBhyzC = this.add.image(1562, 1366, "village", "5");
		tBhyzC.scaleX = 0.3;
		tBhyzC.scaleY = 0.7974303777798282;
		tBhyzC.setOrigin(0, 0.5);
		nLTTWx.add(tBhyzC);

		// gBobPb
		const gBobPb = this.add.layer();

		// RZqmRv
		const rZqmRv = this.add.image(1501, 1636, "village", "27");
		rZqmRv.scaleX = 0.9655380450841;
		rZqmRv.scaleY = 0.7442999438329971;
		gBobPb.add(rZqmRv);

		// VkCMbm
		const vkCMbm = this.add.image(1418, 1636, "village", "26");
		vkCMbm.scaleX = 0.7930543644653019;
		vkCMbm.scaleY = 0.7557461198632563;
		gBobPb.add(vkCMbm);

		// PExcEl
		const pExcEl = this.add.image(1308, 1636, "village", "26");
		pExcEl.scaleX = 0.7240953091887501;
		pExcEl.scaleY = 0.7598126529158429;
		gBobPb.add(pExcEl);

		// JNKhai
		const jNKhai = this.add.image(1515, 1699, "village", "47");
		jNKhai.scaleX = 0.7701003535392317;
		jNKhai.scaleY = 1.1998572720050202;
		jNKhai.setOrigin(0.5, 1);
		gBobPb.add(jNKhai);

		// fIOAQT
		const fIOAQT = this.add.image(1483, 1685, "village", "13");
		fIOAQT.scaleX = 0.5348463580196658;
		fIOAQT.scaleY = 0.5137216959198732;
		gBobPb.add(fIOAQT);

		// JAwhbk
		const jAwhbk = this.add.image(1240, 1698, "village", "47");
		jAwhbk.scaleX = 0.7914539500846772;
		jAwhbk.scaleY = 1.223661139336774;
		jAwhbk.setOrigin(0.5, 1);
		gBobPb.add(jAwhbk);

		// mkmaJU
		const mkmaJU = this.add.image(1364, 1657, "village", "21");
		mkmaJU.scaleX = 0.3594959292043153;
		mkmaJU.scaleY = 0.46578508238192273;
		gBobPb.add(mkmaJU);

		// gAyVly
		const gAyVly = this.add.image(1364, 1693, "village", "50");
		gAyVly.scaleX = 0.35027489539451107;
		gAyVly.scaleY = 0.4500256982397846;
		gBobPb.add(gAyVly);

		// tRJXGy
		const tRJXGy = this.add.image(1282, 1592, "village", "64");
		gBobPb.add(tRJXGy);

		// cgJBqm
		const cgJBqm = this.add.image(1353, 1592, "village", "64");
		gBobPb.add(cgJBqm);

		// dHoekX
		const dHoekX = this.add.image(1425, 1592, "village", "64");
		gBobPb.add(dHoekX);

		// NfRYDC
		const nfRYDC = this.add.image(1472, 1592, "village", "64");
		gBobPb.add(nfRYDC);

		// NkCROh
		const nkCROh = this.add.image(1327, 1510, "village", "29");
		nkCROh.scaleX = 0.8036883750668462;
		nkCROh.scaleY = 0.7498833054280883;
		gBobPb.add(nkCROh);

		// jNBhjt
		const jNBhjt = this.add.image(1247, 1510, "village", "28");
		jNBhjt.scaleX = 0.66;
		jNBhjt.scaleY = 0.77;
		gBobPb.add(jNBhjt);

		// ewtXnX
		const ewtXnX = this.add.image(1507, 1510, "village", "30");
		ewtXnX.scaleX = 0.66;
		ewtXnX.scaleY = 0.77;
		gBobPb.add(ewtXnX);

		// yhVAIF
		const yhVAIF = this.add.image(1436, 1510, "village", "29");
		yhVAIF.scaleX = 0.7344740327128183;
		yhVAIF.scaleY = 0.7498833054280883;
		gBobPb.add(yhVAIF);

		// TtvUyY
		const ttvUyY = this.add.image(1310, 1567, "village", "5");
		gBobPb.add(ttvUyY);

		// iKoliB
		const iKoliB = this.add.image(1444, 1567, "village", "5");
		gBobPb.add(iKoliB);

		// CbuvuP
		const cbuvuP = this.add.image(1470, 1586, "village", "67");
		gBobPb.add(cbuvuP);

		// fPzxCX
		const fPzxCX = this.add.image(1298, 1645, "village", "37");
		fPzxCX.scaleX = 0.509515194763901;
		fPzxCX.scaleY = 0.5158636450948091;
		gBobPb.add(fPzxCX);

		// eoghbk
		const eoghbk = this.add.image(1440, 1644, "village", "37");
		eoghbk.scaleX = 0.509515194763901;
		eoghbk.scaleY = 0.5158636450948091;
		gBobPb.add(eoghbk);

		// jhgKHx
		const jhgKHx = this.add.image(1271, 1443, "village", "65");
		gBobPb.add(jhgKHx);

		// CUPZwR
		const cUPZwR = this.add.image(1341, 1443, "village", "65");
		gBobPb.add(cUPZwR);

		// yQIRuI
		const yQIRuI = this.add.image(1482.004150390625, 1443.2008056640625, "village", "65");
		gBobPb.add(yQIRuI);

		// WDpgOb
		const wDpgOb = this.add.image(1411, 1443, "village", "65");
		gBobPb.add(wDpgOb);

		// hCFyjB
		const hCFyjB = this.add.image(1294, 1484, "village", "34");
		hCFyjB.scaleX = 0.4640245405465907;
		hCFyjB.scaleY = 0.4863804071845631;
		gBobPb.add(hCFyjB);

		// kunKjV
		const kunKjV = this.add.image(1442, 1484, "village", "34");
		kunKjV.scaleX = 0.4640245405465907;
		kunKjV.scaleY = 0.4863804071845631;
		gBobPb.add(kunKjV);

		// ECLBTm
		const eCLBTm = this.add.image(1275, 1585, "village", "67");
		gBobPb.add(eCLBTm);

		// lIxCXd
		const lIxCXd = this.add.layer();

		// GSLtEn
		const gSLtEn = this.add.image(52, 1636, "village", "54");
		gSLtEn.scaleX = 0.9683701078838477;
		gSLtEn.scaleY = 1.4012276166017719;
		lIxCXd.add(gSLtEn);

		// dffbSc
		const dffbSc = this.add.image(65, 1606, "village", "56");
		lIxCXd.add(dffbSc);

		// eQFHjI
		const eQFHjI = this.add.layer();

		// wrEsug
		const wrEsug = this.add.image(159, 1689, "village", "5");
		wrEsug.scaleX = 0.3;
		wrEsug.scaleY = 0.7974303777798282;
		wrEsug.setOrigin(0, 0.5);
		eQFHjI.add(wrEsug);

		// FamcAm
		const famcAm = this.add.image(159, 1678, "village", "5");
		famcAm.scaleX = 0.3;
		famcAm.scaleY = 0.7974303777798282;
		famcAm.setOrigin(0, 0.5);
		eQFHjI.add(famcAm);

		// jIewuP
		const jIewuP = this.add.image(159, 1667, "village", "5");
		jIewuP.scaleX = 0.3;
		jIewuP.scaleY = 0.7974303777798181;
		jIewuP.setOrigin(0, 0.5);
		eQFHjI.add(jIewuP);

		// QaTDhZ
		const qaTDhZ = this.add.image(159, 1656, "village", "5");
		qaTDhZ.scaleX = 0.3;
		qaTDhZ.scaleY = 0.7974303777798282;
		qaTDhZ.setOrigin(0, 0.5);
		eQFHjI.add(qaTDhZ);

		// EMPbjS
		const eMPbjS = this.add.image(159, 1645, "village", "5");
		eMPbjS.scaleX = 0.3;
		eMPbjS.scaleY = 0.7974303777798282;
		eMPbjS.setOrigin(0, 0.5);
		eQFHjI.add(eMPbjS);

		// dezVWO
		const dezVWO = this.add.image(159, 1634, "village", "5");
		dezVWO.scaleX = 0.3;
		dezVWO.scaleY = 0.7974303777798181;
		dezVWO.setOrigin(0, 0.5);
		eQFHjI.add(dezVWO);

		// eyPQXq
		const eyPQXq = this.add.image(159, 1623, "village", "5");
		eyPQXq.scaleX = 0.3;
		eyPQXq.scaleY = 0.7974303777798282;
		eyPQXq.setOrigin(0, 0.5);
		eQFHjI.add(eyPQXq);

		// eOgUTO
		const eOgUTO = this.add.image(159, 1611, "village", "5");
		eOgUTO.scaleX = 0.3;
		eOgUTO.scaleY = 0.7974303777798181;
		eOgUTO.setOrigin(0, 0.5);
		eQFHjI.add(eOgUTO);

		// TrQpvV
		const trQpvV = this.add.image(159, 1600, "village", "5");
		trQpvV.scaleX = 0.3;
		trQpvV.scaleY = 0.7974303777798181;
		trQpvV.setOrigin(0, 0.5);
		eQFHjI.add(trQpvV);

		// sIlcOn
		const sIlcOn = this.add.image(159, 1589, "village", "5");
		sIlcOn.scaleX = 0.3;
		sIlcOn.scaleY = 0.7974303777798181;
		sIlcOn.setOrigin(0, 0.5);
		eQFHjI.add(sIlcOn);

		// aOsQrL
		const aOsQrL = this.add.image(159, 1578, "village", "5");
		aOsQrL.scaleX = 0.3;
		aOsQrL.scaleY = 0.7974303777798282;
		aOsQrL.setOrigin(0, 0.5);
		eQFHjI.add(aOsQrL);

		// jksjLh
		const jksjLh = this.add.image(160, 1565, "village", "5");
		jksjLh.scaleX = 0.3;
		jksjLh.scaleY = 0.7974303777798282;
		jksjLh.setOrigin(0, 0.5);
		eQFHjI.add(jksjLh);

		// JkrSlk
		const jkrSlk = this.add.image(160, 1554, "village", "5");
		jkrSlk.scaleX = 0.3;
		jkrSlk.scaleY = 0.7974303777798282;
		jkrSlk.setOrigin(0, 0.5);
		eQFHjI.add(jkrSlk);

		// Vuwzzo
		const vuwzzo = this.add.image(160, 1543, "village", "5");
		vuwzzo.scaleX = 0.3;
		vuwzzo.scaleY = 0.7974303777798181;
		vuwzzo.setOrigin(0, 0.5);
		eQFHjI.add(vuwzzo);

		// qTexRD
		const qTexRD = this.add.image(160, 1532, "village", "5");
		qTexRD.scaleX = 0.3;
		qTexRD.scaleY = 0.7974303777798282;
		qTexRD.setOrigin(0, 0.5);
		eQFHjI.add(qTexRD);

		// xkZgKg
		const xkZgKg = this.add.image(160, 1521, "village", "5");
		xkZgKg.scaleX = 0.3;
		xkZgKg.scaleY = 0.7974303777798282;
		xkZgKg.setOrigin(0, 0.5);
		eQFHjI.add(xkZgKg);

		// VKJomx
		const vKJomx = this.add.image(160, 1510, "village", "5");
		vKJomx.scaleX = 0.3;
		vKJomx.scaleY = 0.7974303777798181;
		vKJomx.setOrigin(0, 0.5);
		eQFHjI.add(vKJomx);

		// wDpDJk
		const wDpDJk = this.add.image(160, 1499, "village", "5");
		wDpDJk.scaleX = 0.3;
		wDpDJk.scaleY = 0.7974303777798282;
		wDpDJk.setOrigin(0, 0.5);
		eQFHjI.add(wDpDJk);

		// IUYxTT
		const iUYxTT = this.add.image(160, 1487, "village", "5");
		iUYxTT.scaleX = 0.3;
		iUYxTT.scaleY = 0.7974303777798181;
		iUYxTT.setOrigin(0, 0.5);
		eQFHjI.add(iUYxTT);

		// rpdEER
		const rpdEER = this.add.image(156, 1585, "village", "47");
		rpdEER.scaleX = -0.7101683098224691;
		rpdEER.scaleY = 1.1780424784473118;
		rpdEER.setOrigin(0.5, 1);
		eQFHjI.add(rpdEER);

		// yRSFmJ
		const yRSFmJ = this.add.image(155, 1698, "village", "47");
		yRSFmJ.scaleX = -0.7101683098224691;
		yRSFmJ.scaleY = 1.1780424784473118;
		yRSFmJ.setOrigin(0.5, 1);
		eQFHjI.add(yRSFmJ);

		// sEocUY
		const sEocUY = this.add.image(220, 1584, "village", "47");
		sEocUY.scaleX = -0.7101683098224691;
		sEocUY.scaleY = 1.1780424784473118;
		sEocUY.setOrigin(0.5, 1);
		eQFHjI.add(sEocUY);

		// ohnMdi
		const ohnMdi = this.add.image(219, 1697, "village", "47");
		ohnMdi.scaleX = -0.7101683098224691;
		ohnMdi.scaleY = 1.1780424784473118;
		ohnMdi.setOrigin(0.5, 1);
		eQFHjI.add(ohnMdi);

		// iDHwnM
		const iDHwnM = this.add.rectangle(187, 1503, 128, 128);
		iDHwnM.scaleX = 0.5445731383988645;
		iDHwnM.scaleY = 3.0235327647274635;
		eQFHjI.add(iDHwnM);

		// SqJAYA
		const sqJAYA = this.add.image(158, 1479, "village", "47");
		sqJAYA.scaleX = -0.7101683098224691;
		sqJAYA.scaleY = 1.1780424784473118;
		sqJAYA.setOrigin(0.5, 1);
		eQFHjI.add(sqJAYA);

		// gSarUz
		const gSarUz = this.add.image(222, 1478, "village", "47");
		gSarUz.scaleX = -0.7101683098224691;
		gSarUz.scaleY = 1.1780424784473118;
		gSarUz.setOrigin(0.5, 1);
		eQFHjI.add(gSarUz);

		// QmYhPY
		const qmYhPY = this.add.image(162, 1381, "village", "5");
		qmYhPY.scaleX = 0.3;
		qmYhPY.scaleY = 0.7974303777798181;
		qmYhPY.setOrigin(0, 0.5);
		eQFHjI.add(qmYhPY);

		// ZXsCfR
		const zXsCfR = this.add.image(162, 1393, "village", "5");
		zXsCfR.scaleX = 0.3;
		zXsCfR.scaleY = 0.7974303777798282;
		zXsCfR.setOrigin(0, 0.5);
		eQFHjI.add(zXsCfR);

		// dgQgUB
		const dgQgUB = this.add.image(162, 1404, "village", "5");
		dgQgUB.scaleX = 0.3;
		dgQgUB.scaleY = 0.7974303777798181;
		dgQgUB.setOrigin(0, 0.5);
		eQFHjI.add(dgQgUB);

		// LBfBkn
		const lBfBkn = this.add.image(162, 1415, "village", "5");
		lBfBkn.scaleX = 0.3;
		lBfBkn.scaleY = 0.7974303777798282;
		lBfBkn.setOrigin(0, 0.5);
		eQFHjI.add(lBfBkn);

		// EPktMm
		const ePktMm = this.add.image(162, 1426, "village", "5");
		ePktMm.scaleX = 0.3;
		ePktMm.scaleY = 0.7974303777798282;
		ePktMm.setOrigin(0, 0.5);
		eQFHjI.add(ePktMm);

		// EdsmLJ
		const edsmLJ = this.add.image(162, 1437, "village", "5");
		edsmLJ.scaleX = 0.3;
		edsmLJ.scaleY = 0.7974303777798181;
		edsmLJ.setOrigin(0, 0.5);
		eQFHjI.add(edsmLJ);

		// KIYNAY
		const kIYNAY = this.add.image(162, 1448, "village", "5");
		kIYNAY.scaleX = 0.3;
		kIYNAY.scaleY = 0.7974303777798282;
		kIYNAY.setOrigin(0, 0.5);
		eQFHjI.add(kIYNAY);

		// auXgGN
		const auXgGN = this.add.image(162, 1459, "village", "5");
		auXgGN.scaleX = 0.3;
		auXgGN.scaleY = 0.7974303777798282;
		auXgGN.setOrigin(0, 0.5);
		eQFHjI.add(auXgGN);

		// lFBnHS
		const lFBnHS = this.add.image(161, 1472, "village", "5");
		lFBnHS.scaleX = 0.3;
		lFBnHS.scaleY = 0.7974303777798282;
		lFBnHS.setOrigin(0, 0.5);
		eQFHjI.add(lFBnHS);

		// ywuWVd
		const ywuWVd = this.add.image(159, 1373, "village", "47");
		ywuWVd.scaleX = -0.7139053451278526;
		ywuWVd.scaleY = 0.774186371502988;
		ywuWVd.setOrigin(0.5, 1);
		eQFHjI.add(ywuWVd);

		// SWQWNF
		const sWQWNF = this.add.image(222, 1372, "village", "47");
		sWQWNF.scaleX = -0.619457458008396;
		sWQWNF.scaleY = 0.7773715914699639;
		sWQWNF.setOrigin(0.5, 1);
		eQFHjI.add(sWQWNF);

		// xujjWJ
		const xujjWJ = this.add.image(163, 1320, "village", "5");
		xujjWJ.scaleX = 0.3;
		xujjWJ.scaleY = 0.7974303777798282;
		xujjWJ.setOrigin(0, 0.5);
		eQFHjI.add(xujjWJ);

		// xqnitk
		const xqnitk = this.add.image(163, 1331, "village", "5");
		xqnitk.scaleX = 0.3;
		xqnitk.scaleY = 0.7974303777798181;
		xqnitk.setOrigin(0, 0.5);
		eQFHjI.add(xqnitk);

		// OJnGAs
		const oJnGAs = this.add.image(163, 1342, "village", "5");
		oJnGAs.scaleX = 0.3;
		oJnGAs.scaleY = 0.7974303777798282;
		oJnGAs.setOrigin(0, 0.5);
		eQFHjI.add(oJnGAs);

		// SFeGCD
		const sFeGCD = this.add.image(163, 1353, "village", "5");
		sFeGCD.scaleX = 0.3;
		sFeGCD.scaleY = 0.7974303777798282;
		sFeGCD.setOrigin(0, 0.5);
		eQFHjI.add(sFeGCD);

		// uERQeI
		const uERQeI = this.add.image(162, 1366, "village", "5");
		uERQeI.scaleX = 0.3;
		uERQeI.scaleY = 0.7974303777798282;
		uERQeI.setOrigin(0, 0.5);
		eQFHjI.add(uERQeI);

		// ieKaOw (components)
		new Ladder(ieKaOw);

		// hzCAYA (components)
		new SceneExporter(hzCAYA);

		// gRNzIs (components)
		const gRNzIsDepth = new Depth(gRNzIs);
		gRNzIsDepth.depth = 2;

		// pZgglQ (components)
		const pZgglQDepth = new Depth(pZgglQ);
		pZgglQDepth.depth = 2;

		// juEyQn (components)
		const juEyQnDepth = new Depth(juEyQn);
		juEyQnDepth.depth = 2;

		// edUwiF (components)
		const edUwiFDepth = new Depth(edUwiF);
		edUwiFDepth.depth = 2;

		// iTGGLZ (components)
		const iTGGLZDepth = new Depth(iTGGLZ);
		iTGGLZDepth.depth = 2;

		// xgRuJP (components)
		const xgRuJPCollider = new Collider(xgRuJP);
		xgRuJPCollider.up = true;

		// uocyLf (components)
		const uocyLfCollider = new Collider(uocyLf);
		uocyLfCollider.left = true;

		// mjnwuj (components)
		const mjnwujCollider = new Collider(mjnwuj);
		mjnwujCollider.right = true;

		// yjWUka (components)
		new Ladder(yjWUka);

		// rVIwYU (components)
		new Ladder(rVIwYU);

		// gSLtEn (components)
		const gSLtEnDepth = new Depth(gSLtEn);
		gSLtEnDepth.depth = 2;

		// dffbSc (components)
		const dffbScDepth = new Depth(dffbSc);
		dffbScDepth.depth = 2;

		// iDHwnM (components)
		new Ladder(iDHwnM);

		this.forest_2_village = forest_2_village;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.Tilemap} */
	forest_2_village;

	/* START-USER-CODE */

    // Write your code here

    create() {

        this.editorCreate();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
