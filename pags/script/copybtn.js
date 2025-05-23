document.addEventListener('DOMContentLoaded', function () {
    const paste = document.querySelector('.copy-btn');
  
    paste.addEventListener('click', function () {
      const chave = paste.getAttribute('data-pix');
  
      navigator.clipboard.writeText(chave)
        .then(() => {
          paste.innerText = 'Copiado!';
          paste.classList.add('copiado');
  
          // Depois de 3 segundos, volta ao texto original
          setTimeout(() => {
            paste.innerText = 'Copiar';
            paste.classList.remove('copiado');
          }, 3000);
        })
        .catch(err => console.error('Erro ao copiar:', err));
    });
  });
  


