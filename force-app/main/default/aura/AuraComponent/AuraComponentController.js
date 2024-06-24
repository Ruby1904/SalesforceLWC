({
	handleClick : function(component, event, helper) {
		 var recordId = component.get("v.recordId");
         var action =  component.get('c.getContactCount');
            action.setParams({
                accRecordId : recordId
            });
        action.setCallback(this,function(response){
                var state = response.getState();
                if(state === 'SUCCESS' || state === 'DRAFT'){
                    var resultData =  response.getReturnValue();
                    if(resultData!=null){
                        component.set('v.contactCount',resultData);
                }
                }
            });
            $A.enqueueAction(action);
	}
})