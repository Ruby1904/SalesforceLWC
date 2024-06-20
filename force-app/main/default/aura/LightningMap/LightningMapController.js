({
	doInit : function(component, event, helper) {
        var mapmarkers=[{
            location: {
                Street:"Asiriyar Nagar",
                City:"Tirupattur",
                State:"TAMILNADU",
                PostalCode:"635601",
                Country:"INDIA"
            },
            title:"Test Account",
            description:"Test description",
            icon: "standard:account"
        }];
        component.set('v.mapMarkers',mapmarkers);
        component.set('v.zoomLevel',10);
		
	}
})