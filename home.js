
document.getElementById("add-money").addEventListener("click", function (e)
{
    e.preventDefault();
    let mainBalance = document.getElementById("main-amount").innerText;
    let addedAmonut = document.getElementById("add-money-input").value;
    let pinNumber = document.getElementById("add-money-pin-input").value;

    let newBalance = parseFloat(mainBalance) + parseFloat(addedAmonut);

    if (pinNumber === "123") {
        document.getElementById("main-amount").innerText = newBalance;
    }
    else {
        alert("Try again!!")
    }
})


document.getElementById("cash-out").addEventListener("click", function (e) {
    e.preventDefault();
    let mainBalance = document.getElementById("main-amount").innerText;
    let cashOutAmount = document.getElementById("cash-out-input").value;
    let pinNumber = document.getElementById("cash-out-pin-input").value;

    let newBalance = parseFloat(mainBalance) - parseFloat(cashOutAmount);

    if (pinNumber === "123") {
        document.getElementById("main-amount").innerText = newBalance;
    }
    else {
        alert("Try again!!")
    }
})