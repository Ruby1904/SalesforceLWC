({
    ValidateFields : function(component, event, helper) {
        var isValid = component.find('newcontact').reduce(function(validFields, inputCmp){
            inputCmp.showHelpMessageIfInvalid();
            inputCmp.set('v.validity', {valid:false, badInput :true});
            return validFields && inputCmp.get('v.validity').valid;
        },true);
        return isValid
    }
    
})