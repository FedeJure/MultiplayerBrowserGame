
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
	editorCreate() {

		// forest_2_village
		const forest_2_village = this.add.tilemap("forest_2_village");
		forest_2_village.addTilesetImage("forest", "forest");
		forest_2_village.addTilesetImage("farm", "farm");

		// object_FiqYrQC
		forest_2_village.createLayer("ground", ["forest"], 0, 0);

		// object_GlMbNmS
		this.add.image(883, 1663, "village", "66");

		// object_pmmxZLP
		const object_pmmxZLP = this.add.image(934, 965, "button");

		// object_jJmXiKg
		const object_jJmXiKg = this.add.image(959, 1657, "village", "57");
		object_jJmXiKg.scaleX = 0.5814243205594086;
		object_jJmXiKg.scaleY = 0.5832897418579002;

		// object_KbmsRPi
		const object_KbmsRPi = this.add.layer();

		// object_xpPJQzn
		const object_xpPJQzn = this.add.image(513, 1637, "village", "26");
		object_xpPJQzn.scaleX = 0.7930543644653019;
		object_xpPJQzn.scaleY = 0.7557461198632563;
		object_KbmsRPi.add(object_xpPJQzn);

		// object_RcDXeDW
		const object_RcDXeDW = this.add.image(403, 1637, "village", "26");
		object_RcDXeDW.scaleX = 0.7240953091887501;
		object_RcDXeDW.scaleY = 0.7598126529158429;
		object_KbmsRPi.add(object_RcDXeDW);

		// object_zeELYWt
		const object_zeELYWt = this.add.image(459, 1658, "village", "21");
		object_zeELYWt.scaleX = 0.3594959292043153;
		object_zeELYWt.scaleY = 0.46578508238192273;
		object_KbmsRPi.add(object_zeELYWt);

		// object_gWQXpep
		const object_gWQXpep = this.add.image(459, 1694, "village", "50");
		object_gWQXpep.scaleX = 0.35027489539451107;
		object_gWQXpep.scaleY = 0.4500256982397846;
		object_KbmsRPi.add(object_gWQXpep);

		// object_uvZnWSR
		const object_uvZnWSR = this.add.image(335, 1699, "village", "47");
		object_uvZnWSR.scaleX = 0.7914539500846772;
		object_uvZnWSR.scaleY = 1.223661139336774;
		object_uvZnWSR.setOrigin(0.5, 1);
		object_KbmsRPi.add(object_uvZnWSR);

		// object_zFjSbwR
		const object_zFjSbwR = this.add.image(596, 1637, "village", "27");
		object_zFjSbwR.scaleX = 0.9655380450841;
		object_zFjSbwR.scaleY = 0.7442999438329971;
		object_KbmsRPi.add(object_zFjSbwR);

		// object_nZzTgzg
		const object_nZzTgzg = this.add.image(578, 1686, "village", "13");
		object_nZzTgzg.scaleX = 0.5348463580196658;
		object_nZzTgzg.scaleY = 0.5137216959198732;
		object_KbmsRPi.add(object_nZzTgzg);

		// object_ywDBskx
		const object_ywDBskx = this.add.image(385, 1514, "village", "45");
		object_KbmsRPi.add(object_ywDBskx);

		// object_OxNqwsG
		const object_OxNqwsG = this.add.image(565, 1514, "village", "45");
		object_OxNqwsG.flipX = true;
		object_KbmsRPi.add(object_OxNqwsG);

		// object_qxNJqaU
		const object_qxNJqaU = this.add.image(477, 1525, "village", "23");
		object_qxNJqaU.scaleX = 0.574477331289329;
		object_qxNJqaU.scaleY = 0.5434103272625034;
		object_KbmsRPi.add(object_qxNJqaU);

		// object_QlRZQuh
		const object_QlRZQuh = this.add.image(405, 1568, "village", "5");
		object_KbmsRPi.add(object_QlRZQuh);

		// object_pkgpwEl
		const object_pkgpwEl = this.add.image(610, 1700, "village", "47");
		object_pkgpwEl.scaleX = 0.7701003535392317;
		object_pkgpwEl.scaleY = 1.1998572720050202;
		object_pkgpwEl.setOrigin(0.5, 1);
		object_KbmsRPi.add(object_pkgpwEl);

		// object_IHIhTcY
		const object_IHIhTcY = this.add.image(539, 1568, "village", "5");
		object_KbmsRPi.add(object_IHIhTcY);

		// object_PCEymbR
		const object_PCEymbR = this.add.image(540, 1625, "village", "35");
		object_PCEymbR.scaleX = 0.6001591821876302;
		object_PCEymbR.scaleY = 0.5901817840466492;
		object_KbmsRPi.add(object_PCEymbR);

		// object_CBYmyNI
		const object_CBYmyNI = this.add.layer();

		// object_rnOeIVm
		const object_rnOeIVm = this.add.image(808, 1639, "village", "26");
		object_rnOeIVm.scaleX = 0.7603601438280799;
		object_rnOeIVm.scaleY = 0.7198101044061663;
		object_CBYmyNI.add(object_rnOeIVm);

		// object_BJFcuRi
		const object_BJFcuRi = this.add.image(730, 1639, "village", "26");
		object_BJFcuRi.scaleX = 0.8134760475775137;
		object_BJFcuRi.scaleY = 0.7288450457049085;
		object_CBYmyNI.add(object_BJFcuRi);

		// object_HjuQQZk
		const object_HjuQQZk = this.add.image(973, 1599, "village", "69");
		object_HjuQQZk.scaleX = 0.49492271502716845;
		object_HjuQQZk.scaleY = 0.44495973447303216;
		object_CBYmyNI.add(object_HjuQQZk);

		// object_PtDCwtf
		const object_PtDCwtf = this.add.image(1026, 1517, "village", "32");
		object_PtDCwtf.scaleX = 1.2490347002198205;
		object_PtDCwtf.scaleY = 0.6902382449834523;
		object_CBYmyNI.add(object_PtDCwtf);

		// object_FdeBggN
		const object_FdeBggN = this.add.image(836, 1684, "village", "13");
		object_FdeBggN.scaleX = 0.5348463580196658;
		object_FdeBggN.scaleY = 0.5137216959198732;
		object_CBYmyNI.add(object_FdeBggN);

		// object_DvDTbye
		const object_DvDTbye = this.add.image(1076, 1517, "village", "32");
		object_DvDTbye.scaleX = 0.7728788478966411;
		object_DvDTbye.scaleY = 0.6877016528196972;
		object_CBYmyNI.add(object_DvDTbye);

		// object_QMOmiWc
		const object_QMOmiWc = this.add.image(1083, 1580, "village", "5");
		object_QMOmiWc.scaleX = 0.3;
		object_QMOmiWc.scaleY = 0.7974303777798282;
		object_QMOmiWc.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_QMOmiWc);

		// object_EkzBeob
		const object_EkzBeob = this.add.image(1083, 1591, "village", "5");
		object_EkzBeob.scaleX = 0.3;
		object_EkzBeob.scaleY = 0.7974303777798181;
		object_EkzBeob.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_EkzBeob);

		// object_cXaOmtD
		const object_cXaOmtD = this.add.image(1083, 1602, "village", "5");
		object_cXaOmtD.scaleX = 0.3;
		object_cXaOmtD.scaleY = 0.7974303777798181;
		object_cXaOmtD.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_cXaOmtD);

		// object_eMUHngQ
		const object_eMUHngQ = this.add.image(1083, 1613, "village", "5");
		object_eMUHngQ.scaleX = 0.3;
		object_eMUHngQ.scaleY = 0.7974303777798181;
		object_eMUHngQ.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_eMUHngQ);

		// object_JfpyxKa
		const object_JfpyxKa = this.add.image(1083, 1624, "village", "5");
		object_JfpyxKa.scaleX = 0.3;
		object_JfpyxKa.scaleY = 0.7974303777798282;
		object_JfpyxKa.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_JfpyxKa);

		// object_wpyzptQ
		const object_wpyzptQ = this.add.image(1083, 1636, "village", "5");
		object_wpyzptQ.scaleX = 0.3;
		object_wpyzptQ.scaleY = 0.7974303777798181;
		object_wpyzptQ.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_wpyzptQ);

		// object_lmKfXfb
		const object_lmKfXfb = this.add.image(1083, 1647, "village", "5");
		object_lmKfXfb.scaleX = 0.3;
		object_lmKfXfb.scaleY = 0.7974303777798282;
		object_lmKfXfb.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_lmKfXfb);

		// object_whtssQI
		const object_whtssQI = this.add.image(1083, 1658, "village", "5");
		object_whtssQI.scaleX = 0.3;
		object_whtssQI.scaleY = 0.7974303777798282;
		object_whtssQI.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_whtssQI);

		// object_FDilVzk
		const object_FDilVzk = this.add.image(1083, 1669, "village", "5");
		object_FDilVzk.scaleX = 0.3;
		object_FDilVzk.scaleY = 0.7974303777798181;
		object_FDilVzk.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_FDilVzk);

		// object_iywpcfn
		const object_iywpcfn = this.add.image(1083, 1680, "village", "5");
		object_iywpcfn.scaleX = 0.3;
		object_iywpcfn.scaleY = 0.7974303777798282;
		object_iywpcfn.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_iywpcfn);

		// object_zFQZqoX
		const object_zFQZqoX = this.add.image(1083, 1691, "village", "5");
		object_zFQZqoX.scaleX = 0.3;
		object_zFQZqoX.scaleY = 0.7974303777798282;
		object_zFQZqoX.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_zFQZqoX);

		// object_LpzYRnC
		const object_LpzYRnC = this.add.image(755, 1652, "village", "21");
		object_LpzYRnC.scaleX = 0.41741044973474417;
		object_LpzYRnC.scaleY = 0.5056957888525416;
		object_CBYmyNI.add(object_LpzYRnC);

		// object_nnZYAar
		const object_nnZYAar = this.add.image(754, 1694, "village", "50");
		object_nnZYAar.scaleX = 0.3049122531651581;
		object_nnZYAar.scaleY = 0.37136562028989606;
		object_CBYmyNI.add(object_nnZYAar);

		// object_eWVrexs
		const object_eWVrexs = this.add.image(890, 1595, "village", "47");
		object_eWVrexs.scaleX = 0.7912864545948788;
		object_eWVrexs.scaleY = 0.663417221114047;
		object_eWVrexs.angle = -130;
		object_eWVrexs.flipX = true;
		object_CBYmyNI.add(object_eWVrexs);

		// object_wTAdbtW
		const object_wTAdbtW = this.add.image(870, 1701, "village", "47");
		object_wTAdbtW.scaleX = 0.5090171959981575;
		object_wTAdbtW.scaleY = 1.0843360741366268;
		object_wTAdbtW.setOrigin(0.5, 1);
		object_CBYmyNI.add(object_wTAdbtW);

		// object_CoVqreb
		const object_CoVqreb = this.add.image(924, 1517, "village", "32");
		object_CoVqreb.scaleX = 0.9293221976713291;
		object_CoVqreb.scaleY = 0.8586755404598116;
		object_CBYmyNI.add(object_CoVqreb);

		// object_PmEHjir
		const object_PmEHjir = this.add.image(920, 1539, "village", "15");
		object_PmEHjir.scaleX = 0.6210579411735648;
		object_PmEHjir.scaleY = 0.6194766279619738;
		object_CBYmyNI.add(object_PmEHjir);

		// object_PKuLHHl
		const object_PKuLHHl = this.add.image(665, 1700, "village", "47");
		object_PKuLHHl.scaleX = 0.6547320720268537;
		object_PKuLHHl.scaleY = 1.0913454200295085;
		object_PKuLHHl.setOrigin(0.5, 1);
		object_CBYmyNI.add(object_PKuLHHl);

		// object_TeniWEY
		const object_TeniWEY = this.add.image(927, 1577, "village", "5");
		object_CBYmyNI.add(object_TeniWEY);

		// object_MzeEgli
		const object_MzeEgli = this.add.image(1064, 1597, "village", "47");
		object_MzeEgli.scaleX = 0.3819034966562591;
		object_MzeEgli.scaleY = 0.46066629721545205;
		object_MzeEgli.angle = -45.00000000000006;
		object_CBYmyNI.add(object_MzeEgli);

		// object_clrDgym
		const object_clrDgym = this.add.image(1032, 1577, "village", "5");
		object_clrDgym.scaleY = 0.5;
		object_CBYmyNI.add(object_clrDgym);

		// object_ZmIykml
		const object_ZmIykml = this.add.image(733, 1516, "village", "32");
		object_ZmIykml.scaleX = 0.7717544187323511;
		object_ZmIykml.scaleY = 0.7160562684236693;
		object_CBYmyNI.add(object_ZmIykml);

		// object_TnlYRpa
		const object_TnlYRpa = this.add.image(671, 1575, "village", "47");
		object_TnlYRpa.scaleX = 0.9832863745893968;
		object_TnlYRpa.scaleY = 1.5867898687164645;
		object_TnlYRpa.setOrigin(0.5, 1);
		object_CBYmyNI.add(object_TnlYRpa);

		// object_JzBkHxL
		const object_JzBkHxL = this.add.image(822, 1515, "village", "32");
		object_JzBkHxL.scaleX = 0.4013203409961602;
		object_JzBkHxL.scaleY = 0.8003378327483526;
		object_CBYmyNI.add(object_JzBkHxL);

		// object_EfbSERo
		const object_EfbSERo = this.add.image(870, 1573, "village", "47");
		object_EfbSERo.scaleX = 0.9832863745893968;
		object_EfbSERo.scaleY = 1.5867898687164645;
		object_EfbSERo.setOrigin(0.5, 1);
		object_EfbSERo.flipX = true;
		object_CBYmyNI.add(object_EfbSERo);

		// object_eGuvyOm
		const object_eGuvyOm = this.add.image(1138, 1578, "village", "47");
		object_eGuvyOm.scaleX = 0.9832863745893968;
		object_eGuvyOm.scaleY = 1.5867898687164645;
		object_eGuvyOm.setOrigin(0.5, 1);
		object_CBYmyNI.add(object_eGuvyOm);

		// object_WYLarPc
		const object_WYLarPc = this.add.image(761, 1426, "village", "10");
		object_CBYmyNI.add(object_WYLarPc);

		// object_uunKacl
		const object_uunKacl = this.add.image(816, 1426, "village", "10");
		object_CBYmyNI.add(object_uunKacl);

		// object_gpJSQat
		const object_gpJSQat = this.add.image(669, 1426, "village", "9");
		object_CBYmyNI.add(object_gpJSQat);

		// object_WYCCRQP
		const object_WYCCRQP = this.add.image(834, 1500, "village", "36");
		object_WYCCRQP.scaleX = 0.4311401513467299;
		object_WYCCRQP.scaleY = 0.4453015811183735;
		object_CBYmyNI.add(object_WYCCRQP);

		// object_Iaifawu
		const object_Iaifawu = this.add.image(707, 1500, "village", "36");
		object_Iaifawu.scaleX = 0.48464598203624154;
		object_Iaifawu.scaleY = 0.4250491111196917;
		object_CBYmyNI.add(object_Iaifawu);

		// object_xuWbzeX
		const object_xuWbzeX = this.add.image(765, 1450, "village", "4");
		object_CBYmyNI.add(object_xuWbzeX);

		// object_ctsJern
		const object_ctsJern = this.add.image(839, 1349, "village", "40");
		object_ctsJern.scaleX = 0.6906241004849927;
		object_ctsJern.scaleY = 0.7628217088156259;
		object_CBYmyNI.add(object_ctsJern);

		// object_aXguDDg
		const object_aXguDDg = this.add.image(765, 1465, "village", "35");
		object_aXguDDg.scaleX = 0.48937680692732854;
		object_aXguDDg.scaleY = 0.43751767340977077;
		object_CBYmyNI.add(object_aXguDDg);

		// object_SPeyiUL
		const object_SPeyiUL = this.add.image(1065, 1553, "village", "59");
		object_SPeyiUL.scaleX = 0.75;
		object_SPeyiUL.scaleY = 0.75;
		object_CBYmyNI.add(object_SPeyiUL);

		// object_bazyvHN
		const object_bazyvHN = this.add.image(1017, 1553, "village", "59");
		object_bazyvHN.scaleX = 0.75;
		object_bazyvHN.scaleY = 0.75;
		object_CBYmyNI.add(object_bazyvHN);

		// object_dcGUQZl
		const object_dcGUQZl = this.add.image(970, 1553, "village", "59");
		object_dcGUQZl.scaleX = 0.75;
		object_dcGUQZl.scaleY = 0.75;
		object_CBYmyNI.add(object_dcGUQZl);

		// object_fOZBhGQ
		const object_fOZBhGQ = this.add.image(924, 1553, "village", "59");
		object_fOZBhGQ.scaleX = 0.75;
		object_fOZBhGQ.scaleY = 0.75;
		object_CBYmyNI.add(object_fOZBhGQ);

		// object_ofByjAh
		const object_ofByjAh = this.add.image(876, 1553, "village", "59");
		object_ofByjAh.scaleX = 0.75;
		object_ofByjAh.scaleY = 0.75;
		object_CBYmyNI.add(object_ofByjAh);

		// object_ImDHxfX
		const object_ImDHxfX = this.add.image(928, 1426, "village", "10");
		object_CBYmyNI.add(object_ImDHxfX);

		// object_QbhkHOw
		const object_QbhkHOw = this.add.image(1041, 1426, "village", "10");
		object_QbhkHOw.scaleX = 1.2593554741273;
		object_CBYmyNI.add(object_QbhkHOw);

		// object_vlaDmHD
		const object_vlaDmHD = this.add.image(689, 1552, "village", "46");
		object_vlaDmHD.scaleX = 0.8117594610069562;
		object_vlaDmHD.scaleY = 0.8516507936066724;
		object_CBYmyNI.add(object_vlaDmHD);

		// object_TzSHRgI
		const object_TzSHRgI = this.add.image(1140, 1426, "village", "9");
		object_TzSHRgI.flipX = true;
		object_CBYmyNI.add(object_TzSHRgI);

		// object_SRkkCmE
		const object_SRkkCmE = this.add.image(639, 1618, "village", "62");
		object_SRkkCmE.scaleX = 0.6116739978240475;
		object_SRkkCmE.scaleY = 0.7259739043534884;
		object_CBYmyNI.add(object_SRkkCmE);

		// object_qOvESem
		const object_qOvESem = this.add.image(1054, 1501, "village", "34");
		object_qOvESem.scaleX = 0.5294284815402992;
		object_qOvESem.scaleY = 0.5385312547888247;
		object_CBYmyNI.add(object_qOvESem);

		// object_dmyMnof
		const object_dmyMnof = this.add.text(624, 1616, "", {});
		object_dmyMnof.scaleX = 0.5806729699363473;
		object_dmyMnof.scaleY = 0.686343592252415;
		object_dmyMnof.text = "Tabern";
		object_dmyMnof.setStyle({ "fontSize": "13px" });
		object_CBYmyNI.add(object_dmyMnof);

		// object_tshHBpl
		const object_tshHBpl = this.add.image(1023, 1597, "village", "61");
		object_tshHBpl.scaleX = 0.5147725980403168;
		object_tshHBpl.scaleY = 0.5913181204575645;
		object_CBYmyNI.add(object_tshHBpl);

		// object_EOlquaz
		const object_EOlquaz = this.add.image(1095, 1349, "village", "41");
		object_EOlquaz.scaleX = 0.5857657744837543;
		object_EOlquaz.scaleY = 0.658267335292285;
		object_CBYmyNI.add(object_EOlquaz);

		// object_gNVEzbv
		const object_gNVEzbv = this.add.image(663, 1583, "village", "52");
		object_gNVEzbv.scaleX = 0.8239034322402807;
		object_gNVEzbv.scaleY = 0.8191533999217628;
		object_CBYmyNI.add(object_gNVEzbv);

		// object_pkivPaN
		const object_pkivPaN = this.add.image(870, 1576, "village", "52");
		object_CBYmyNI.add(object_pkivPaN);

		// object_azLdyBo
		const object_azLdyBo = this.add.image(830, 1551, "village", "46");
		object_azLdyBo.scaleX = 0.7328422598783817;
		object_azLdyBo.scaleY = 0.8829330634797368;
		object_azLdyBo.flipX = true;
		object_CBYmyNI.add(object_azLdyBo);

		// object_rhlZFDO
		const object_rhlZFDO = this.add.image(767, 1586, "village", "5");
		object_rhlZFDO.scaleX = 1.1739006890654184;
		object_rhlZFDO.scaleY = -0.4206707704220114;
		object_CBYmyNI.add(object_rhlZFDO);

		// object_scJGuPw
		const object_scJGuPw = this.add.image(766, 1517, "village", "53");
		object_scJGuPw.angle = 45;
		object_CBYmyNI.add(object_scJGuPw);

		// object_Rhkhuxz
		const object_Rhkhuxz = this.add.image(766, 1546, "village", "23");
		object_Rhkhuxz.scaleX = 0.6337901504862209;
		object_Rhkhuxz.scaleY = 0.6567476538507682;
		object_CBYmyNI.add(object_Rhkhuxz);

		// object_JmPhYsm
		const object_JmPhYsm = this.add.rectangle(877, 1577, 128, 128);
		object_JmPhYsm.scaleX = 1.6184274224192219;
		object_JmPhYsm.scaleY = 0.06482362170668285;
		object_JmPhYsm.setOrigin(0, 0.5);
		object_CBYmyNI.add(object_JmPhYsm);

		// object_hruDMOy
		const object_hruDMOy = this.add.rectangle(1138, 1523, 128, 128);
		object_hruDMOy.scaleX = 0.04880316614197011;
		object_hruDMOy.scaleY = 0.8048362793949658;
		object_CBYmyNI.add(object_hruDMOy);

		// object_rnlZfyy
		const object_rnlZfyy = this.add.rectangle(876, 1529, 128, 128);
		object_rnlZfyy.scaleX = 0.04880316614197011;
		object_rnlZfyy.scaleY = 0.8048362793949658;
		object_CBYmyNI.add(object_rnlZfyy);

		// object_FEgfCGt
		const object_FEgfCGt = this.add.rectangle(1082, 1544, 128, 128);
		object_FEgfCGt.scaleX = 0.4182170652546042;
		object_FEgfCGt.scaleY = 1.2023096258552801;
		object_FEgfCGt.setOrigin(0, 0);
		object_CBYmyNI.add(object_FEgfCGt);

		// object_kNsAJch
		const object_kNsAJch = this.add.image(1079, 1700, "village", "47");
		object_kNsAJch.scaleX = -0.7101683098224691;
		object_kNsAJch.scaleY = 1.1780424784473118;
		object_kNsAJch.setOrigin(0.5, 1);
		object_CBYmyNI.add(object_kNsAJch);

		// object_RwCZSzN
		const object_RwCZSzN = this.add.image(1141, 1699, "village", "47");
		object_RwCZSzN.scaleX = -0.7101683098224691;
		object_RwCZSzN.scaleY = 1.1780424784473118;
		object_RwCZSzN.setOrigin(0.5, 1);
		object_CBYmyNI.add(object_RwCZSzN);

		// object_WBJxgxc
		const object_WBJxgxc = this.add.image(826, 1632, "village", "34");
		object_WBJxgxc.scaleX = 0.48380610685610503;
		object_WBJxgxc.scaleY = 0.5627643215010802;
		object_CBYmyNI.add(object_WBJxgxc);

		// object_QbyZAYb
		const object_QbyZAYb = this.add.layer();

		// object_mcEIZsG
		const object_mcEIZsG = this.add.image(1797, 854, "village", "9");
		object_QbyZAYb.add(object_mcEIZsG);

		// object_lqfagwi
		const object_lqfagwi = this.add.image(1824, 1244, "village", "26");
		object_lqfagwi.scaleX = 0.7118763441527373;
		object_lqfagwi.scaleY = 0.8551627529235629;
		object_QbyZAYb.add(object_lqfagwi);

		// object_VCYRthH
		const object_VCYRthH = this.add.image(1823, 1108, "village", "26");
		object_VCYRthH.scaleX = 0.7118763441527373;
		object_VCYRthH.scaleY = 0.8551627529235629;
		object_QbyZAYb.add(object_VCYRthH);

		// object_NsoBJOX
		const object_NsoBJOX = this.add.image(1824, 1179, "village", "2");
		object_NsoBJOX.scaleX = 0.8664225242661129;
		object_NsoBJOX.scaleY = 0.7316163909380448;
		object_QbyZAYb.add(object_NsoBJOX);

		// object_PQisbnh
		const object_PQisbnh = this.add.image(1823, 972, "village", "26");
		object_PQisbnh.scaleX = 0.7118763441527373;
		object_PQisbnh.scaleY = 0.8551627529235629;
		object_QbyZAYb.add(object_PQisbnh);

		// object_idJsnwV
		const object_idJsnwV = this.add.image(1823, 1042, "village", "2");
		object_idJsnwV.scaleX = 0.8664225242661129;
		object_idJsnwV.scaleY = 0.7316163909380448;
		object_QbyZAYb.add(object_idJsnwV);

		// object_yOxsYwi
		const object_yOxsYwi = this.add.image(1782, 880, "village", "58");
		object_yOxsYwi.scaleX = 0.8;
		object_yOxsYwi.scaleY = 0.8;
		object_QbyZAYb.add(object_yOxsYwi);

		// object_jFDIUDg
		const object_jFDIUDg = this.add.image(1850, 853, "village", "9");
		object_jFDIUDg.flipX = true;
		object_QbyZAYb.add(object_jFDIUDg);

		// object_bmqTiSF
		const object_bmqTiSF = this.add.image(1830, 883, "village", "59");
		object_bmqTiSF.scaleX = 0.8;
		object_bmqTiSF.scaleY = 0.8;
		object_QbyZAYb.add(object_bmqTiSF);

		// object_YwxoKpq
		const object_YwxoKpq = this.add.image(1863, 880, "village", "58");
		object_YwxoKpq.scaleX = 0.8;
		object_YwxoKpq.scaleY = 0.8;
		object_YwxoKpq.flipX = true;
		object_QbyZAYb.add(object_YwxoKpq);

		// object_AGnsWCG
		const object_AGnsWCG = this.add.image(1791, 777, "village", "46");
		object_AGnsWCG.scaleX = 0.35;
		object_AGnsWCG.scaleY = 0.6165274010105828;
		object_QbyZAYb.add(object_AGnsWCG);

		// object_sDGDcAl
		const object_sDGDcAl = this.add.image(1855, 777, "village", "46");
		object_sDGDcAl.scaleX = 0.35;
		object_sDGDcAl.scaleY = 0.6165274010105828;
		object_sDGDcAl.flipX = true;
		object_QbyZAYb.add(object_sDGDcAl);

		// object_bvYTglK
		const object_bvYTglK = this.add.image(1823, 1091, "village", "37");
		object_bvYTglK.scaleX = 0.5286167511234134;
		object_bvYTglK.scaleY = 0.6405581103259028;
		object_QbyZAYb.add(object_bvYTglK);

		// object_NmgjPsU
		const object_NmgjPsU = this.add.image(1825, 960, "village", "37");
		object_NmgjPsU.scaleX = 0.5286167511234134;
		object_NmgjPsU.scaleY = 0.6405581103259028;
		object_QbyZAYb.add(object_NmgjPsU);

		// object_CevLJiK
		const object_CevLJiK = this.add.image(1823, 1305, "village", "50");
		object_CevLJiK.scaleX = 0.5813575958968366;
		object_CevLJiK.scaleY = 0.6925375255623029;
		object_QbyZAYb.add(object_CevLJiK);

		// object_KUcKoLh
		const object_KUcKoLh = this.add.layer();

		// object_hcvtBFy
		const object_hcvtBFy = this.add.image(1559, 1689, "village", "5");
		object_hcvtBFy.scaleX = 0.3;
		object_hcvtBFy.scaleY = 0.7974303777798282;
		object_hcvtBFy.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_hcvtBFy);

		// object_MJnajNs
		const object_MJnajNs = this.add.image(1559, 1678, "village", "5");
		object_MJnajNs.scaleX = 0.3;
		object_MJnajNs.scaleY = 0.7974303777798282;
		object_MJnajNs.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_MJnajNs);

		// object_nRcyBYF
		const object_nRcyBYF = this.add.image(1559, 1667, "village", "5");
		object_nRcyBYF.scaleX = 0.3;
		object_nRcyBYF.scaleY = 0.7974303777798181;
		object_nRcyBYF.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_nRcyBYF);

		// object_yCtfyur
		const object_yCtfyur = this.add.image(1559, 1656, "village", "5");
		object_yCtfyur.scaleX = 0.3;
		object_yCtfyur.scaleY = 0.7974303777798282;
		object_yCtfyur.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_yCtfyur);

		// object_xhnRMQU
		const object_xhnRMQU = this.add.image(1559, 1645, "village", "5");
		object_xhnRMQU.scaleX = 0.3;
		object_xhnRMQU.scaleY = 0.7974303777798282;
		object_xhnRMQU.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_xhnRMQU);

		// object_rNSCEfg
		const object_rNSCEfg = this.add.image(1559, 1634, "village", "5");
		object_rNSCEfg.scaleX = 0.3;
		object_rNSCEfg.scaleY = 0.7974303777798181;
		object_rNSCEfg.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_rNSCEfg);

		// object_QazGZeb
		const object_QazGZeb = this.add.image(1559, 1623, "village", "5");
		object_QazGZeb.scaleX = 0.3;
		object_QazGZeb.scaleY = 0.7974303777798282;
		object_QazGZeb.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_QazGZeb);

		// object_YWEueHN
		const object_YWEueHN = this.add.image(1559, 1611, "village", "5");
		object_YWEueHN.scaleX = 0.3;
		object_YWEueHN.scaleY = 0.7974303777798181;
		object_YWEueHN.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_YWEueHN);

		// object_hFfBjLI
		const object_hFfBjLI = this.add.image(1559, 1600, "village", "5");
		object_hFfBjLI.scaleX = 0.3;
		object_hFfBjLI.scaleY = 0.7974303777798181;
		object_hFfBjLI.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_hFfBjLI);

		// object_EsmIdtW
		const object_EsmIdtW = this.add.image(1559, 1589, "village", "5");
		object_EsmIdtW.scaleX = 0.3;
		object_EsmIdtW.scaleY = 0.7974303777798181;
		object_EsmIdtW.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_EsmIdtW);

		// object_jxsuMfP
		const object_jxsuMfP = this.add.image(1559, 1578, "village", "5");
		object_jxsuMfP.scaleX = 0.3;
		object_jxsuMfP.scaleY = 0.7974303777798282;
		object_jxsuMfP.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_jxsuMfP);

		// object_ncXyOBO
		const object_ncXyOBO = this.add.image(1560, 1565, "village", "5");
		object_ncXyOBO.scaleX = 0.3;
		object_ncXyOBO.scaleY = 0.7974303777798282;
		object_ncXyOBO.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_ncXyOBO);

		// object_rDZDOlD
		const object_rDZDOlD = this.add.image(1560, 1554, "village", "5");
		object_rDZDOlD.scaleX = 0.3;
		object_rDZDOlD.scaleY = 0.7974303777798282;
		object_rDZDOlD.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_rDZDOlD);

		// object_ZdfGFBJ
		const object_ZdfGFBJ = this.add.image(1560, 1543, "village", "5");
		object_ZdfGFBJ.scaleX = 0.3;
		object_ZdfGFBJ.scaleY = 0.7974303777798181;
		object_ZdfGFBJ.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_ZdfGFBJ);

		// object_rCXhshs
		const object_rCXhshs = this.add.image(1560, 1532, "village", "5");
		object_rCXhshs.scaleX = 0.3;
		object_rCXhshs.scaleY = 0.7974303777798282;
		object_rCXhshs.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_rCXhshs);

		// object_PdhgueB
		const object_PdhgueB = this.add.image(1560, 1521, "village", "5");
		object_PdhgueB.scaleX = 0.3;
		object_PdhgueB.scaleY = 0.7974303777798282;
		object_PdhgueB.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_PdhgueB);

		// object_NJCaxdo
		const object_NJCaxdo = this.add.image(1560, 1510, "village", "5");
		object_NJCaxdo.scaleX = 0.3;
		object_NJCaxdo.scaleY = 0.7974303777798181;
		object_NJCaxdo.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_NJCaxdo);

		// object_qZDSDCs
		const object_qZDSDCs = this.add.image(1560, 1499, "village", "5");
		object_qZDSDCs.scaleX = 0.3;
		object_qZDSDCs.scaleY = 0.7974303777798282;
		object_qZDSDCs.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_qZDSDCs);

		// object_eindeuF
		const object_eindeuF = this.add.image(1560, 1487, "village", "5");
		object_eindeuF.scaleX = 0.3;
		object_eindeuF.scaleY = 0.7974303777798181;
		object_eindeuF.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_eindeuF);

		// object_aMJvirx
		const object_aMJvirx = this.add.image(1556, 1585, "village", "47");
		object_aMJvirx.scaleX = -0.7101683098224691;
		object_aMJvirx.scaleY = 1.1780424784473118;
		object_aMJvirx.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_aMJvirx);

		// object_pQvLxeh
		const object_pQvLxeh = this.add.image(1555, 1698, "village", "47");
		object_pQvLxeh.scaleX = -0.7101683098224691;
		object_pQvLxeh.scaleY = 1.1780424784473118;
		object_pQvLxeh.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_pQvLxeh);

		// object_yEFOZTK
		const object_yEFOZTK = this.add.image(1619.8086625803492, 1583.9419973193965, "village", "47");
		object_yEFOZTK.scaleX = -0.7101683098224691;
		object_yEFOZTK.scaleY = 1.1780424784473118;
		object_yEFOZTK.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_yEFOZTK);

		// object_jubqsoV
		const object_jubqsoV = this.add.image(1618.8086625803492, 1696.9419973193965, "village", "47");
		object_jubqsoV.scaleX = -0.7101683098224691;
		object_jubqsoV.scaleY = 1.1780424784473118;
		object_jubqsoV.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_jubqsoV);

		// object_KzHcrrI
		const object_KzHcrrI = this.add.rectangle(1555, 1292, 128, 128);
		object_KzHcrrI.scaleX = 0.4784308704094025;
		object_KzHcrrI.scaleY = 3.153364532660772;
		object_KzHcrrI.setOrigin(0, 0);
		object_KUcKoLh.add(object_KzHcrrI);

		// object_zfRLiBT
		const object_zfRLiBT = this.add.image(1558, 1479, "village", "47");
		object_zfRLiBT.scaleX = -0.7101683098224691;
		object_zfRLiBT.scaleY = 1.1780424784473118;
		object_zfRLiBT.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_zfRLiBT);

		// object_drOWYqm
		const object_drOWYqm = this.add.image(1622, 1478, "village", "47");
		object_drOWYqm.scaleX = -0.7101683098224691;
		object_drOWYqm.scaleY = 1.1780424784473118;
		object_drOWYqm.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_drOWYqm);

		// object_vAAcYrs
		const object_vAAcYrs = this.add.image(1562, 1381, "village", "5");
		object_vAAcYrs.scaleX = 0.3;
		object_vAAcYrs.scaleY = 0.7974303777798181;
		object_vAAcYrs.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_vAAcYrs);

		// object_TWBaYCF
		const object_TWBaYCF = this.add.image(1562, 1393, "village", "5");
		object_TWBaYCF.scaleX = 0.3;
		object_TWBaYCF.scaleY = 0.7974303777798282;
		object_TWBaYCF.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_TWBaYCF);

		// object_NNiiSCy
		const object_NNiiSCy = this.add.image(1562, 1404, "village", "5");
		object_NNiiSCy.scaleX = 0.3;
		object_NNiiSCy.scaleY = 0.7974303777798181;
		object_NNiiSCy.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_NNiiSCy);

		// object_FIKQyZW
		const object_FIKQyZW = this.add.image(1562, 1415, "village", "5");
		object_FIKQyZW.scaleX = 0.3;
		object_FIKQyZW.scaleY = 0.7974303777798282;
		object_FIKQyZW.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_FIKQyZW);

		// object_wBOZVHt
		const object_wBOZVHt = this.add.image(1562, 1426, "village", "5");
		object_wBOZVHt.scaleX = 0.3;
		object_wBOZVHt.scaleY = 0.7974303777798282;
		object_wBOZVHt.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_wBOZVHt);

		// object_XGqjoUE
		const object_XGqjoUE = this.add.image(1562, 1437, "village", "5");
		object_XGqjoUE.scaleX = 0.3;
		object_XGqjoUE.scaleY = 0.7974303777798181;
		object_XGqjoUE.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_XGqjoUE);

		// object_JElVfwN
		const object_JElVfwN = this.add.image(1562, 1448, "village", "5");
		object_JElVfwN.scaleX = 0.3;
		object_JElVfwN.scaleY = 0.7974303777798282;
		object_JElVfwN.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_JElVfwN);

		// object_dlXKSGv
		const object_dlXKSGv = this.add.image(1562, 1459, "village", "5");
		object_dlXKSGv.scaleX = 0.3;
		object_dlXKSGv.scaleY = 0.7974303777798282;
		object_dlXKSGv.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_dlXKSGv);

		// object_kDJIXKg
		const object_kDJIXKg = this.add.image(1561, 1472, "village", "5");
		object_kDJIXKg.scaleX = 0.3;
		object_kDJIXKg.scaleY = 0.7974303777798282;
		object_kDJIXKg.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_kDJIXKg);

		// object_rXnMXkF
		const object_rXnMXkF = this.add.image(1622, 1372, "village", "47");
		object_rXnMXkF.scaleX = -0.619457458008396;
		object_rXnMXkF.scaleY = 0.7773715914699639;
		object_rXnMXkF.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_rXnMXkF);

		// object_LFEpTJL
		const object_LFEpTJL = this.add.image(1563, 1320, "village", "5");
		object_LFEpTJL.scaleX = 0.3;
		object_LFEpTJL.scaleY = 0.7974303777798282;
		object_LFEpTJL.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_LFEpTJL);

		// object_raloLBz
		const object_raloLBz = this.add.image(1563, 1331, "village", "5");
		object_raloLBz.scaleX = 0.3;
		object_raloLBz.scaleY = 0.7974303777798181;
		object_raloLBz.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_raloLBz);

		// object_TvJSGwQ
		const object_TvJSGwQ = this.add.image(1563, 1342, "village", "5");
		object_TvJSGwQ.scaleX = 0.3;
		object_TvJSGwQ.scaleY = 0.7974303777798282;
		object_TvJSGwQ.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_TvJSGwQ);

		// object_KVkgzIr
		const object_KVkgzIr = this.add.image(1563, 1353, "village", "5");
		object_KVkgzIr.scaleX = 0.3;
		object_KVkgzIr.scaleY = 0.7974303777798282;
		object_KVkgzIr.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_KVkgzIr);

		// object_urTrcDT
		const object_urTrcDT = this.add.image(1562, 1366, "village", "5");
		object_urTrcDT.scaleX = 0.3;
		object_urTrcDT.scaleY = 0.7974303777798282;
		object_urTrcDT.setOrigin(0, 0.5);
		object_KUcKoLh.add(object_urTrcDT);

		// object_qbZQGDU
		const object_qbZQGDU = this.add.image(1558, 1373, "village", "47");
		object_qbZQGDU.scaleX = -0.6456379122596859;
		object_qbZQGDU.scaleY = 0.774186371502988;
		object_qbZQGDU.setOrigin(0.5, 1);
		object_KUcKoLh.add(object_qbZQGDU);

		// object_tmjCeFs
		const object_tmjCeFs = this.add.layer();

		// object_CdnqbNH
		const object_CdnqbNH = this.add.image(1501, 1636, "village", "27");
		object_CdnqbNH.scaleX = 0.9655380450841;
		object_CdnqbNH.scaleY = 0.7442999438329971;
		object_tmjCeFs.add(object_CdnqbNH);

		// object_dXgsJAO
		const object_dXgsJAO = this.add.image(1418, 1636, "village", "26");
		object_dXgsJAO.scaleX = 0.7930543644653019;
		object_dXgsJAO.scaleY = 0.7557461198632563;
		object_tmjCeFs.add(object_dXgsJAO);

		// object_orYRDZh
		const object_orYRDZh = this.add.image(1308, 1636, "village", "26");
		object_orYRDZh.scaleX = 0.7240953091887501;
		object_orYRDZh.scaleY = 0.7598126529158429;
		object_tmjCeFs.add(object_orYRDZh);

		// object_wQhWrCv
		const object_wQhWrCv = this.add.image(1515, 1699, "village", "47");
		object_wQhWrCv.scaleX = 0.7701003535392317;
		object_wQhWrCv.scaleY = 1.1998572720050202;
		object_wQhWrCv.setOrigin(0.5, 1);
		object_tmjCeFs.add(object_wQhWrCv);

		// object_KjkqhuH
		const object_KjkqhuH = this.add.image(1483, 1685, "village", "13");
		object_KjkqhuH.scaleX = 0.5348463580196658;
		object_KjkqhuH.scaleY = 0.5137216959198732;
		object_tmjCeFs.add(object_KjkqhuH);

		// object_qqxEOLp
		const object_qqxEOLp = this.add.image(1240, 1698, "village", "47");
		object_qqxEOLp.scaleX = 0.7914539500846772;
		object_qqxEOLp.scaleY = 1.223661139336774;
		object_qqxEOLp.setOrigin(0.5, 1);
		object_tmjCeFs.add(object_qqxEOLp);

		// object_wmHTUrS
		const object_wmHTUrS = this.add.image(1364, 1657, "village", "21");
		object_wmHTUrS.scaleX = 0.3594959292043153;
		object_wmHTUrS.scaleY = 0.46578508238192273;
		object_tmjCeFs.add(object_wmHTUrS);

		// object_TccZdCP
		const object_TccZdCP = this.add.image(1364, 1693, "village", "50");
		object_TccZdCP.scaleX = 0.35027489539451107;
		object_TccZdCP.scaleY = 0.4500256982397846;
		object_tmjCeFs.add(object_TccZdCP);

		// object_hYsDIgF
		const object_hYsDIgF = this.add.image(1282, 1592, "village", "64");
		object_tmjCeFs.add(object_hYsDIgF);

		// object_Dxvmmht
		const object_Dxvmmht = this.add.image(1353, 1592, "village", "64");
		object_tmjCeFs.add(object_Dxvmmht);

		// object_bDdYFXM
		const object_bDdYFXM = this.add.image(1425, 1592, "village", "64");
		object_tmjCeFs.add(object_bDdYFXM);

		// object_RyWIXbS
		const object_RyWIXbS = this.add.image(1472, 1592, "village", "64");
		object_tmjCeFs.add(object_RyWIXbS);

		// object_qCbwMnw
		const object_qCbwMnw = this.add.image(1327, 1510, "village", "29");
		object_qCbwMnw.scaleX = 0.8036883750668462;
		object_qCbwMnw.scaleY = 0.7498833054280883;
		object_tmjCeFs.add(object_qCbwMnw);

		// object_AYwGWqH
		const object_AYwGWqH = this.add.image(1247, 1510, "village", "28");
		object_AYwGWqH.scaleX = 0.66;
		object_AYwGWqH.scaleY = 0.77;
		object_tmjCeFs.add(object_AYwGWqH);

		// object_aoGcRTy
		const object_aoGcRTy = this.add.image(1507, 1510, "village", "30");
		object_aoGcRTy.scaleX = 0.66;
		object_aoGcRTy.scaleY = 0.77;
		object_tmjCeFs.add(object_aoGcRTy);

		// object_lbDXYAG
		const object_lbDXYAG = this.add.image(1436, 1510, "village", "29");
		object_lbDXYAG.scaleX = 0.7344740327128183;
		object_lbDXYAG.scaleY = 0.7498833054280883;
		object_tmjCeFs.add(object_lbDXYAG);

		// object_nNNvOgp
		const object_nNNvOgp = this.add.image(1310, 1567, "village", "5");
		object_tmjCeFs.add(object_nNNvOgp);

		// object_UrdchNR
		const object_UrdchNR = this.add.image(1444, 1567, "village", "5");
		object_tmjCeFs.add(object_UrdchNR);

		// object_AJeQoYY
		const object_AJeQoYY = this.add.image(1470, 1586, "village", "67");
		object_tmjCeFs.add(object_AJeQoYY);

		// object_WMbCVPW
		const object_WMbCVPW = this.add.image(1298, 1645, "village", "37");
		object_WMbCVPW.scaleX = 0.509515194763901;
		object_WMbCVPW.scaleY = 0.5158636450948091;
		object_tmjCeFs.add(object_WMbCVPW);

		// object_KJuQsAj
		const object_KJuQsAj = this.add.image(1440, 1644, "village", "37");
		object_KJuQsAj.scaleX = 0.509515194763901;
		object_KJuQsAj.scaleY = 0.5158636450948091;
		object_tmjCeFs.add(object_KJuQsAj);

		// object_cluQofE
		const object_cluQofE = this.add.image(1271, 1443, "village", "65");
		object_tmjCeFs.add(object_cluQofE);

		// object_EJrfWEg
		const object_EJrfWEg = this.add.image(1341, 1443, "village", "65");
		object_tmjCeFs.add(object_EJrfWEg);

		// object_NyUzcvu
		const object_NyUzcvu = this.add.image(1482.004150390625, 1443.2008056640625, "village", "65");
		object_tmjCeFs.add(object_NyUzcvu);

		// object_JkPcdAU
		const object_JkPcdAU = this.add.image(1411, 1443, "village", "65");
		object_tmjCeFs.add(object_JkPcdAU);

		// object_wbHiiwm
		const object_wbHiiwm = this.add.image(1294, 1484, "village", "34");
		object_wbHiiwm.scaleX = 0.4640245405465907;
		object_wbHiiwm.scaleY = 0.4863804071845631;
		object_tmjCeFs.add(object_wbHiiwm);

		// object_wFGMwvz
		const object_wFGMwvz = this.add.image(1442, 1484, "village", "34");
		object_wFGMwvz.scaleX = 0.4640245405465907;
		object_wFGMwvz.scaleY = 0.4863804071845631;
		object_tmjCeFs.add(object_wFGMwvz);

		// object_cXdcrYN
		const object_cXdcrYN = this.add.image(1275, 1585, "village", "67");
		object_tmjCeFs.add(object_cXdcrYN);

		// object_YeNmYZc
		const object_YeNmYZc = this.add.layer();

		// object_CQSOjMQ
		const object_CQSOjMQ = this.add.image(52, 1636, "village", "54");
		object_CQSOjMQ.scaleX = 0.9683701078838477;
		object_CQSOjMQ.scaleY = 1.4012276166017719;
		object_YeNmYZc.add(object_CQSOjMQ);

		// object_PkFgLGt
		const object_PkFgLGt = this.add.image(65, 1606, "village", "56");
		object_YeNmYZc.add(object_PkFgLGt);

		// object_ptLEHUV
		const object_ptLEHUV = this.add.layer();

		// object_RWdnHDc
		const object_RWdnHDc = this.add.image(159, 1689, "village", "5");
		object_RWdnHDc.scaleX = 0.3;
		object_RWdnHDc.scaleY = 0.7974303777798282;
		object_RWdnHDc.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_RWdnHDc);

		// object_eamsAfI
		const object_eamsAfI = this.add.image(159, 1678, "village", "5");
		object_eamsAfI.scaleX = 0.3;
		object_eamsAfI.scaleY = 0.7974303777798282;
		object_eamsAfI.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_eamsAfI);

		// object_pRFUxlq
		const object_pRFUxlq = this.add.image(159, 1667, "village", "5");
		object_pRFUxlq.scaleX = 0.3;
		object_pRFUxlq.scaleY = 0.7974303777798181;
		object_pRFUxlq.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_pRFUxlq);

		// object_BREILet
		const object_BREILet = this.add.image(159, 1656, "village", "5");
		object_BREILet.scaleX = 0.3;
		object_BREILet.scaleY = 0.7974303777798282;
		object_BREILet.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_BREILet);

		// object_ApUMpLj
		const object_ApUMpLj = this.add.image(159, 1645, "village", "5");
		object_ApUMpLj.scaleX = 0.3;
		object_ApUMpLj.scaleY = 0.7974303777798282;
		object_ApUMpLj.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_ApUMpLj);

		// object_bMkzAtn
		const object_bMkzAtn = this.add.image(159, 1634, "village", "5");
		object_bMkzAtn.scaleX = 0.3;
		object_bMkzAtn.scaleY = 0.7974303777798181;
		object_bMkzAtn.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_bMkzAtn);

		// object_qdsCjrd
		const object_qdsCjrd = this.add.image(159, 1623, "village", "5");
		object_qdsCjrd.scaleX = 0.3;
		object_qdsCjrd.scaleY = 0.7974303777798282;
		object_qdsCjrd.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_qdsCjrd);

		// object_qSASfSv
		const object_qSASfSv = this.add.image(159, 1611, "village", "5");
		object_qSASfSv.scaleX = 0.3;
		object_qSASfSv.scaleY = 0.7974303777798181;
		object_qSASfSv.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_qSASfSv);

		// object_VDEGOYY
		const object_VDEGOYY = this.add.image(159, 1600, "village", "5");
		object_VDEGOYY.scaleX = 0.3;
		object_VDEGOYY.scaleY = 0.7974303777798181;
		object_VDEGOYY.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_VDEGOYY);

		// object_RgxLJQg
		const object_RgxLJQg = this.add.image(159, 1589, "village", "5");
		object_RgxLJQg.scaleX = 0.3;
		object_RgxLJQg.scaleY = 0.7974303777798181;
		object_RgxLJQg.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_RgxLJQg);

		// object_UDrJyDs
		const object_UDrJyDs = this.add.image(159, 1578, "village", "5");
		object_UDrJyDs.scaleX = 0.3;
		object_UDrJyDs.scaleY = 0.7974303777798282;
		object_UDrJyDs.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_UDrJyDs);

		// object_DocQJRI
		const object_DocQJRI = this.add.image(160, 1565, "village", "5");
		object_DocQJRI.scaleX = 0.3;
		object_DocQJRI.scaleY = 0.7974303777798282;
		object_DocQJRI.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_DocQJRI);

		// object_JvXehBk
		const object_JvXehBk = this.add.image(160, 1554, "village", "5");
		object_JvXehBk.scaleX = 0.3;
		object_JvXehBk.scaleY = 0.7974303777798282;
		object_JvXehBk.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_JvXehBk);

		// object_WfQWueh
		const object_WfQWueh = this.add.image(160, 1543, "village", "5");
		object_WfQWueh.scaleX = 0.3;
		object_WfQWueh.scaleY = 0.7974303777798181;
		object_WfQWueh.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_WfQWueh);

		// object_ofiAqhn
		const object_ofiAqhn = this.add.image(160, 1532, "village", "5");
		object_ofiAqhn.scaleX = 0.3;
		object_ofiAqhn.scaleY = 0.7974303777798282;
		object_ofiAqhn.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_ofiAqhn);

		// object_kUsGGMZ
		const object_kUsGGMZ = this.add.image(160, 1521, "village", "5");
		object_kUsGGMZ.scaleX = 0.3;
		object_kUsGGMZ.scaleY = 0.7974303777798282;
		object_kUsGGMZ.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_kUsGGMZ);

		// object_hRkgBxU
		const object_hRkgBxU = this.add.image(160, 1510, "village", "5");
		object_hRkgBxU.scaleX = 0.3;
		object_hRkgBxU.scaleY = 0.7974303777798181;
		object_hRkgBxU.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_hRkgBxU);

		// object_nBgihzl
		const object_nBgihzl = this.add.image(160, 1499, "village", "5");
		object_nBgihzl.scaleX = 0.3;
		object_nBgihzl.scaleY = 0.7974303777798282;
		object_nBgihzl.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_nBgihzl);

		// object_uYtkXLp
		const object_uYtkXLp = this.add.image(160, 1487, "village", "5");
		object_uYtkXLp.scaleX = 0.3;
		object_uYtkXLp.scaleY = 0.7974303777798181;
		object_uYtkXLp.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_uYtkXLp);

		// object_hNlckUW
		const object_hNlckUW = this.add.image(156, 1585, "village", "47");
		object_hNlckUW.scaleX = -0.7101683098224691;
		object_hNlckUW.scaleY = 1.1780424784473118;
		object_hNlckUW.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_hNlckUW);

		// object_EzKQCxv
		const object_EzKQCxv = this.add.image(155, 1698, "village", "47");
		object_EzKQCxv.scaleX = -0.7101683098224691;
		object_EzKQCxv.scaleY = 1.1780424784473118;
		object_EzKQCxv.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_EzKQCxv);

		// object_MHwMrtN
		const object_MHwMrtN = this.add.image(220, 1584, "village", "47");
		object_MHwMrtN.scaleX = -0.7101683098224691;
		object_MHwMrtN.scaleY = 1.1780424784473118;
		object_MHwMrtN.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_MHwMrtN);

		// object_JEcZzZQ
		const object_JEcZzZQ = this.add.image(219, 1697, "village", "47");
		object_JEcZzZQ.scaleX = -0.7101683098224691;
		object_JEcZzZQ.scaleY = 1.1780424784473118;
		object_JEcZzZQ.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_JEcZzZQ);

		// object_mOQvwPY
		const object_mOQvwPY = this.add.rectangle(155, 1288, 128, 128);
		object_mOQvwPY.scaleX = 0.5445731383988645;
		object_mOQvwPY.scaleY = 3.176964049886581;
		object_mOQvwPY.setOrigin(0, 0);
		object_ptLEHUV.add(object_mOQvwPY);

		// object_ertAfhF
		const object_ertAfhF = this.add.image(158, 1479, "village", "47");
		object_ertAfhF.scaleX = -0.7101683098224691;
		object_ertAfhF.scaleY = 1.1780424784473118;
		object_ertAfhF.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_ertAfhF);

		// object_ixPFJVa
		const object_ixPFJVa = this.add.image(222, 1478, "village", "47");
		object_ixPFJVa.scaleX = -0.7101683098224691;
		object_ixPFJVa.scaleY = 1.1780424784473118;
		object_ixPFJVa.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_ixPFJVa);

		// object_FfsGLcm
		const object_FfsGLcm = this.add.image(162, 1381, "village", "5");
		object_FfsGLcm.scaleX = 0.3;
		object_FfsGLcm.scaleY = 0.7974303777798181;
		object_FfsGLcm.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_FfsGLcm);

		// object_veGzhaP
		const object_veGzhaP = this.add.image(162, 1393, "village", "5");
		object_veGzhaP.scaleX = 0.3;
		object_veGzhaP.scaleY = 0.7974303777798282;
		object_veGzhaP.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_veGzhaP);

		// object_RGElqjT
		const object_RGElqjT = this.add.image(162, 1404, "village", "5");
		object_RGElqjT.scaleX = 0.3;
		object_RGElqjT.scaleY = 0.7974303777798181;
		object_RGElqjT.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_RGElqjT);

		// object_DLcxfCx
		const object_DLcxfCx = this.add.image(162, 1415, "village", "5");
		object_DLcxfCx.scaleX = 0.3;
		object_DLcxfCx.scaleY = 0.7974303777798282;
		object_DLcxfCx.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_DLcxfCx);

		// object_GQEXaAF
		const object_GQEXaAF = this.add.image(162, 1426, "village", "5");
		object_GQEXaAF.scaleX = 0.3;
		object_GQEXaAF.scaleY = 0.7974303777798282;
		object_GQEXaAF.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_GQEXaAF);

		// object_tCbkJYA
		const object_tCbkJYA = this.add.image(162, 1437, "village", "5");
		object_tCbkJYA.scaleX = 0.3;
		object_tCbkJYA.scaleY = 0.7974303777798181;
		object_tCbkJYA.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_tCbkJYA);

		// object_rHRXYhN
		const object_rHRXYhN = this.add.image(162, 1448, "village", "5");
		object_rHRXYhN.scaleX = 0.3;
		object_rHRXYhN.scaleY = 0.7974303777798282;
		object_rHRXYhN.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_rHRXYhN);

		// object_SDNnPbY
		const object_SDNnPbY = this.add.image(162, 1459, "village", "5");
		object_SDNnPbY.scaleX = 0.3;
		object_SDNnPbY.scaleY = 0.7974303777798282;
		object_SDNnPbY.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_SDNnPbY);

		// object_PAflQJs
		const object_PAflQJs = this.add.image(161, 1472, "village", "5");
		object_PAflQJs.scaleX = 0.3;
		object_PAflQJs.scaleY = 0.7974303777798282;
		object_PAflQJs.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_PAflQJs);

		// object_dvplQMf
		const object_dvplQMf = this.add.image(159, 1373, "village", "47");
		object_dvplQMf.scaleX = -0.7139053451278526;
		object_dvplQMf.scaleY = 0.774186371502988;
		object_dvplQMf.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_dvplQMf);

		// object_szERCoD
		const object_szERCoD = this.add.image(222, 1372, "village", "47");
		object_szERCoD.scaleX = -0.619457458008396;
		object_szERCoD.scaleY = 0.7773715914699639;
		object_szERCoD.setOrigin(0.5, 1);
		object_ptLEHUV.add(object_szERCoD);

		// object_BkhTSqT
		const object_BkhTSqT = this.add.image(163, 1320, "village", "5");
		object_BkhTSqT.scaleX = 0.3;
		object_BkhTSqT.scaleY = 0.7974303777798282;
		object_BkhTSqT.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_BkhTSqT);

		// object_EQjmDHW
		const object_EQjmDHW = this.add.image(163, 1331, "village", "5");
		object_EQjmDHW.scaleX = 0.3;
		object_EQjmDHW.scaleY = 0.7974303777798181;
		object_EQjmDHW.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_EQjmDHW);

		// object_uyiElhs
		const object_uyiElhs = this.add.image(163, 1342, "village", "5");
		object_uyiElhs.scaleX = 0.3;
		object_uyiElhs.scaleY = 0.7974303777798282;
		object_uyiElhs.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_uyiElhs);

		// object_dHgTyoI
		const object_dHgTyoI = this.add.image(163, 1353, "village", "5");
		object_dHgTyoI.scaleX = 0.3;
		object_dHgTyoI.scaleY = 0.7974303777798282;
		object_dHgTyoI.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_dHgTyoI);

		// object_fQwYLzU
		const object_fQwYLzU = this.add.image(162, 1366, "village", "5");
		object_fQwYLzU.scaleX = 0.3;
		object_fQwYLzU.scaleY = 0.7974303777798282;
		object_fQwYLzU.setOrigin(0, 0.5);
		object_ptLEHUV.add(object_fQwYLzU);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1, 1706, 128, 128);
		rectangle_1.scaleX = 15.990357567364983;
		rectangle_1.scaleY = 0.14290967619363032;
		rectangle_1.setOrigin(0, 0.5);

		// rectangle
		const rectangle = this.add.rectangle(227.87783232478887, 1316.85092732875, 128, 128);
		rectangle.scaleX = 10.418777188142663;
		rectangle.scaleY = 0.08152443729489027;
		rectangle.setOrigin(0, 0.5);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(1626.8351720917472, 1318.1397856263268, 128, 128);
		rectangle_2.scaleX = 3.2974970680922118;
		rectangle_2.scaleY = 0.07148436172305088;
		rectangle_2.setOrigin(0, 0.5);

		// object_pmmxZLP (components)
		new SceneExporter(object_pmmxZLP);

		// object_SPeyiUL (components)
		const object_SPeyiULDepth = new Depth(object_SPeyiUL);
		object_SPeyiULDepth.depth = 2;

		// object_bazyvHN (components)
		const object_bazyvHNDepth = new Depth(object_bazyvHN);
		object_bazyvHNDepth.depth = 2;

		// object_dcGUQZl (components)
		const object_dcGUQZlDepth = new Depth(object_dcGUQZl);
		object_dcGUQZlDepth.depth = 2;

		// object_fOZBhGQ (components)
		const object_fOZBhGQDepth = new Depth(object_fOZBhGQ);
		object_fOZBhGQDepth.depth = 2;

		// object_ofByjAh (components)
		const object_ofByjAhDepth = new Depth(object_ofByjAh);
		object_ofByjAhDepth.depth = 2;

		// object_JmPhYsm (components)
		const object_JmPhYsmCollider = new Collider(object_JmPhYsm);
		object_JmPhYsmCollider.up = true;

		// object_hruDMOy (components)
		const object_hruDMOyCollider = new Collider(object_hruDMOy);
		object_hruDMOyCollider.left = true;

		// object_rnlZfyy (components)
		const object_rnlZfyyCollider = new Collider(object_rnlZfyy);
		object_rnlZfyyCollider.right = true;

		// object_FEgfCGt (components)
		new Ladder(object_FEgfCGt);

		// object_KzHcrrI (components)
		new Ladder(object_KzHcrrI);

		// object_CQSOjMQ (components)
		const object_CQSOjMQDepth = new Depth(object_CQSOjMQ);
		object_CQSOjMQDepth.depth = 2;

		// object_PkFgLGt (components)
		const object_PkFgLGtDepth = new Depth(object_PkFgLGt);
		object_PkFgLGtDepth.depth = 2;

		// object_mOQvwPY (components)
		new Ladder(object_mOQvwPY);

		// rectangle_1 (components)
		new Collider(rectangle_1);

		// rectangle (components)
		const rectangleCollider = new Collider(rectangle);
		rectangleCollider.up = true;
		rectangleCollider.left = true;
		rectangleCollider.right = true;

		// rectangle_2 (components)
		const rectangle_2Collider = new Collider(rectangle_2);
		rectangle_2Collider.up = true;
		rectangle_2Collider.left = true;
		rectangle_2Collider.right = true;

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
