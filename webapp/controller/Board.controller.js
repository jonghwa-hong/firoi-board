sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel", 'sap/m/Link'],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Link) {
        "use strict";

        return Controller.extend("board.controller.Board", {
            onInit: function () {
                this.oModel = this.getOwnerComponent().getModel();
                this.addBreadCrumb(this.byId("breadcrumb"));
            },

            onNavDetailPage: function(oEvt) {
              console.log(oEvt.getSource());
              this.getOwnerComponent().getRouter().navTo('detailBoard');
            },

            addBreadCrumb : function (oBreadCrumb) {
                const oLink = new Link({
                  text: 'bread crumb',
                  press: () => {
                    window.alert('hi');
                  }
                });
                oBreadCrumb.addLink(oLink);
            },

            onPress: function (oEvt) {
                console.log(oEvt);
                this.getOwnerComponent().getRouter().navTo('postBoard');
            },
            onAfterRendering: async function () {
                console.clear();
                // const that = this;
                // this.oModel.read("/BoardHong", {
                //   async: true,
                //   success: function (oData, response) {
                //     console.log(oData.results);
                //     const oModel = new JSONModel(oData.results);
                //     const tempModel = that.getView().setModel(oModel, "tableModel");
                //     console.log(tempModel);
                //     console.log('😊');
                //   },
                //   error: function (response) {
                //     window.alert("soory");
                //   },
                // });
              },
        });
    });
