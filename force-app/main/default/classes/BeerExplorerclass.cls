public class BeerExplorerclass {
    
    @AuraEnabled
    public static List<sObject> getbeers(String searchValue)
    {
        List<sObject> b = new List<sObject>();
        String x = '%'+searchValue+'%';
        if(searchValue !=null)
        {
            b = [select Id,Name,Alcohol__c,Total__c,Remaining_Quantity__c,Price__c from Beer__c where Name like :x LIMIT 12];
        }
        else{
            b = [select Id,Name,Alcohol__c,Total__c,Remaining_Quantity__c,Price__c from Beer__c LIMIT 12];
        }
         return b;
        
    }
   
     

}