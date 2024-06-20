public class DatatableAuraService {
    @AuraEnabled
    public static List<Account> fetchAccount()
    {	
        return [Select Id,Name,Industry,Phone,Rating from Account limit 5];
    }

}