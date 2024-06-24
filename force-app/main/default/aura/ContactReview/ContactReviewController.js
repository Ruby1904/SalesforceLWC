({
	RemoveRecord : function(component, event, helper) {
        var index =  event.currentTarget.id;
        var existingRecords = component.get('v.ContactRecords');
        existingRecords.splice(index, 1); 
        component.set('v.ContactRecords',existingRecords);
      
		
	},
    EditRecord : function(component, event, helper){
        var index =  event.currentTarget.id;
        var existingRecords = component.get('v.ContactRecords');
        var selectedRecord = existingRecords[index];
        console.log('selectedRecord',selectedRecord);
        
        var selectEvent= component.getEvent('SelectRecordEvent');
        selectEvent.setParams({
            
          Contact : selectedRecord
        });
        selectEvent.fire();
    }
})