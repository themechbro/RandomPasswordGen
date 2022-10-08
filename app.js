var length="";
function sizeClick(){
    
   if(document.getElementById("s8").checked){
     length= "7";
   }else if (document.getElementById('s12').checked){
    length="11";
   }
   else if (document.getElementById('s16').checked){
    length="15";
   }
   console.log(length);

   return length;
}


function generatePassword(){
var chars= "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-+/?ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var password= "";

for (var i =0; i <= length; i++){
    var randomNumber= Math.floor(Math.random()*chars.length);
    password= password+ chars.substring(randomNumber, randomNumber+1);
}
document.getElementById('password').value= password;

}

function copyPassword(){
var copyText= document.getElementById('password');
copyText.select();
document.execCommand("copy");
}