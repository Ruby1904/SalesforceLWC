trigger Acct_Opp_Bupdate on Account (before insert, after insert) {
	AccountTriggerhandler.afterinsert();
    system.debug('Acc record'+Trigger.new);
}