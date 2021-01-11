const bill = document.querySelector("#totalBill");
const tipPercent = document.querySelector(".percentage");
const tipBtn = document.querySelector(".btn");

tipBtn.addEventListener('click', function() {

    let cost = Number(bill.value)
    let percent = Number(tipPercent.value) / 100

    let tipAmount = cost * percent 

    let tip = document.querySelector(".tip");
    tip.innerText = "$" + tipAmount.toFixed(2)
})