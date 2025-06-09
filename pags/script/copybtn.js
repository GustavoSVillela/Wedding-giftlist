document.addEventListener('DOMContentLoaded', function () {
    const paste = document.querySelector('.copy-btn');
  
    paste.addEventListener('click', function () {
      const chave = paste.getAttribute('data-pix');
  
      navigator.clipboard.writeText(chave)
        .then(() => {
          paste.classList.add('copiado');
          paste.innerText = 'Copiado!';
          
  
          // Depois de 3 segundos, volta ao texto original
          setTimeout(() => {
            paste.innerText = 'Copiar';
            paste.classList.remove('copiado');
          }, 3000);
        })
        .catch(err => console.error('Erro ao copiar:', err));
    });
  });
  


