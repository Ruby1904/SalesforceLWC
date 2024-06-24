({
	handlecomponent : function(component, event, helper) {
        var searchParam = event.getParam('searchText');
        var action = component.get('c.getbeers');
        action.setParams({
            searchValue : searchParam
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS')
            {
                var result = response.getReturnValue();
                console.log('result',result);
                component.set('v.beerlist',result);
            }else{
                console.log(response.getError());
            } 
            
        });
        $A.enqueueAction(action);
		
	},
    updateCart : function(component, event, helper){
        var params = event.getParam('beerRecord');
        var headercmp = component.find('headercomp');
        headercmp.updateCart(params)
    }
    
})