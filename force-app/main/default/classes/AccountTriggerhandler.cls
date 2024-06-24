public class AccountTriggerhandler
{
	public static void afterinsert()  
    {
        for(Account Acc :(List<Account>)Trigger.new){
            System.debug('Account Record'+Acc);
        }
    
    }
      
}