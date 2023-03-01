function Booked() 
{
    confirm("Appointment Booked");
}

function gotoRegister()
{
    window.location.href = "register.html";
}

let phoneNo = document.getElementById("phone-no");

if(phoneNo.length < 10 || phoneNo.length > 10)
{
    alert("Phone no. should be 10 Digit");
}

let emailId = document.getElementById("email");

if(emailId.indexOf("@") < 5)
{
    alert("Email address not valid");
}
else if(!emailId.includes(".com"))
{
    alert("Email address not valid");
}

const urlParams = new URLSearchParams(window.location.search);
document.getElementById("showName").innerHTML = "Welcome " + urlParams.get('fname') + " " + urlParams.get('lname');
document.getElementById("showEmail").innerHTML = urlParams.get('email');

var td = document.getElementsByTagName("td");

console.log(td.length);

for (var i = 0; i < td.length; i++) {
    if (td[i].className == 'Date') {
        td[i].innerHTML = urlParams.get('date');
    }
}