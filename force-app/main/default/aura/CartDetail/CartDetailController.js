({
    doInit : function(component, event, helper) {
        var pageReference = component.get('v.pageReference');
        if(pageReference){
            var state = pageReference.state;
            if(state.c__cartId){
                component.set('v.CartId',state.c__cartId);
                var action = component.get('c.getCartItems');
                action.setParams({
                    CartId : state.c__cartId
                });
                action.setCallback(this,function(response){
                    var stateresponse = response.getState();
                    if(stateresponse === 'SUCCESS' || stateresponse === 'DRAFT')
                    {
                        var resultData = response.getReturnValue();
                        console.log('resultData',resultData);
                        var items=[];                         // empty list
                        var subTotal;
                        for(var key in resultData){          // getting map value in key
                            items.push(resultData[key]); 		// gettting value using index of
                            if(subTotal)
                            {
                                subTotal = subTotal + resultData[key].Total_Amount__c
                            }else{
                                subTotal = resultData[key].Total_Amount__c
                            }
                        }
                        component.set('v.subTotal',subTotal);
                        component.set('v.cartItemList',items);
                        component.find('CreateRecord').getNewRecord(
                            'Address_Book__c',
                            null,
                            false,
                            $A.getCallback(function() {
                                var record = component.get('v.record');
                                var error = component.get('v.recordError');
                                if (error || record === null) {
                                    console.log("Error while creating template", error);
                                } else {
                                    console.log("Success");
                                }
                            })
                        );
                    }else if(stateresponse === 'INCOMPLETE'){
                        console.log('User is offline system does not support offline');
                    }else if(stateresponse === 'ERROR'){
                        var errors = response.getError();
                        if(errors || errors[0].pageMessage){
                            console.log('Page Error', errors[0].pageMessage);
                        }
                        if(errors || errors[0].duplicateResults){
                            console.log('Duplicate Error', errors[0].duplicateResults);
                        }
                    }else{
                        
                    }
                });
                $A.enqueueAction(action);    
            }else{
                console.log('else');
            }
        }
    },
    homePage : function(component, event, helper){
        
        var pageReference = component.find("navigation");
        var PageReferenceNav ={
            type: 'standard__navItemPage',
            attributes : {
                apiName : "Beer_Explorer"
            }
        };
        pageReference.navigate(PageReferenceNav);
        
    },
    applycoupon : function(component, event, helper){
        component.set('v.isCouponApplied',true);
    },
    doapplyCoupon :  function(component, event, helper){
        var CouponNo= component.find('CouponNo').get('v.value');
        var cartId = component.get('v.CartId')
        if(CouponNo)
        {
            var action =  component.get('c.checkCoupon');
            action.setParams({
                Name : CouponNo,
                CartId : cartId
            });
            action.setCallback(this,function(response){
                var state = response.getState();
                if(state === 'SUCCESS' || state === 'DRAFT'){
                    var resultData =  response.getReturnValue();
                    if(resultData){
                        component.set('v.discountAmount',resultData);
                        component.set('v.errorDiscount',null);
                        component.set('v.isCouponSuccess',true);
                    }else{
                        component.set('v.errorDiscount','Coupon is not valid or expired');
                        component.set('v.discountAmount',null);
                        component.set('v.isCouponSuccess',false);
                    }
                }
            });
            $A.enqueueAction(action);
        }else{
            alert('Please enter Coupon Code');
        }
    },
    docheckout : function(component, event, helper){
        component.set('v.isCheckout',true);
    },
    doSaveAddress  : function(component, event, helper){
        var isValidAddress = helper.validate(component, event, helper);
        if(isValidAddress){
            var userId = $A.get("$SObjectType.CurrentUser.Id");
            component.set('v.addressBook.User__c',userId);
            component.find('CreateRecord').saveRecord(function(saveResult){
                if(saveResult.state === 'SUCCESS' || saveResult.state === 'DRAFT'){
                    var showToast = $A.get('e.force:showToast');
                    showToast.setParams({
                        "title" : "Record Saved",
                        "type" : "success",
                        "message" : "Address Book has been saved " + saveResult.recordId
                    });
                    showToast.fire();
                    var addrlist=[];
                    var addresslist = component.get('v.addressList');
                    if(addresslist){
                        addresslist.push(component.get('v.addressBook'));
                        component.set('v.addressList',addresslist);
                    }else{
                        addrlist.push(component.get('v.addressBook'));
                        component.set('v.addressList',addrlist);
                    }
                    component.set('v.isNewAddress',false);
                }else if(saveResult.state === 'INCOMPLETE'){
                    console.log('User is offline and system does not support offline!.');
                }else if(saveResult.state === 'ERROR'){
                    var errors = response.getError();
                    console.log('Error occured ',errors);
                }else{
                    
                }
            })
            
        }
    },
    getAddress : function(component, event, helper){
        var isTrue = component.get('v.isCheckout');
        if(isTrue)
        {
            helper.fetchAddress(component, event, helper);
        }
    },
    onSelect : function(component, event, helper){
        var selected = event.getSource().get("v.text");
        var checked = event.getSource().get("v.value");
        var allAddress = component.get('v.addressList');
        var selectedAddress = allAddress[selected];
        console.log('selectedAddress',selectedAddress);
        component.set('v.selectedAddress',selectedAddress);
    },
    placeOrder : function(component, event, helper){
        var selectedAdd = component.get('v.selectedAddress');
        var cartId = component.get('v.CartId');
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        if(selectedAdd){
            var action = component.get('c.createOrder');
            action.setParams({
                addressId : selectedAdd.Id,
                cartId : cartId,
                UserId : userId,
                subTotal : component.get('v.subTotal')
            });
            action.setCallback(this,function(response){
                var state = response.getState();
                var responseData = response.getReturnValue();
                if(state === 'SUCCESS' || state === 'DRAFT'){
                    var showToast = $A.get('e.force:showToast');
                    showToast.setParams({
                        "title" : "Record Saved",
                        "type" : "success",
                        "message" : "Your Order has been Successfully Placed Thank You!."+
                        "Your tracking Order No is" +' '+ responseData.split('####')[0]
                        				
                    });
                    showToast.fire();
                   // alert(responseData.split('####')[1]);
                    var pageReference = component.find("navigation");
                    var PageReferenceNav ={
                        type: 'standard__recordPage',
                        attributes : {
                            recordId : responseData.split('####')[1],
                            objectApiName : "Order__c",
                            actionName : "view"
                        }
                    };
                    pageReference.navigate(PageReferenceNav);
                }else if(state === 'INCOMPLETE'){
                    console.log('User is offline and system does not support offline!.');
                }else if(state === 'ERROR'){
                    var errors = response.getError();
                    console.log('Error occured',errors);
                }else{
                    
                }
            });
            $A.enqueueAction(action);
            
        }else{
            alert('order not placed')
        }
    },
    addNewAddress : function(component, event, helper){
        alert('inside new')
        component.set('v.isNewAddress',true);
    
	}
})