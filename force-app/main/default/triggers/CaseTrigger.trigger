trigger CaseTrigger on Case (before insert) {
     System.debug('newRecord  :'+Trigger.new);
    if(Trigger.isBefore && Trigger.isInsert){
         CaseTriggerHandler.updateCaseStatus(Trigger.new);
    }
    
}