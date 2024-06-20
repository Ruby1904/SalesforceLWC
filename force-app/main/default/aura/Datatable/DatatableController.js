({
    doInit: function(component, event, helper) {
        var actions = [{
            label : 'show Details',
            name : 'show_details',
            iconName : 'action:preview'
        },
                       {
                           label : 'Delete',
                           name : 'delete',
                           iconName : 'action:delete'
        }];
        component.set("v.column", [
            { label: "Account name", fieldName: "Name", type: "text" },
            { label: "Industry", fieldName: "Industry", type: "text" },
            { label: "Rating", fieldName: "Rating", type: "text" },
            { label: "Phone", fieldName: "Phone", type: "phone" },
            
            {type : "action", typeAttributes : {rowActions : actions}}
            
        ]);
        var action = component.get("c.fetchAccount");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" || state === "DRAFT") {
                var responseValue = response.getReturnValue();
                console.log(responseValue);
                component.set('v.data', responseValue);
            }
        });
        $A.enqueueAction(action);
    },
    doSelectRecord : function(component, event, helper){
        var selectedRows =  event.getParam('selectedRows');
        console.log('selectedRows',selectedRows);
    },
    handlerowaction  : function(component, event, helper){
        var action = event.getParam('action');
        var row = event.getParam('row');
        console.log('action',action.name);
        console.log('row',row.Id);
        switch(action.name){
            case 'show_details' :
                alert(row.Id);
                break;
            case 'delete' :
                var data = component.get('v.data');
                var index = data.indexOf(row);
                data.splice(index, 1);
                component.set('v.data',data);
                break;
        }

    }
   // handleSave : function(component, event, helper){
     //   var saverecords = event.getParam('saverecords');
      //  console.log('saverecords',saverecords);
    //}
});