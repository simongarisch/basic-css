/* Add the JavaScript here for the function billingFunction().
   It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
  checked = document.getElementById("same").checked;

  if(checked){
    // the checkbox is ticked, copy shipping input
    var name = document.getElementById("shippingName").value;
    var zip = document.getElementById("shippingZip").value;
    // and place it into the billing info
    document.getElementById("billingName").value = name;
    document.getElementById("billingZip").value = zip;
  }else{
    // the checkbox is unticked, so clear input
    document.getElementById("billingName").value = "";
    document.getElementById("billingZip").value = "";
  }

}
