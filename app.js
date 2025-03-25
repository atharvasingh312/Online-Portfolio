
/*animate text*/
document.addEventListener("DOMContentLoaded", function(){
  const words=["Machine Learning", "Problem Solving","Web devlopment"];
  const te=document.getElementById("word-switcher");
  let i=0;
  let j=0;
  function switchWord(){
    if(j==0)
    {
      te.textContent="";
    }
    const towrite=words[i];
    if(j<towrite.length){
      te.textContent+=towrite.charAt(j);
      j++;
      setTimeout(switchWord,100);
    }
    else{
      i=(i+1)%words.length;
      j=0;
      setTimeout(switchWord, 1000);
    }
  }
  switchWord();
});
function sendEmail(){
  console.log("hello");
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var subject=document.getElementById("subject").value;
  var body=document.getElementById("message").value;
  var message="Name: "+name+"<br>E-mail: "+email+"<br>message:<br>"+body;
} 
function displayMessage(response) {
  var messageBox = document.getElementById("messageBox");
  if (response==="OK") {
    messageBox.innerHTML = "<center>Email sent successfully!</center>";
    messageBox.className = "message success";
  } else {
    alert(response);
    messageBox.innerHTML = "<center>Failed to send email. Please try again.</center>";
    messageBox.className = "message error";
  }
  messageBox.style.display = "block";
}
