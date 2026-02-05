document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-like');

  buttons.forEach(button => {
    let count = 0;
    const span = button.querySelector('span');

    button.addEventListener('click', () => {
      count++;
      span.textContent = count;
    });
  });

  console.log('Web cargada correctamente 🚀');
});
