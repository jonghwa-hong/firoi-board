sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("board.controller.EditPost", {
        onInit() {
            this.oModel = this.getOwnerComponent().getModel();

        },

        onNavBack: function (oEvt) {
            console.log(oEvt);
            this.getOwnerComponent().getRouter().navTo('Board');
        },

        post: function (oEvt) {
          const oData = {
            id: Number(this.byId('id').getValue()),
            title: this.byId('title').getValue(),
            content: this.byId('content').getValue()
        };
          console.log(oData);
          this.oModel.create("/BoardHong", oData, {
              async: true,
            success: function (oData, response) {
              console.log(oData);
              console.log(response);
            },
            error: function (response) {
              window.alert("sorry");
            },
          });

        }

	});
});