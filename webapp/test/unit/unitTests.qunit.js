/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"board/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
