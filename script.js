document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    const nameInput = document.getElementById('nombre');
    const priceInput = document.getElementById('price');
    const inventoryInput = document.getElementById('inventory');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Verifica si algún campo de entrada está vacío
      let isValid = true;
  
      if (nameInput.value.trim() === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'El nombre es obligatorio';
      } else {
        document.getElementById('nameError').textContent = '';
      }
  
      if (priceInput.value.trim() === '') {
        isValid = false;
        document.getElementById('priceError').textContent = 'El precio es obligatorio';
      } else {
        document.getElementById('priceError').textContent = '';
      }
  
      if (inventoryInput.value.trim() === '') {
        isValid = false;
        document.getElementById('inventoryError').textContent = 'El inventario es obligatorio';
      } else {
        document.getElementById('inventoryError').textContent = '';
      }
  
      // Muestra un mensaje de alerta al enviar el formulario correctamente
      if (isValid) {
        alert('Los datos se han guardado exitosamente');
        form.reset();
      }
    });
  });
  
  