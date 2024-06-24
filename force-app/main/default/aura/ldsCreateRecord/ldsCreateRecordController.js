({
    doInit: function(component, event, helper) {
        component.find('CreateRecord').getNewRecord(
            'Beer__c',
            null,
            false,
            $A.getCallback(function() {
                var record = component.get('v.record');
                var error = component.get('v.recordError');
                if (error || record === null) {
                    console.log("Error while creating template", error);
                } else {
                    console.log("Success");
                }
            })
        );
    },
    handleSave: function(component, event, helper){
        component.set('v.recordFields.id__c','9867');
        component.find('CreateRecord').saveRecord(function(saveResult){
            if(saveResult.state === 'SUCCESS' || saveResult.state === 'DRAFT'){
                var showToast = $A.get('e.force:showToast');
                showToast.setParams({
                    "title" : "Record Saved",
                    "type" : "success",
                    "message" : "Beer Record has been saved " + saveResult
                });
                showToast.fire();
            }else if(saveResult.state === 'INCOMPLETE')
            {
                
            }
            else if(saveResult.state === 'ERROR')
            {
                
            }else{
                
            }
        })
    }
});