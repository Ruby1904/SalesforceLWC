({
	handleActive : function(component, event, helper) {
		var tab = event.getSource();
        var tabId = tab.get('v.id');
        switch (tabId) {
            case 'Account' :
                component.set('v.accinfo', 'set acinfo value');
                break;
            case 'Contact' :
                component.set('v.accinfo','set con value');
                break;
            case 'lead':
               
                break;
            case 'case':
                
                break;
        }
        
	}
})