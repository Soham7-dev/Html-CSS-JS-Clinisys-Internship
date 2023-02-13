function Booked() 
{
    confirm("Appointment Booked");
}

function gotoRegister()
{
    window.location.href = "register.html";
}

const urlParams = new URLSearchParams(window.location.search);
document.getElementById("showName").innerHTML = "Welcome " + urlParams.get('fname') + " " + urlParams.get('lname');

var td = document.getElementsByTagName("td");

console.log(td.length);

for (var i = 0; i < td.length; i++) {
    if (td[i].className == 'Date') {
        td[i].innerHTML = urlParams.get('date');
    }
}