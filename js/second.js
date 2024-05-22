// Captura el evento de arrastrar sobre la zona de soltar
function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.add('dragover');
  }
  
  // Captura el evento de salir del área de soltar
  function handleDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('dragover');
  }
  
  // Captura el evento de soltar el archivo en la zona de soltar
  function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    event.target.classList.remove('dragover');
  
    if (event.dataTransfer.files.length > 0) {
        // Aquí puedes realizar acciones con el archivo, si es necesario
        // Por ejemplo, leer el archivo CSV
        irAPagina3(); // Redirige a la página 3 después de soltar el archivo
    }
  }
  
  // Función para ir a la página de inicio
  function irAInicio() {
    window.location.href = 'index.html';
  }
  
  // Función para ir a la página 3
  function irAPagina3() {
    window.location.href = 'page3.html';
  }
  
  // Obtener la zona de soltar
  const dropZone = document.getElementById('drop-zone');
  
  // Agregar listeners para los eventos de arrastrar y soltar
  dropZone.addEventListener('dragover', handleDragOver);
  dropZone.addEventListener('dragenter', handleDragOver);
  dropZone.addEventListener('dragleave', handleDragLeave);
  dropZone.addEventListener('drop', handleDrop);
  