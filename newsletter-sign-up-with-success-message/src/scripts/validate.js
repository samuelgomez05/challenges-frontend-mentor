import JustValidate from 'just-validate';
import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: 'hfG4A968fqMmZIcV6',
});

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
    const email = document.querySelector('#email').value;
    const btnSubmit = document.querySelector('#form button');

    btnSubmit.textContent = 'Wait for confirmation ...';
    btnSubmit.setAttribute('disabled', true);

    const templateParams = {
      email: email,
    };

    emailjs.send('service_1hq8dkl', 'template_57a25fw', templateParams).then(
      (response) => {
        if (response.status === 200) {
          sessionStorage.setItem('email', email);
          window.location.href = '/confirmation';
        }
      },
      (error) => {
        alert('Hubo un problema al enviar el correo. Inténtalo de nuevo.');
        console.log('Error: ', error);

        btnSubmit.textContent = 'Subscribe to monthly newsletter';
        btnSubmit.removeAttribute('disabled');
      }
    );
  });
