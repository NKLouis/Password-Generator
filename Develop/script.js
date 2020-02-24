// Assignment Code

var generateBtn = document.getElementById("generate")
console.log(generateBtn);
generateBtn.addEventListener("click", writePassword)
  
  


function writePassword() {
  
  var charAmount = prompt("How many chracters do you want? ")
  if( charAmount <8 || charAmount >128) {
    alert("Password must include a minimum of 8 characters and no more than 128 characters.");
   
    if (charAmount) {
      prompt("How many chracters do you want? ")
    }
  }

  var charLow = confirm("Do you want lowercase characters?")

  var charUp = confirm("Do you want uppercase characters? ")

  var charNum = confirm("Do you want numberic characters? ")

  var charSpecial = confirm("Do you want special characters? ")
    

  var passwordCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!%&()/";
  passwordValue = "";
  for ( var i = 0, n = passwordCharset.length; i < charAmount; ++i) {
   passwordValue += passwordCharset.charAt(Math.floor(Math.random() * n ));
  }

  document.getElementById("password").value = passwordValue;
 
 return;
}


