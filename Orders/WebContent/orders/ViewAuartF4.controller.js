sap.ui.controller("orders.ViewAuartF4", {


	
	registerChildren: function (allChildren, oParent){
		var nSelectedChildren = 0;
   		for (var i = 0; i < allChildren.length; i++) {
	   		allChildren[i].attachChange(function(){
	   				this.getChecked() ? nSelectedChildren+=1 : nSelectedChildren-=1;
	   				if(nSelectedChildren === 0){
	   					oParent.toggle("Unchecked");
	   				}
	   				else if(nSelectedChildren === allChildren.length){
	   					oParent.toggle("Checked");
	   				}
	   				else{
	   					oParent.toggle("Mixed");
	   				}
	   			}
	   		);
   		}
   		oParent.attachChange(function(){
     		if (this.getSelectionState() === "Checked"){
     			for (var i = 0; i < allChildren.length; i++) {
  	     			allChildren[i].setChecked(true);
  	     			nSelectedChildren = allChildren.length;
     			}
     		}
     		else {
     			for (var i = 0; i < allChildren.length; i++) {
     				allChildren[i].setChecked(false);
	     				nSelectedChildren = 0;
   				}
   			}
     	});
	},

	createOptions: function(){
		
		var oVLayout = this.byId("layout");
		
		var aChildren = [
		     			new sap.ui.commons.CheckBox("ccb1", {text: "ZSO"}),
		     			new sap.ui.commons.CheckBox("ccb2", {text: "ZPP"}),
		     			new sap.ui.commons.CheckBox("ccb3", {text: "ZRB"})
		     		];	
		     		for (i = 0; i < aChildren.length; i++){
		     			oVLayout.addContent(aChildren[i]);
		     		}
		     		
		this.registerChildren(aChildren, this.byId("allauart"));
		
	},
	
	

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/
   onInit: function() {
	   this.createOptions();
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