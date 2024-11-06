trigger TaksTrigger on Task(after update) {
  TaskTriggerHanlder.closeCase(Trigger.new, Trigger.oldMap);
}
