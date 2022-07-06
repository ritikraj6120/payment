<button id=”rzp-button1">Pay</button>
<script src=”https://checkout.razorpay.com/v1/checkout.js"></script> 
<script> 
 var options = 
  {
   “key”: “YOUR_KEY_ID”, // Enter the Key ID generated from the Dashboard 
   "name": "Test Company", 
   "order_id": "rzpOrder.id", // For one time payment
   "subscription_id" : "subscription.id" // For recurring subscription
   "prefill": {
     "name": "Test User",
     "email": "test.user@example.com",
     "contact": "9999999999"
   },
   "theme": {
    "color": "#3399cc"
   },
   // This handler function will handle the success payment
   "handler": function (response) {
    alert(response.razorpay_payment_id);
    alert("Payment Successfull")
   },
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function (e) {
  rzp1.open();
  e.preventDefault();
}
rzp1.on('payment.failed', function (response)
 {            
  alert(response.error.code);     
  alert(response.error.description);      
  alert(response.error.source);
  alert(response.error.step);     
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
 }
</script