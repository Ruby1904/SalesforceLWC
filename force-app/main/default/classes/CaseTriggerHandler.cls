public class CaseTriggerHandler{

    public static void updateCaseStatus(List<Case> caseRec){
        System.debug('caseRec :'+caseRec);
        List<Case> updateCaseList = new List<Case>();
        for(Case c : caseRec){
            if(c.Origin == 'Email'){
//                Case cRec = new Case();
                //cRec.Id = c.Id;
                //System.debug('Id'+cRec.Id);
                c.Priority = 'Medium';
                c.Status = 'New';
                updateCaseList.add(c);
            }
        }
        System.debug('updateCaseList  :'+updateCaseList);
        if(updateCaseList.size() > 0){
            System.debug('Insert');
                Insert updateCaseList;
        }
    }
}