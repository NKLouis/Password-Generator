// Assignment Code

var generateBtn = document.getElementById("generate")
console.log(generateBtn);
generateBtn.addEventListener("click", writePassword)
  
  


function writePassword() {
  
  var charAmount = prompt("How many chracters do you want? ")
  if( charAmount <8 || charAmount >128) {
    alert("Password must include a minimum of 8 characters and no more than 128 characters.");
   
  return;
  }

  var passwordCharset = "";
 


  var charLow = prompt("Do you want lowercase characters? yes/no")
  var charLow = charLow.toLowerCase();
  if (charLow == "yes"){
    var charLowVals = "abcdefghijklmnopqrstuvwxyz";
    var passwordCharset = passwordCharset.concat(charLowVals);
  }


  var charUp = prompt("Do you want uppercase characters? yes/no")
  var charUp = charUp.toLowerCase();
  if (charUp == "yes") {
    var charUPVals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordCharset = passwordCharset.concat(charUPVals);
  }

  var charNum = prompt("Do you want numberic characters? yes/no ")
  var charNum = charNum.toLowerCase();
  if (charNum == "yes") {
  var charNUMVals = "0123456789";
  var passwordCharset = passwordCharset.concat(charNUMVals);
  }


  var charSpecial = prompt("Do you want special characters? yes/no")
  var charSpecial = charSpecial.toLowerCase();
  if (charSpecial == "yes") {
    var charSPECVals = "!@#$%^&*()";    
    var passwordCharset = passwordCharset.concat(charSPECVals);
    }
    
    
  passwordValue = "";
  for ( var i = 0, n = passwordCharset.length; i < charAmount; ++i) {
   passwordValue += passwordCharset.charAt(Math.floor(Math.random() * n ));
  }

  document.getElementById("password").value = passwordValue;
 

 return;
}


