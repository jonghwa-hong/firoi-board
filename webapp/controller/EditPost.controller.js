sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("board.controller.EditPost", {
        onInit() {
        },

        onNavBack: function (oEvt) {
            console.log(oEvt);
            this.getOwnerComponent().getRouter().navTo('Board');
        }
	});
});