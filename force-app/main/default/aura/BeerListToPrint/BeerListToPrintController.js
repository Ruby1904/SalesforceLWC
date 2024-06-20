({
  showinfo: function(component, event, helper) {
    var evt = event.getSource();
    var beeridvalue = evt.get('v.name');
    var beerName = evt.get('v.value');
    component.set("v.beerId", beeridvalue);
    $A.createComponent( 
      "c:BeerDetails",
      {
        "beerId" : beeridvalue,
        "beerName" : beerName
      },
      function(BeerDetails, status, errorMessage) {
        if (status === "SUCCESS") {
          component.find("overlayLib").showCustomModal({
            header: "Beer Details of Which You Selected",
            body: BeerDetails,
            footer: "This is footer",
            showCloseButton: true,
            closeCallback: function() {}
          });
        } else if (status === "INCOMPLETE") {
          console.log("No response from server or client is offline.");
        } else if (status === "ERROR") {
          console.log("Error:" + errorMessage);
        }
      }
    );
  },
    addtocart : function(component, event, helper){
        var evt = event.getSource();
        var beeridvalue = evt.get('v.name');
        var index = evt.get('v.value');
        var selectedbeer = component.get('v.beerRecords')[index];
        //alert(selectedbeer.Id);
        var addToCartevent = component.getEvent('addToCart');
        addToCartevent.setParams({
            beerRecord : selectedbeer
        });
        addToCartevent.fire();
    },
    dobuy : function(component, event, helper) {
      	var evt = event.getSource();
        var pageReference = component.find("navigation");
        var pageReferenceNav={
             type: 'standard__component',
             attributes : {
                componentName : "c__CreateBeerOrder"
            },
             state : {
                  c__beerId :  evt.get('v.name'),
                  c__beerName : evt.get('v.value')
                
            }
        };
        pageReference.navigate(pageReferenceNav);
	}
});