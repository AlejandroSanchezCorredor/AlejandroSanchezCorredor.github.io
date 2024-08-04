function showProjectDetails(project) {
    var detailsText = '';
    if (project === 'proyecto1') {
        detailsText = `
<div class="program-details">
    <h4 class="program-title">TFG: Uso de GPT para Comunicaciones Automatizadas en Booking</h4>
    <div class="program-info">
        <div class="program-text">
            <p class="program-description">Este Trabajo de Fin de Grado se centra en la automatización de la comunicación en la plataforma de Booking mediante el uso de tecnologías de procesamiento de lenguaje natural y modelos de aprendizaje automático. Para los propietarios con una alta cantidad
de viviendas en su posesión, la gestión manual de estas comunicaciones puede ser laboriosa y propensa a errores. <br>
El objetivo principal de este proyecto es la automatización de la comunicación en Booking utilizando modelos tipo GPT (Generative pre-Trained Transformer). Para ello
se ha desarrollado un sistema inteligente capaz de responder automáticamente a consultas de clientes, especialmente clientes con un alto volumen de viviendas, basado en tecnología
de procesamiento de lenguaje natural.</p>
            <p><strong class="highlight2">Año de realización:</strong> <span class="normal-text">2024</span></p>
            <p><strong class="highlight2">Calificación obtenida:</strong> <span class="normal-text">10</span></p>

            <!-- Botones para descargar los PDFs -->
            <div class="download-buttons">
                <a href="tfg/Memoria_Alejandro_Sánchez_TFG.pdf" class="btn-small" download>Descargar Memoria</a>
                <a href="tfg/Proyecto_Alejandro_Sánchez_TFG.rar" class="btn-small" download>Descargar Proyecto</a>
            </div>
        </div>
        <div class="program-images">
            <img src="images/tfg.png" alt="Imagen del Proyecto 1" class="program-image" onclick="openFullscreen(this)">
            <p class="image-description">Front-end del proyecto</p>
        </div>
    </div>
    <div class="more-info btn-more-info" onclick="showPortfolio()">Volver</div>
</div>
<!-- Contenedor para la imagen en pantalla completa -->
<div id="fullscreen-container" onclick="closeFullscreen()">
    <img id="fullscreen-image" src="" alt="Imagen en pantalla completa">
</div>
        `;
    } else if (project === 'proyecto2') {
        detailsText = `
  <div class="program-details">
    <h4 class="program-title">Clasificación de personajes de Los Simpsons: Aprendizaje de modelos basados en redes neuronales</h4>
    <div class="program-info">
        <div class="program-text">
            <p class="program-description">En este proyecto, vamos a emplear un conjunto de datos que contiene personajes de "Los Simpson". El objetivo es identificar un personaje de "Los Simpson" en una imagen de entre los 25 disponibles.
            Se emplean modelos basados en redes neuronales utilizando, para ello, la librería tensorflow. Esta se trata de una de las más populares hoy en día debido a su facilidad de uso y versatilidad.</p>
            <p><strong class="highlight2">Año de realización:</strong> <span class="normal-text">2024</span></p>
            <p><strong class="highlight2">Calificación obtenida:</strong> <span class="normal-text">10</span></p>

            <!-- Botones para descargar los PDFs -->
            <div class="download-buttons">
                <a href="simpsons/Libreta_Alejandro_Sánchez_Simpsons.ipynb" class="btn-small" download>Descargar libreta</a>
            </div>
        </div>
                <div class="program-images">
            <img src="simpsons/mejor_modelo.png" alt="Imagen del Proyecto 1" class="program-image" onclick="openFullscreen(this)">
            <p class="image-description">Accuracy y función de pérdida del modelo conseguido</p>
        </div>
    </div>
    <div class="more-info btn-more-info" onclick="showPortfolio()">Volver</div>
</div>
<!-- Contenedor para la imagen en pantalla completa -->
<div id="fullscreen-container" onclick="closeFullscreen()">
    <img id="fullscreen-image" src="" alt="Imagen en pantalla completa">
</div>
        `;
    } else if (project === 'proyecto3') {
        detailsText = `
  <div class="program-details">
    <h4 class="program-title">Predicción o reconocimiento del género de una persona</h4>
    <div class="program-info">
        <div class="program-text">
            <p class="program-description">En este proyecto, el objetivo es la detección del género utilizando técnicas de aprendizaje automático y procesamiento de imágenes. 
            Principalmente se desarrolla un modelo capaz de identificar el género (masculino o femenino) a partir de imágenes faciales.<br>
            Se ha obtenido un dataset que contiene imágenes faciales etiquetadas con el género correspondiente. Cada imagen está asociada con una etiqueta de la variable clase “Male”, muchas veces nos referiremos a los registros de la variable clase como “Male” o “No male”.
            Para conseguir nuestro objetivo, se opta por utilizar técnicas de aprendizaje profundo, específicamente utilizando redes neuronales convolucionales (CNN). Entrenaremos un modelo CNN utilizando TensorFlow/Keras para aprender patrones y características que distingan entre los géneros a partir de las imágenes faciales.</p>
            <p><strong class="highlight2">Año de realización:</strong> <span class="normal-text">2024</span></p>
            <p><strong class="highlight2">Calificación obtenida:</strong> <span class="normal-text">7.5</span></p>

            <!-- Botones para descargar los PDFs -->
            <div class="download-buttons">
                <a href="reconocimiento_gen/Libreta_Alejandro_Sánchez_Genero.ipynb" class="btn-small" download>Descargar libreta</a>
                <a href="reconocimiento_gen/Memoria_Alejandro_Sánchez_Genero.pdf" class="btn-small" download>Descargar memoria</a>
            </div>
        </div>
                <div class="program-images">
            <img src="reconocimiento_gen/Mejor_modelo_obtenido.png" alt="Imagen del Proyecto 1" class="program-image" onclick="openFullscreen(this)">
            <p class="image-description">Matriz de confusión del mejor modelo obtenido</p>
        </div>
    </div>
    <div class="more-info btn-more-info" onclick="showPortfolio()">Volver</div>
</div>
<!-- Contenedor para la imagen en pantalla completa -->
<div id="fullscreen-container" onclick="closeFullscreen()">
    <img id="fullscreen-image" src="" alt="Imagen en pantalla completa">
</div>
        `;
    }
    

    document.getElementById('portfolio').innerHTML = detailsText;
}

function showPortfolio() {
    document.getElementById('portfolio').innerHTML = `
         <div class="container">
            <div class="project-slider">
                <div class="project-page active" id="page-1">
                    <div class="col-md-4 img-top grid_box">
                        <div class="image-container">
                            <img src="images/booking.jpg" class="img-responsive" alt="Proyecto 1">
                            <div class="project-description">
                                <p>TFG: Uso de GPT para Comunicaciones Automatizadas en Booking</p>
                                <button class="btn-more-info" onclick="showProjectDetails('proyecto1')">Más Información</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 img-top grid_box">
                        <div class="image-container">
                            <img src="images/simpsons.jpg" class="img-responsive" alt="Proyecto 2">
                            <div class="project-description">
                                <p>Clasificación de personajes de Los Simpsons: Aprendizaje de modelos basados en redes neuronales</p>
                                <button class="btn-more-info" onclick="showProjectDetails('proyecto2')">Más Información</button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-4 img-top grid_box">
                        <div class="image-container">
                            <img src="images/recon.jpg" class="img-responsive" alt="Proyecto 3">
                            <div class="project-description">
                                <p>Predicción de género a partir de una imagen</p>
                                <button class="btn-more-info" onclick="showProjectDetails('proyecto3')">Más Información</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="project-page" id="page-2">
                    <div class="col-md-4 img-top grid_box">
                        <div class="image-container">
                            <img src="images/fake_news.jpg" class="img-responsive" alt="Proyecto 4">
                            <div class="project-description">
                                <p>Predicción de género a partir de una imagen</p>
                                <button class="btn-more-info" onclick="showProjectDetails('proyecto4')">Más Información</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pagination-control">
                <a href="javascript:void(0);" id="previous-page">
                    <img src="images/flecha_d.png" alt="Página Anterior"/>
                </a>
                <span id="page-indicator">Página 1/2</span>
                <a href="javascript:void(0);" id="next-page">
                    <img src="images/flecha_i.png" alt="Página Siguiente"/>
                </a>
            </div>
        </div>
    </div>
</div>
    `;
    // Reinitialize pagination after re-rendering the portfolio content
    initializePagination();
}


function initializePagination() {
    currentPage = 1; // Reset to the first page
    showPage(currentPage);
    document.getElementById("previous-page").addEventListener("click", prevPage);
    document.getElementById("next-page").addEventListener("click", nextPage);
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

