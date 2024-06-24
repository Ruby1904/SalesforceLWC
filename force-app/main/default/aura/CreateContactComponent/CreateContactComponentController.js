({
	handleReview : function(component, event, helper) {
        var isValid = helper.ValidateFields(component, event, helper);
        if(isValid){
			var componentEvent = component.getEvent('CreateContacts')
            component.set('v.ContactRecord.AccountId', component.get('v.recordId'));
            componentEvent.setParams({
                conRecord : component.get('v.ContactReord')
            });
            componentEvent.fire();
        }
        else{
            alert('Please enter all details')
        }
        
	}
})