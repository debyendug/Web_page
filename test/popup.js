// var open = document.querySelector("#on");

// var close = document.quaerySelector(".close-btn");

// open.addEventListener("click", function() {
//     document.body.classList.add("body.popup.active");
// });

// close.addEventListener("click", function() {
//     document.body.classList.remove("body.popup.active");
// });

var password = document.getElementById("paswd").value;
var repassword = document.getElementById("repaswrd").value;

function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup1() {
    document.getElementById("popup-2").classList.toggle("active");
}

function togglePopup2() {
    document.getElementById("popup-3").classList.toggle("active");
}

function togglePopup3() {
    document.getElementById("popup-4").classList.toggle("active");
}

if (password.length != 0) {
    alert("OK");
} else {
    alert("Incorrect");
}

/*function validation() {

    var psw = document.querySelector(".psd").value;

    var repsw = document.querySelector(".repsd").value;

    var ph = document.querySelector(".ph").value;


    if (repsw != psw) {
        alert("Incorrect Re-Enter Passord! Please check and Re_enter");
        return false
    }
    return true


}*/