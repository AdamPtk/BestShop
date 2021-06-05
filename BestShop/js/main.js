const productsQuantity = document.getElementById('products');
const ordersInMonth = document.getElementById('orders');
const choosePackage = document.getElementById('package');
const addAccounting = document.getElementById('accounting');
const addTerminal = document.getElementById('terminal');
const totalPrice = document.getElementById('total-price');
const choosePackageValue = choosePackage.firstElementChild;
const dropdownMenu = document.querySelectorAll('.dropdown li');
const summaryList = document.querySelector('.summary ul').children;
const summaryCalcColumn = document.querySelector('.summary ul').querySelectorAll('.calc');
const summaryPriceColumn = document.querySelector('.summary ul').querySelectorAll('.price');

const showSummaryPart = function(condition, index) {
    if(condition) {
        summaryList[index].classList.remove('open');
    } else {
        summaryList[index].classList.add('open');
    }
    // for(let i = 0; i < summaryList.length; i++) {
    //     if(summaryList[i].classList.contains('open')) {
    //         totalPrice.classList.add('open');
    //     } 
    //     else {
    //         totalPrice.classList.remove('open');
    //     }
    // }
}

const showEquation = function(index) {
    summaryCalcColumn[index].innerText = that.value + ' * $0.5';
}

const productsSum = function() {
    that = this;
    showSummaryPart(this.value === '', 0);
    showEquation(0);
    summaryPriceColumn[0].innerText = '$' + (this.value * 0.5);
}

const ordersSum = function() {
    that = this;
    showSummaryPart(this.value === '', 1);
    showEquation(1);
    summaryPriceColumn[1].innerText = '$' + (this.value * 0.5);
}

const showDropdown = function() {
    choosePackage.classList.toggle('open');
}

const dropdownChoice = function() {
    choosePackageValue.innerText = this.innerText;
    showSummaryPart(choosePackageValue.innerText === 'Choose package', 2);
    summaryCalcColumn[2].innerText = this.innerText;
    if(this.innerText === 'Professional') {
        summaryPriceColumn[2].innerText = '$25';
    }
    if(this.innerText === 'Premium') {
        summaryPriceColumn[2].innerText = '$60';
    }
}

const accountingSum = function() {
    showSummaryPart(addAccounting.checked !== true, 3);
}

const terminalSum = function() {
    showSummaryPart(addTerminal.checked !== true, 4);
}

const total = function() {
    const allPrices = [];
}

productsQuantity.addEventListener('keyup', productsSum);
productsQuantity.addEventListener('click', productsSum);
ordersInMonth.addEventListener('keyup', ordersSum);
ordersInMonth.addEventListener('click', ordersSum);
choosePackage.addEventListener('click', showDropdown);
dropdownMenu.forEach(function(item) {
    item.addEventListener('click', dropdownChoice);
});
addAccounting.addEventListener('click', accountingSum);
addTerminal.addEventListener('click', terminalSum);