

var originalPrice=document.getElementById('originalPrice');
var discount=document.getElementById('number2');
var result=document.getElementById('result');
var form=document.getElementById('form');

form.addEventListener('submit', function() {

       if(!originalPrice.value || !discount.value ){

            alert("no input");
     }else{


          var convoriginalPrice=parseFloat(originalPrice.value);
          var convdiscount=parseFloat(discount.value);


              var AfterDivOn100=convdiscount/100;
              var AfterMul=AfterDivOn100*convoriginalPrice;
              var finalprice=convoriginalPrice-AfterMul;


result.innerText= "The final price is: " + finalprice;
event.preventDefault();




}

});
