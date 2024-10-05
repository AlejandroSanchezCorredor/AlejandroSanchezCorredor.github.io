function showDetails(program) {
    var detailsText = '';
    if (program === 'grado') {
        detailsText = `
        <div class="program-details">
            <h4 class="program-title">Grado en Ingeniería Informática de la UCLM</h4>
            <div class="program-info">
                <div class="program-text">
                    <p class="program-description">A lo largo del Grado en Ingeniería Informática de la Universidad de Castilla-La Mancha (UCLM), he adquirido una sólida formación en diversos campos de la informática, abarcando desde fundamentos teóricos hasta aplicaciones prácticas. Las asignaturas que he cursado han sido organizadas en varias categorías, cada una enfocada en un aspecto esencial de la informática. A continuación, se muestran las calificaciones obtenidas en cada asignatura.</p>
                    <p><strong class="highlight2">Año del curso:</strong> <span class="normal-text">2020-2024</span></p>
                    <p><strong class="highlight2">Nota media:</strong> <span class="normal-text">8.15</span></p>
                    <p class="program-description">La gráfica titulada "Calificaciones de asignaturas por categorías" muestra mis calificaciones en las diversas asignaturas cursadas, agrupadas por categorías. En el eje horizontal se representan las calificaciones, mientras que en el eje vertical se enumeran las asignaturas.</p>
                </div>
                <div class="program-images">
                    <img src="images/notas_agrupadas.png" alt="Imagen 1" class="program-image" onclick="openFullscreen(this)">
                    <p class="image-description">Calificaciones de asignaturas por categorías</p>
                </div>
            </div>
            <div class="more-info" onclick="showGallery()">Volver</div>
        </div>

        <!-- Contenedor para la imagen en pantalla completa -->
        <div id="fullscreen-container" onclick="closeFullscreen()">
            <img id="fullscreen-image" src="" alt="Imagen en pantalla completa">
        </div>
        `;
    } else if (program === 'master') {
        detailsText = `
            <h4>Máster de Formación Permanente en Ciencia de Datos e Ingeniería de Datos en la Nube (En progreso)</h4>
            <p>El Máster de Formación Permanente en Ciencia de Datos e Ingeniería de Datos en la Nube se enfocará en proporcionar habilidades avanzadas en análisis de datos, aprendizaje automático y tecnologías en la nube. Este programa está diseñado para profesionales que buscan especializarse en ciencia de datos.</p>
            <div class="more-info" onclick="showGallery()">Volver</div>
        `;
    }
    document.getElementById('gallery').innerHTML = detailsText;
}

function showGallery() {
    document.getElementById('gallery').innerHTML = `
        <div class="gallery-item">
            <img src="images/esiiab.jpg" alt="Grado en Ingeniería Informática de la UCLM" class="featured-image">
            <div class="caption">Grado en Ingeniería Informática de la UCLM</div>
            <div class="more-info" onclick="showDetails('grado')">Más información</div>
        </div>
        <div class="gallery-item">
            <img src="images/cidaen.jpg" alt="Máster de Formación Permanente en Ciencia de Datos e Ingeniería de Datos en la Nube (Próximamente)" class="featured-image">
            <div class="caption">Máster de Formación Permanente en Ciencia de Datos e Ingeniería de Datos en la Nube (Próximamente)</div>
            <div class="more-info" onclick="showDetails('master')">Más información</div>
        </div>
    `;
}

function openFullscreen(imgElement) {
    var fullscreenContainer = document.getElementById('fullscreen-container');
    var fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = imgElement.src;
    fullscreenContainer.style.display = 'flex';
}

function closeFullscreen() {
    var fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
}
