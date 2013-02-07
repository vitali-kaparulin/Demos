sap.ui.controller("orders.ViewHistory", {


/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
*/

   setVkorg: function() {
	   // drop down JSON
	   var oData = 	[	{ 	key:  "6500",
		                	text: "6500 DANONE SOUTH AFRICA"
	   				  	},
	   				  	{ 	key:  "6300",
	   				  		text: "6300 DANONE NORTH AFRICA"
	   				  	}
	   				];
			         
	 //Create a model and bind the table rows to this model
	   var oModel = new sap.ui.model.json.JSONModel();
	   oModel.setData(oData);
	   
	   var oItemTemplate = new sap.ui.core.ListItem();  
		oItemTemplate.bindProperty("key", "key"); 
		oItemTemplate.bindProperty("text", "text");  
		   
		this.byId("dropvkorg").setModel(oModel);  
		this.byId("dropvkorg").bindItems("/", oItemTemplate); 
   },
	
   setVtweg: function() {
	   // drop down JSON
	   var oData = 	[	{ 	key:  "00", text: "00 Retail"  	},

	   				  	{ 	key:  "01", text: "01   Away From Home"  	},
	   				  	{ 	key:  "02", text: "02   B To C / Traditional"  	},
	   				  	{ 	key:  "03", text: "03   Export"  	},
	   				  	{ 	key:  "04", text: "04   Intercompany"  	},
	   				  	{ 	key:  "05", text: "05   Others"  	},
	   				  	{ 	key:  "06", text: "06   Health"  	}

	   				];
			         
	 //Create a model and bind the table rows to this model
	   var oModel = new sap.ui.model.json.JSONModel();
	   oModel.setData(oData);
	   
	   var oItemTemplate = new sap.ui.core.ListItem();  
		oItemTemplate.bindProperty("key", "key"); 
		oItemTemplate.bindProperty("text", "text");  
		   
		this.byId("dropvtweg").setModel(oModel);  
		this.byId("dropvtweg").bindItems("/", oItemTemplate); 
   },
	
   
   onInit: function() {
	   this.byId("mHistory").setModel(oTexts,"text");
	   this.byId("mSelections").setWidths("6%", "5%", "15%", "8%", "10%", "8%","10%", "10%");
	   this.byId("tTable").setVisible(false);
   },
   
   addTable: function(){
	   var oData = {
				root:{
					vbeln: "root",
					ebeln: "root description",
					checked: false,
					0: {
						vbeln: "306024",
		    			ebeln: "Ref SHP004",
		    			value: "450",
		    			status: "Blocked",
		    			checked: true,
						0: {
							vbeln: "10 62912",
		        			ebeln: "Material description",
		        			value: "150",
		        			omenge:25,
		        			dmenge:25,
		        			pmenge:25,
		        			checked: true							
						},
						1: {
							vbeln: "20 52403",
		        			ebeln: "Material description",
		        			value: "300",
		        			omenge:30,
		        			dmenge:26,
				        		checked: true,
						}
						
					},
					1:{
						vbeln: "306023",
		    			ebeln: "Ref SHP1522",
		    			value: "1548",
		    			status: "",
		    			checked: true,
						0: {
							vbeln: "10 47896",
		        			ebeln: "Material description",
		        			value: "1548",
		        			omenge:60,
		        			dmenge:50,
		        			pmenge:50,
		        			rmenge:10,
		        			checked: true
						}
					}					
				}
		};
	   
	   //Create a model and bind the table rows to this model
	   var oModel = new sap.ui.model.json.JSONModel();
	   oModel.setData(oData);

	   oTable = this.byId("tTable");
	   oTable.setModel(oModel);
	   oTable.bindRows("/root");
	   
   },
   
   searchOrders: function() {
	   this.byId("pHistory").setCollapsed(true);
	   this.byId("search").setVisible(false);
	   this.byId("new").setVisible(true);
	   this.addTable();
	   this.byId("tTable").setVisible(true);
   },
   
   initSearch: function(){
	   this.byId("pHistory").setCollapsed(false);
	   this.byId("search").setVisible(true);
	   this.byId("new").setVisible(false);
	   this.byId("tTable").setVisible(false);
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
	onAfterRendering: function() {
		this.setVkorg();
		this.setVtweg();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
*/
//   onExit: function() {
//
//   }

});