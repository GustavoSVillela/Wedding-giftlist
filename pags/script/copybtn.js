document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.copy-btn');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const chave = button.getAttribute('data-pix');

      navigator.clipboard.writeText(chave)
        .then(() => {
          button.classList.add('copiado');
          button.innerText = 'Copiado!';

          // Depois de 3 segundos, volta ao texto original
          setTimeout(() => {
            button.innerText = 'Copiar';
            button.classList.remove('copiado');
          }, 3000);
        })
        .catch((err) => console.error('Erro ao copiar:', err));
    });
  });
});