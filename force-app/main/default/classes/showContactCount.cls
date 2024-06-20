public class showContactCount {

    @AuraEnabled
    public static Integer getContactCount(String accRecordId){
        Integer contactCount=0;
        List<Account>  accList = [Select  (Select Id from contacts) from account where Id=:accRecordId];
        for(Account acc : accList){
            contactCount = acc.contacts.size();
        }
        System.debug('contact count :'+ contactCount);
        return contactCount;
    }
}