({
	createmodal : function(component, event, helper) {
		 component.find('overlayLib').showCustomModal({
                       header: "Application Confirmation",
                       body: 'This is for testing purpose',
                       footer:'this is footer', 
                       showCloseButton: true,
                       closeCallback: function() {
                           alert('You closed the alert!');
                       }
                   })
	}
})