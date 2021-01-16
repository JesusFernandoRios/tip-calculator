const bill = document.querySelector("#totalBill");
const tipPercent = document.querySelector(".percentage");
const tipBtn = document.querySelector(".btn");


// setting up service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}

tipBtn.addEventListener('click', function() {

    let cost = Number(bill.value)
    let percent = Number(tipPercent.value) / 100
    let tipAmount = cost * percent;
    const total = cost + tipAmount;

    let tip = document.querySelector(".tip");
    let finalTotal = document.querySelector(".total");
    
    tip.innerText = "$" + tipAmount.toFixed(2);
    finalTotal.innerText = `$ ${total.toFixed(2)} :)`
    
    
    
    
})