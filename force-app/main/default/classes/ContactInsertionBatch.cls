public class ContactInsertionBatch implements Database.Batchable<sObject>{
    
    public Database.QueryLocator start(Database.BatchableContext bc) {
        
        String query = 'SELECT AccountId, LastName, Name,Phone FROM Contact ';
        return Database.getQueryLocator(query);
    }
    
    public void execute(Database.BatchableContext BC, list<Contact> scope){
        integer count=0;
        List<Account> accounts = new List<Account>();
        List<Contact> updatecontacts = new List<Contact>();
        Set<Id> setAccIds = new Set<Id>();
        system.debug(scope.Size());
        for(Contact con : scope) {
            count++;
            system.debug('If inside');
            Account acc = new Account();        
            acc.Name = con.LastName;
            accounts.add(acc);
            System.debug(acc.Id);
            
        }
        insert accounts;
        System.debug(accounts[0].Id);
        for(Account acc : [ select id from Account where Id in : setAccIds])
        {
            for(Contact con : scope) {
                updatecontacts.add(con);
                con.AccountId = acc.Id;
            }    
        }
        update updatecontacts;
        system.debug(count);
    }
    
    public void finish(Database.BatchableContext BC){
    }
}