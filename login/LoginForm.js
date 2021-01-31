
function verifyPassword() {
    var pw = document.getElementById("userPassword").value,
        us =document.getElementById("userName").value;
        if((us =="") || (us.length < 8) || (!isNaN(us))){
            document.getElementById("message").innerHTML="Fill the name please!"
           } else if((pw == "") || (pw.length < 8) ||((pw.length > 20))) {  
       document.getElementById("message2").innerHTML = "Fill the password please!";  
       return false; }  else {  
      window.location.replace('TableForm.html');  }  
  }  
  