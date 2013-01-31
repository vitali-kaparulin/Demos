sap.ui.controller("demos.UpdateView", {


setSelected : function( ){
		
		

		
		if(this.byId("material").getSelectedKey()){
			this.byId("MatNumber").setValue(this.byId("material").getSelectedKey());
			this.byId("MatText").setValue(this.byId("material").getValue());
		}
		
		

	}, 
	
	setDropValues: function() {
		   
		// create a JSONModel, fill in the data and bind the Table to this model
			var url    = "proxy/http/uedcb422.frmon.danet:1080/sap/bc/z_json_demo";
			
			var oParameters = {
					   "sap-client"  : "199",
			           "data"        : "materials",
	        };
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData(url, oParameters, false, 'GET');

			var oItemTemplate = new sap.ui.core.ListItem();  
			oItemTemplate.bindProperty("key", "TGROUP"); 
			oItemTemplate.bindProperty("text", "TGROUP_TXT");  
			oItemTemplate.bindProperty("additionalText", "TGROUP");  
			   
			this.byId("material").setModel(oModel);  
			this.byId("material").bindItems("/", oItemTemplate);  			
			
			
		},
		
		saveJson : function(oEvent) { 
			

			var url    = "proxy/http/uedcb422.frmon.danet:1080/sap/bc/z_json_demo";
			
			var oParameters = {
					   "sap-client"  : 199,
			           "material"    : this.byId("MatNumber").getValue(),
			           "description" : this.byId("MatText").getValue(),
	        };
			
	        // POST
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData(url, oParameters, false, 'POST');
			
			//Get result
			var oData = oModel.getJSON();
			var aData = JSON.parse( oData );
			
			jQuery.sap.require("sap.ui.commons.MessageBox");
			
			if(aData.TYPE != 'E'){
				
				// Update the dorpdownBox
				
				var aItems    = this.byId("material").getItems();
				
				
				aItems.forEach(function(item){

					if (item.getProperty("key") == oParameters.material ){
						item.setProperty("text", oParameters.description);
					}
				});
				
				sap.ui.commons.MessageBox.show(aData.MESSAGE, 
				sap.ui.commons.MessageBox.Icon.SUCCESS , "Material Saved", 
				sap.ui.commons.MessageBox.Action.OK);
				
			}else{
				
				sap.ui.commons.MessageBox.show(aData.MESSAGE, 
				sap.ui.commons.MessageBox.Icon.CRITICAL , "Material Not Saved", 
				sap.ui.commons.MessageBox.Action.OK);
			}
			
			
			
			
			// check return
			
			//return oModel;
		},
		
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/
   onInit: function() {
	   this.byId("details").setWidths("15%", "15%", "70%");
	   this.setDropValues();
	   this.setSelected();
   },

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
*/
//   onBeforeRendering: function() {
//
//   },

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
*/
//   onAfterRendering: function() {
//
//   },

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*/
//   onExit: function() {
//
//   }

});