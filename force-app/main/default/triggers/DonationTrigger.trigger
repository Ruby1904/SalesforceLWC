trigger DonationTrigger on Donation__c (before insert,before update,after insert,after update) {
    //Hanlder class for Donation trigger
    String Operation;
    if(Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate)){
        if(Trigger.isUpdate){
            Operation = 'Update';
        }
        DonationHandler.UpdateTotalDonationAmount(Trigger.OldMap,Operation);
    }
}