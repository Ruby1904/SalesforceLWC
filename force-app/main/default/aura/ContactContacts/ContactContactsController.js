({
	dohandleEvent : function(component, event, helper) {
		var conRecord = event.getParam('conRecord');
        console.log('conRecord',conRecord);
        var contactList = component.get('v.contactList');
        if(contactList){
            contactList.push(conRecord); 
            component.set('v.contactList',contactList);
        }
        else{
            contactList=[];
            contactList.push(conRecord);
            component.set('v.contactList',contactList);
        }
	},
    handlesave : function(component, event, helper){
        var action = component.get('c.createcontact');
        action.setParams({
            conList : component.get('v.contactList'),
            accountId : component.get('v.recordId')
        });
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS" || state === "DRAFT"){
                $A.get('e.force:refreshView').fire();
            }else if(state === "INCOMPLETE"){
                
            }else if(state === "ERROR"){
                var errors = response.getError();
                console.log('errors', errors)
            }
            
        },'ALL');
        $A.enqueueAction(action);
    },
    handleselectvent : function(component, event, helper){
        alert('Event handled')
        var selectEvent = event.getParam('Contact');
        console.log('selectEvent',selectEvent.FirstName);
    }
})