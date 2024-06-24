public class ContactDummyDataInsert {
    public static void InsertMethod(){
        List<Contact> L1 = new List<Contact>();
        for(Integer i=1;i<=1000;i++){
            Contact c = new Contact();
            c.LastName = 'Daisy';
            L1.add(c);
        }
        Insert L1;
        System.debug(L1);
    }
}