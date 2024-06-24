public class contactlistController {
    
	@AuraEnabled
    public static List<contact> getcontacts(String accid)
    {
        List<contact> con = new List<contact>();
        con = [select FirstName,Id,LastName,Phone,Email from contact where Email !=null AND AccountId=:accid];
        return con;
    } 
    @AuraEnabled
    public static Contact createcontact(Contact con,Id AccountId)
    {
        con.AccountId = AccountId;
        insert con;
        return con;
    }

}