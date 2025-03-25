const calcBtn = document.querySelector(".calc-btn");
const clearData = document.querySelector(".clear-data");
const ifState = document.querySelector(".if-state");
const ifCalc = document.querySelector(".if-calc");
const inputGroupText = document.querySelectorAll(".input-group-text")
const alert = document.querySelector(".alert")
function calculateMortgage() {
    const amount = parseFloat(document.querySelector(".text-amount").value);
    const annualRate = parseFloat(document.querySelector(".annalrate").value);
    const years = parseFloat(document.querySelector(".years").value);

    if (!amount || !annualRate || !years) {
        inputGroupText.forEach((input) => {
            input.classList.add("nodata");
            setTimeout(() => {
                input.classList.remove("nodata");
            }, 1000);
            alert.style.display="block"
            setTimeout(() => {
                alert.style.display="none"
            }, 1000);
        });
        return;
    }
    const monthlyRate = (annualRate / 100) / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    document.querySelector(".result-month").textContent = monthlyPayment.toFixed(4);
    ifState.style.display = "none";
    ifCalc.style.display = "block";
}

function clearAllData() {
    document.querySelector(".text-amount").value = "";
    document.querySelector(".annalrate").value = "";
    document.querySelector(".years").value = "";
    document.querySelector(".result-month").textContent = "0";
    ifState.style.display = "flex";
    ifCalc.style.display = "none";
}
clearData.addEventListener("click", clearAllData);