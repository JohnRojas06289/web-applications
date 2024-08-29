// Manipulación del DOM
document.getElementById('querySelectorBtn').addEventListener('click', function() {
    const selector = document.getElementById('selectorInput').value;
    const element = document.querySelector(selector);
    document.getElementById('querySelectorOutput').textContent = element ? element.outerHTML : 'Elemento no encontrado';
});

document.getElementById('querySelectorAllBtn').addEventListener('click', function() {
    const selector = document.getElementById('selectorAllInput').value;
    const elements = document.querySelectorAll(selector);
    const output = document.getElementById('querySelectorAllOutput');
    
    // Limpiar el contenido de la lista antes de agregar nuevos elementos
    output.innerHTML = '';

    elements.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = element.outerHTML; // Mostrar el HTML del elemento
        output.appendChild(listItem); // Agregar el item a la lista
    });
});

document.getElementById('styleBtn').addEventListener('click', function() {
    const output = document.getElementById('styleOutput');
    output.style.color = 'red';
});

document.getElementById('classListBtn').addEventListener('click', function() {
    const output = document.getElementById('classListOutput');
    output.classList.add('destacado');
});

// Almacenamiento local
document.getElementById('guardarNombre').addEventListener('click', function() {
    const nombre = document.getElementById('nombreInput').value;
    localStorage.setItem('nombre', nombre);
    document.getElementById('nombreGuardado').textContent = nombre;
});

// Trabajar con multimedia
// Crear un objeto de audio global para controlar el volumen
const audio = new Audio('./assets/audio/telefono-chino.mp3');

document.getElementById('playAudio').addEventListener('click', function() {
    audio.play();
});

document.getElementById('volumeControl').addEventListener('input', function() {
    audio.volume = this.value;
});

document.getElementById('cambiarEstilos').addEventListener('click', function() {
    document.querySelectorAll('.output').forEach(el => el.style.color = 'blue');
});

// Interacción con el usuario
document.getElementById('boton').addEventListener('click', function() {
    console.log('Botón presionado');
});

const dragItem = document.getElementById('dragSource');
const dropZone = document.getElementById('dropTarget');

dragItem.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
});

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});

dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    dropZone.appendChild(draggedElement);
});

// Manipulación del DOM con elementos múltiples
document.getElementById('agregarItem').addEventListener('click', function() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    
    if (itemText !== '') {
        const itemList = document.getElementById('itemList');
        const listItem = document.createElement('li');
        listItem.textContent = itemText; // Mostrar el texto del ítem
        itemList.appendChild(listItem); // Agregar el item a la lista
        itemInput.value = ''; // Limpiar el campo de entrada
    }
});

document.getElementById('cambiarEstilos').addEventListener('click', function() {
    document.querySelectorAll('#itemList li').forEach(li => li.style.color = 'blue');
});
