const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);



function calculateMoney() {
    const one = currency_one.value;
    const two = currency_two.value;

    console.log("สกุลเงินต้นทาง = ", one);
    console.log("สกุลเงินปลายทาง = ", two);
}