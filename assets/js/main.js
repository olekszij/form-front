const $ = document;

$.addEventListener('DOMContentLoaded', () => {
  console.log('document loaded');
});

$.querySelector('#fromForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    firstname: $.querySelector('#firstname').value,
    lastname: $.querySelector('#lastname').value,
    email: $.querySelector('#email').value,
    subject: $.querySelector('#subject').value,
    message: $.querySelector('#message').value,
  };
  console.log(data);
  try {
    const response = await axios.post(
      'https://site--form-backend--gfbrddh2d54z.code.run/form',
      data
    );

    console.log('form submitting success', response.data);
    alert('Form submitted successfully');
  } catch (error) {
    alert('Form submission failed');
  }
});
