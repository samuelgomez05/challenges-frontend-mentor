const billInput = document.querySelector('#bill');
const buttonsTip = document.querySelectorAll('.tip-button');
const tipInput = document.querySelector('#tip-custom');
const peopleInput = document.querySelector('#people');
const reset = document.querySelector('#reset-calculator');
const textTipAmount = document.querySelector('#tip-amount');
const textTotal = document.querySelector('#total');
const inputs = [billInput, peopleInput];

let selectedTip = 0;

/* ACtive the button tip */
buttonsTip.forEach((button) => {
  button.addEventListener('click', () => {
    buttonsTip.forEach((btn) => {
      btn.dataset.selected = 'false';
    });

    button.dataset.selected = 'true';
    selectedTip = parseFloat(button.textContent.slice(0, -1)) / 100;

    calculateTip();
  });
});

/* Input custom tip */
tipInput.addEventListener('focus', () => {
  buttonsTip.forEach((btn) => {
    btn.dataset.selected = 'false';
  });

  selectedTip = parseFloat(tipInput.value) / 100;
  selectedTip = selectedTip > 0 ? selectedTip : 0;

  calculateTip();
});

tipInput.addEventListener('input', () => {
  selectedTip = parseFloat(tipInput.value) / 100;

  calculateTip();
});

/* Input bill and people */
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    calculateTip();
  });
});

/* Put the invalid input people */
peopleInput.addEventListener('input', () => {
  if (peopleInput.value > 0) {
    peopleInput.classList.remove('invalid');
  } else {
    peopleInput.classList.add('invalid');
  }
});

/* Reset calculator */
reset.addEventListener('click', () => {
  buttonsTip.forEach((btn) => {
    btn.dataset.selected = 'false';
  });

  inputs.forEach((input) => {
    input.value = '';
  });

  tipInput.value = '';

  selectedTip = 0;

  calculateTip();
});

/* Calculate tip and update button reset state */
function calculateTip() {
  const isAnyFilled = inputs.every(
    (input) => input.value.trim() !== '' && input.value > 0
  );
  const isAnyTipSelected = selectedTip > 0 || tipInput.value.trim() !== '';
  const isNumberOfPeopleValid = peopleInput.value > 0;

  if (!isAnyFilled || !isAnyTipSelected || !isNumberOfPeopleValid) {
    textTipAmount.textContent = '$0.00';
    textTotal.textContent = '$0.00';

    reset.classList.remove('active');
    reset.disabled = true;

    return;
  }

  const tipAmount = (billInput.value / peopleInput.value) * selectedTip;
  const total = billInput.value / peopleInput.value + tipAmount;

  textTipAmount.textContent = `$${tipAmount.toFixed(2)}`;
  textTotal.textContent = `$${total.toFixed(2)}`;

  reset.classList.add('active');
  reset.disabled = false;
}
