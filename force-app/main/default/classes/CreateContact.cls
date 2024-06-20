public class CreateContact {
    @AuraEnabled
    public static void createcontact(List<Contact> conList, String accountId)
    {
        for(Contact c : conList){
            c.AccountId = accountId;
        }
        insert conList;
        system.debug('inserted succesfully');
    }
}