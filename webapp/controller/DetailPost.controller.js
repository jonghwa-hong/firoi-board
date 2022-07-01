sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("board.controller.DetailPost", {

		onNavBack: function() {
			console.log(1);
			this.getOwnerComponent().getRouter().navTo('Board');
		},

		post: function() {
			
		}
	});
});