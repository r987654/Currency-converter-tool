const rates = {
    USD: 1,
    INR: 83.5,
    EUR: 0.92,
    GBP: 0.78
};

function convertCurrency() {

    let amount = document.getElementById("amount").value;
    let from = document.getElementById("fromCurrency").value;
    let to = document.getElementById("toCurrency").value;

    if(amount === ""){
        alert("Please enter an amount");
        return;
    }

    let usdAmount = amount / rates[from];
    let convertedAmount = usdAmount * rates[to];

    document.getElementById("result").innerHTML =
        `Result: ${convertedAmount.toFixed(2)} ${to}`;
}
