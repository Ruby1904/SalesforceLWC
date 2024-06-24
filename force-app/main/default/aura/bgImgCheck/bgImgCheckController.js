({
	doInit : function(component, event, helper) {
        var url = $A.get('$Resource.bg_main');
        component.set('v.backgroundImageURL', url);
    }
		
	
})