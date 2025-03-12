import JustValidate from 'just-validate';

const validator = new JustValidate('#form');

validator
  .addField(
    '#email',
    [
      {
        rule: 'required',
        errorMessage: 'Email required',
      },
      {
        rule: 'email',
        errorMessage: 'Valid email required',
      },
    ],
    {
      errorsContainer: '#error-container_email',
      errorLabelCssClass: ['label-error'],
      errorFieldCssClass: ['input-error'],
      submitFormAutomatically: true,
    }
  )
  .onSuccess(() => {
    const btnSubmit = document.querySelector('#form button');
    btnSubmit.textContent = 'Wait for confirmation ...';
    btnSubmit.setAttribute('disabled', true);

    setTimeout(() => {
      window.location.href = '/confirmation';

      /* Save the email for view in the page confirmation */
      const email = document.querySelector('#email').value;

      sessionStorage.setItem('email', email);
    }, 3000);
  });
