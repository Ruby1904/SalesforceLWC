({
    doInit: function(component, event, helper) {
        var action = component.get("c.getcontacts");
        action.setParams({
            accid: component.get("v.recordId")
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS") {
                var result = a.getReturnValue();
                console.log("result", result);
                component.set("v.listofcon", result);
            }
        });
        $A.enqueueAction(action);
    },
    doredirect: function(component, event, helper) {
        var eventsource = event.getSource();
        var id = eventsource.get("v.name");
        
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId":id,
            "slideDevName": "related"
        });
        navEvt.fire();
    },
    loaded : function(component, event, helper){
        alert('scripts loaded')
    }
});