//tip buttons
const buttons = document.querySelectorAll('.percentage');

//tip amount
const tipPerPerson = document.querySelector('.tip-per-person');
const totalPerPerson = document.querySelector('.total-per-person');

//number of people + bill
const billAmount = document.querySelector('.bill-amount');
const numOfPeople = document.querySelector('.numOfPeople');

//reset button + error message
const reset = document.querySelector('.reset');
const errorNumOfPeople = document.querySelector('.error');
const errorBillAmount = document.querySelector('.bill-error');

//input background styling
const numOfPeopleBg = document.getElementById("numOfPeopleInput");
const billAmountInput = document.getElementById("billAmountInput");

const customTipInput = document.getElementById("customTip");

//clear
const clearAmount = () => {
  billAmount.value = "";
  customTipInput.value = "";
  numOfPeople.value = "";
  tipPerPerson.innerHTML = '0.00';
  totalPerPerson.innerHTML = '0.00';
}
reset.addEventListener("click", clearAmount);

//error for number of people input
const peopleError = () => {
  errorNumOfPeople.style.display = 'flex';
  numOfPeopleBg.style.backgroundColor = 'var(--light-red)';
  numOfPeopleBg.style.border = '2px solid red';

  setTimeout(() => {
    errorNumOfPeople.style.display = 'none';
    numOfPeopleBg.style.backgroundColor = "var(--Very-light-grayish-cyan)";
    numOfPeopleBg.style.border = 'none';
    clearAmount();
  },3000);
}

//error for bill input
const billAmountError = () => {
  errorBillAmount.style.display = 'flex';
  billAmountInput.style.backgroundColor = 'var(--light-red)';
  billAmountInput.style.border = '2px solid red';

  setTimeout(() => {
    errorBillAmount.style.display = 'none';
    billAmountInput.style.backgroundColor = "var(--Very-light-grayish-cyan)";
    billAmountInput.style.border = 'none';
    clearAmount();
  },3000);
}

const customTip = (e) => {
  const percentage = e.currentTarget.value;
  calculate(percentage);
}

//calculate tip
const calculate = (e) => {

  let tip = billAmount.value * (e.currentTarget.value / 100)

  if(billAmount.value <= 0){
    billAmountError()
    console.log('bill amount is less than 0.00')//test
  }

  if(numOfPeople.value <= 0){
    peopleError();
    console.log('number of people less than 0')//test
  }
  

  tipAmount = (tip / numOfPeople.value).toFixed(2);
  tipPerPerson.innerHTML = tipAmount;

  const tipTotal = (Number(billAmount.value) + tip) / numOfPeople.value
  totalPerPerson.innerHTML = tipTotal.toFixed(2);  

}

//target button
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = 'var(--Very-dark-cyan)';
      btn.style.color = 'var(--White)';
    });
    e.currentTarget.style.backgroundColor = 'var(--Strong-cyan)';
    e.currentTarget.style.color = 'var(--Very-dark-cyan)'
    calculate(e);
  });
});

//custom input button
customTipInput.addEventListener("input", calculate)


