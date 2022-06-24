/*global QUnit*/

sap.ui.define([
	"board/controller/AppView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("AppView Controller");

	QUnit.test("I should test the AppView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
