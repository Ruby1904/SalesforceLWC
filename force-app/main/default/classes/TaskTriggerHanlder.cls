public class TaskTriggerHanlder {
  public static void closeCase(
    List<Task> newTaskList,
    Map<Id, Task> oldTaskMap
  ) {
    if (!EmployeeTriggerHandler.StopRecursion) {
      List<Case> caseListToUpdate = new List<Case>();
      Set<Id> CaseIds = new Set<Id>();
      if (!newTaskList.isEmpty()) {
        for (Task taskRec : newTaskList) {
          if (oldTaskMap != null) {
            Task oldRec = oldTaskMap.get(taskRec.Id);
            if (oldRec.Status != taskRec.Status) {
              if (taskRec.Status == 'Deferred') {
                //taskIds.add(taskRec.WhatId);
                String sObjName = taskRec.WhatId.getSObjectType()
                  .getDescribe()
                  .getName();
                if (sObjName == 'Case') {
                  CaseIds.add(taskRec.WhatId);
                }
              }
            }
          }
        }
      }
      for (Case caseRec : [
        SELECT Id, Status, (SELECT id, Status FROM Tasks)
        FROM Case
        WHERE Id IN :CaseIds
      ]) {
        if (caseRec.Tasks != null) {
          Integer i = 0;
          System.debug('initial value : ' + i);
          Integer taskSize = caseRec.Tasks.Size();
          System.debug('taskSize : ' + taskSize);
          for (Task tempTaskRec : caseRec.Tasks) {
            i++;
            System.debug('inside loop i value : ' + i);
            if (i == taskSize && tempTaskRec.Status == 'Deferred') {
              System.debug('Task Record : ' + tempTaskRec);
              System.debug('Success');
              caseRec.Status = 'Escalated';
              caseListToUpdate.add(caseRec);
            }
          }
        }
      }

      if (caseListToUpdate.size() > 0) {
        EmployeeTriggerHandler.StopRecursion = true;
        update caseListToUpdate;
      }
    }
  }
}
