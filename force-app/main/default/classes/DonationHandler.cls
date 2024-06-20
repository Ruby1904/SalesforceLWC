public class DonationHandler {
    public static void UpdateTotalDonationAmount(Map<Id,Donation__c> OldMap, String Operation){
        Map<Id,Decimal> DonorAmountKey = new Map<Id,Decimal>();
        Set<Id> setOfDonorIds = new Set<Id>();
        for(Sobject donationRec : Trigger.new){
            Donation__c donationRecnew = (Donation__c)donationRec;
            system.debug('donacationRecOld'+OldMap);
            if(Operation == 'Update'){
               
                
            }else{
                Donation__c donation = (Donation__c)donationRec;
                setOfDonorIds.add(donation.Donor_Account__c);
            }
            
        } 
        Map<Id,Donation__c> donations = new Map<Id,Donation__c>([Select Id,Amount__c,Donor_Account__c from Donation__c where Donor_Account__c in:setOfDonorIds]);
        for(Donation__c donationsRec : donations.values()){
            if(DonorAmountKey.containsKey(donationsRec.Donor_Account__c)){
                Decimal tempAmount = DonorAmountKey.get(donationsRec.Donor_Account__c);
                tempAmount = tempAmount + donationsRec.Amount__c;
                DonorAmountKey.put(donationsRec.Donor_Account__c,tempAmount);
            }else{ 
                 DonorAmountKey.put(donationsRec.Donor_Account__c,donationsRec.Amount__c);
            }
           
        }
        List<Donor__c> updateDonorList = new List<Donor__c>();
        for(Donor__c donorRec : [Select Id,Total_Donation_Amount__c from Donor__c where Id in:DonorAmountKey.keySet()]){
            if(DonorAmountKey.containsKey(donorRec.Id)){
               donorRec.Total_Donation_Amount__c =  DonorAmountKey.get(donorRec.Id);
               updateDonorList.add(donorRec);
            }
        } 
        update updateDonorList;
    }
}