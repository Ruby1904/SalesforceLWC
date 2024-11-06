trigger TaskTrigger on Task(before insert, after insert, after update) {
  //Calling trigger handler class

  TaskTriggerHanlder.closeCase(Trigger.new, Trigger.OldMap);
}
