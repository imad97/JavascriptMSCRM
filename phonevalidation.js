function ValidatePhoneNumber(executionContext) {
debugger;
var formContext =executionContext.getFormContext();
var mobilenumber = formContext.getAttribute("telephone1").getValue();
if (mobilenumber != null && mobilenumber != undefined) {
var pattern = /^[0-9]\d{2,4}\d{6,8}$/;
if (mobilenumber.match(pattern)) {
return true;
}
else {

alert("Please Enter Valid Mobile NUmber");
formContext.getAttribute("telephone1").setValue(null);
}

}

}