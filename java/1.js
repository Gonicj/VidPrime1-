document.querySelector('button').addEventListener('click', function() {
  const correoInput = document.getElementById('correo');
  const contrasenaInput = document.getElementById('contrasena');
  
  if (correoInput.value === '') {
    alert('Por favor, completa el campo de correo electrónico.');
    return;
  }
  
  if (contrasenaInput.value === '') {
    alert('Por favor, completa el campo de contraseña.');
    return;
  }
  
  // Aquí puedes agregar el código para iniciar sesión si ambos campos están completos
  // Por ejemplo:
  // window.location.href = './index.html';
});
