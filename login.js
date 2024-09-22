
document.getElementById("login-btn").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("clicked")

    const phoneNumber = document.getElementById("phone-input").value;
    const pinNumber = document.getElementById("pin-input").value;

    if (phoneNumber === "11" && pinNumber === "123") {
        console.log("successfully login..")
        window.location.href = "/home.html"
    }
    else {
        alert("Try again!")
    }
})