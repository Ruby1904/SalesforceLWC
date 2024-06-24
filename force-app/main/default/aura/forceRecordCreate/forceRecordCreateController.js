({
    createcontact: function(component, event, helper) {
        var createrecord = $A.get("e.force:createRecord");
        createrecord.setParams({
            entityApiName: "Contact",
            defaultFieldValues :{
               
                Email: "vrupeshkumar@gmail.com"
            }
            
        });
        createrecord.fire();
    },
    handleChange: function (cmp, event) {
        // This will contain an array of the "value" attribute of the selected options
        var selectedOptionValue = event.getParam("value");
        alert("Option selected with value: '" + selectedOptionValue.toString() + "'");
    }
});