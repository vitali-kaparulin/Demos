sap.ui.jsview("demos.HelloView", {

      getControllerName : function() {
         return "demos.HelloView";
      },

      createContent : function(oController) {
          var aControls = [];
          var oButton = new sap.ui.commons.Button({
                          id : this.createId("MyButton"),
                          text : "Hello JS View"
          });
          aControls.push(oButton.attachPress(oController.doIt));
          return aControls;
      }

});
