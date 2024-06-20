({
    doinit : function(component, event, helper) {
        var pagereference = component.get('v.pageReference');
        if(pagereference)
        {
            
            var state = pagereference.state;
            component.set('v.orderId',state.c__orderId);
            component.find('recordViewer').reloadRecord();
        }
        
    }
})