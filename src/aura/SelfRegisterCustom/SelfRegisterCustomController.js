({
    initialize: function(component, event, helper) {
        $A.get("e.siteforce:registerQueryEventMap").setParams({"qsToEvent" : helper.qsToEventMap}).fire();
        component.set('v.extraFields', helper.getExtraFields(component, event, helper));
    },
    
    handleSelfRegister: function (component, event, helper) {
        helper.handleSelfRegister(component, event, helper);
    },
    
    setStartUrl: function (component, event, helper) {
        var startUrl = event.getParam('startURL');
        if(startUrl) {
            component.set("v.startUrl", startUrl);
        }
    },
    onKeyUp: function(component, event, helper){
        //checks for "enter" key
        if (event.getParam('keyCode')===13) {
            helper.handleSelfRegister(component, event, helper);
        }
    },
    handleUploadFinished: function (cmp, event, helper) {
        // Get the list of uploaded files
        var uploadedFiles = event.getParam("files");
        alert("Files uploaded : " + uploadedFiles.length);
    },
    handleUploadId: function (cmp, event, helper){
        console.log("handleUploadId Click");
        cmp.find("inputId").getElement().click();
        
    },
    handleUploadSelfie: function (cmp, event, helper){
        console.log("handleUploadSelfie Click");
        cmp.find("inputSelfi").getElement().click();
        
    },
    handleUploadIdChange: function (cmp, event, helper){
        console.log("handleUploadIdChange");
        var input = document.getElementById("inputId");
        
        console.log("input ",input);
          if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log("Reader handleUploadIdChange");
                document.getElementById("imgFile01").src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
            document.getElementById("imgFile01").style.display = "block";
          }
    },
    handleUploadSelfiChange: function (cmp, event, helper){
        console.log("handleUploadSelfiChange");
        var input = document.getElementById("inputSelfi");
        
        console.log("input ",input);
          if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                console.log("Reader handleUploadIdChange");
                document.getElementById("imgFile02").src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
            document.getElementById("imgFile02").style.display = "block";
          }
        document.getElementById("Accspinner").style.display = "block";
        window.setTimeout(
            $A.getCallback(function() {
                document.getElementById("Accspinner").style.display = "none";
                document.getElementById("btnEnviar").style.display = "block";
            }), 5000
        );
    }

})