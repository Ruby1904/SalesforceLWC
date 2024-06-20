({
	dosave : function(component, event, helper) {
        var action = component.get("c.createcontact");
        action.setParams({
            con: component.get('v.CreateContact'),
            AccountId: component.get('v.accountId')
        });
        action.setCallback(this,function(response){
           
        	var state = response.getState();
            alert(state)
          
            if(state === 'SUCCESS' || state === 'DRAFT')
            {
                var responsevalue = response.getReturnValue();
            }
            else if(state === 'INCOMPLETE'){
                
            }
            else if(state === 'ERROR'){
               var errors = response.getError();
               console.log('errors',errors);
            }
                
            
            
        }),'ALL';
		$A.enqueueAction(action);
	}
})