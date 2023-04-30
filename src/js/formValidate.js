const form = document.querySelector('[data-form]');
const emailEl = form.elements.email;
const errorEl = form.querySelector('[data-error]');

form.addEventListener('submit', validationForm);
emailEl.addEventListener('focus', onFocusInput);

async function validationForm(e) {
  e.preventDefault();

  const emailValue = emailEl.value.trim();

  if (emailValue.length === 0) {
    errorEl.classList.add('active');
    return;
  }

  errorEl.classList.remove('active');

  let formData = new FormData(form);
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    });
    if (!response.ok) {
      throw Error();
    }
    form.reset();
  } catch (error) {
    console.log('Something went wrong');
  }
}

function onFocusInput(e) {
  errorEl.classList.remove('active');
}
