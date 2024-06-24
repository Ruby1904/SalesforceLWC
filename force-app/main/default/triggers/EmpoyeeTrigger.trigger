trigger EmpoyeeTrigger on Employee__c (before insert,before update,after insert,after update,after delete) {
//Calling Handler class
    if(Trigger.isInsert && Trigger.isAfter){
        EmployeeTriggerHandler.triggerMethod(null,Trigger.newMap);
    }
    else if(Trigger.isUpdate && Trigger.isAfter){
        EmployeeTriggerHandler.triggerMethod(Trigger.old,null);
    }
    else if(Trigger.isDelete && Trigger.isAfter){
        EmployeeTriggerHandler.triggerMethod(Trigger.old,null);
    }
}