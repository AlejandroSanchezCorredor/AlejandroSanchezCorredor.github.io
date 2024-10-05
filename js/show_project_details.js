function showProjectDetails(project) {
    var detailsText = '';
    if (project === 'proyecto1') {
        detailsText = `
<div class="program-details">
    <h4 class="program-title">TFG: Uso de GPT para Comunicaciones Automatizadas en Booking</h4>
    <div class="program-info">
        <div class="program-text">
            <p class="program-description">
                Este Trabajo de Fin de Grado se centra en la automatización de la comunicación en la plataforma de Booking mediante el uso de tecnologías de procesamiento de lenguaje natural y modelos de aprendizaje automático. 
                Para los propietarios con una alta cantidad de viviendas en su posesión, la gestión manual de estas comunicaciones puede ser laboriosa y propensa a errores. <br><br>
                
                El objetivo principal de este proyecto es la automatización de la comunicación en Booking utilizando modelos tipo GPT (Generative Pre-Trained Transformer). 
                Se ha desarrollado un sistema inteligente capaz de responder automáticamente a consultas de clientes, especialmente aquellos con un alto volumen de viviendas, 
                basado en tecnología de procesamiento de lenguaje natural. <br><br>

                El desarrollo y despliegue de la aplicación en la nube se lograron utilizando <strong>Serverless Framework</strong> y <strong>AWS</strong>, mientras que <strong>Python</strong> fue el lenguaje principal en todo el proyecto. 
                La integración de respuestas automáticas fue posible gracias a la biblioteca de <strong>OpenAI</strong>, y <strong>Selenium</strong> permitió la interacción con la web de Booking. 
                Además, se utilizó <strong>Pynamodb</strong> para interactuar con bases de datos DynamoDB y <strong>Postman</strong> para las pruebas de la API. 
                El despliegue en contenedores se realizó con <strong>Docker</strong>, y el desarrollo del front-end se llevó a cabo en <strong>Angular</strong>. 
                Funciones como el inicio de sesión y el registro de usuarios se implementaron mediante <strong>Amplify</strong>.
            </p>
            <p><strong class="highlight2">Año de realización:</strong> <span class="normal-text">2024</span></p>
            <p><strong class="highlight2">Calificación obtenida:</strong> <span class="normal-text">10</span></p>

            <!-- Botones para descargar los PDFs -->
            <div class="download-buttons">
                <a href="tfg/Memoria_Alejandro_Sánchez_TFG.pdf" class="btn-small" download>Descargar Memoria</a>
                <a href="https://drive.google.com/file/d/1Jocp1CF5WAUc5Z45o-ZC7cJU2gK-VZh5/view?usp=sharing" class="btn-small" download>Descargar Proyecto</a>
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
            <p class="program-description">Esta libreta se centra en la clasificación de imágenes de personajes de "Los Simpson" utilizando redes neuronales. El objetivo principal es entrenar un modelo que sea capaz de identificar un personaje de entre 25 posibles, como Homer Simpson, Bart Simpson, y muchos otros.</p>
            
            <p class="program-description">El proyecto utiliza <strong>TensorFlow</strong> como principal framework de aprendizaje profundo, con modelos desarrollados en <strong>Keras</strong> y ejecutados en una <strong>GPU</strong> para acelerar los cálculos. Se realizó una estratificación de los datos usando <strong>split-folders</strong> para evitar sesgos, y se aplicó aumento de datos (Data Augmentation) para mejorar la generalización del modelo. El dataset incluye imágenes de personajes icónicos de la serie.</p>

            <p class="program-description">Se desarrollaron diferentes modelos para comparar los resultados y extraer conclusiones. Los modelos incluyeron:</p>
            <ul>
                <li>Una red neuronal convolucional (CNN) sencilla sin aumento de datos</li>
                <li>Una CNN sencilla con aumento de datos</li>
                <li>Una CNN más compleja con aumento de datos</li>
                <li>Un modelo con <strong>Transfer Learning</strong></li>
                <li>El mismo modelo con <strong>Fine-tuning</strong> aplicado</li>
            </ul>

            <p class="program-description">Entre las preguntas que se buscan responder están:</p>
            <ul>
                <li><em>¿Se producirá sobreajuste si no realizamos aumento de datos?</em></li>
                <li><em>¿Realizar aumento de datos reduce el sobreajuste?</em></li>
                <li><em>¿Qué diferencia a una CNN compleja de una CNN simple y por qué ofrece mejores resultados?</em></li>
                <li><em>¿Utilizar Transfer Learning nos ofrece mejores resultados que crear una red neuronal desde cero?</em></li>
                <li><em>¿Qué mejoras ofrece aplicar Fine-tuning a un modelo que utiliza Transfer Learning?</em></li>
            </ul>

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
            <p class="program-description">El objetivo de esta libreta es entrenar un modelo que permita predecir el género de una persona a partir de imágenes faciales, utilizando redes neuronales convolucionales (CNN) y modelos preentrenados. Se busca aplicar técnicas de procesamiento de imágenes y evaluación de modelos para lograr una clasificación precisa entre géneros.</p>

            <p class="program-description">El análisis exploratorio comenzó con la carga de datos de dos archivos CSV: <strong>'list_attr_celeba.csv'</strong>, que contiene atributos binarios asociados a cada imagen (como barba o gafas), y <strong>'list_eval_partition.csv'</strong>, que especifica la partición de los datos en conjuntos de entrenamiento, validación y prueba. Tras revisar muestras del conjunto, se identificaron características físicas clave, como “sonriente”, “calvo” y “joven”, que serían útiles para el análisis posterior.</p>

            <p class="program-description">El preprocesamiento de los datos fue una etapa crucial. En primer lugar, se prepararon las imágenes mediante la tokenización, asegurando que estuvieran listas para ser procesadas por redes neuronales. Además, se aplicaron técnicas de <strong>aumento de datos (Data Augmentation)</strong>, como la rotación, recorte y escalado de las imágenes, lo que permitió aumentar la variabilidad del conjunto de datos sin necesidad de recopilar nuevas imágenes. También se realizó la <strong>normalización</strong> de las imágenes, redimensionando y escalando los píxeles para garantizar una representación consistente en los modelos.</p>

            <p class="program-description">Para la fase de modelado, se seleccionaron varios modelos. Entre ellos, se implementaron <strong>redes neuronales convolucionales (CNN)</strong>, que son conocidas por su capacidad para aprender características avanzadas a partir de imágenes. También se probaron modelos preentrenados, como <strong>InceptionV3</strong> y <strong>EfficientNetB5</strong>, que permitieron aprovechar características previamente aprendidas en tareas similares, lo cual redujo el tiempo de entrenamiento y mejoró la precisión del modelo. Además, se ajustaron diversas configuraciones, incluyendo el uso de capas de <strong>Dropout</strong> y <strong>BatchNormalization</strong> para mejorar la generalización de los modelos.</p>

            <p class="program-description">En cuanto a la evaluación de los modelos, se utilizaron varias métricas. Se empleó una <strong>matriz de confusión</strong> para analizar los verdaderos positivos, falsos positivos, verdaderos negativos y falsos negativos, proporcionando una visión detallada de los aciertos y errores en la predicción de géneros. También se midieron la <strong>precisión</strong> y el <strong>recall</strong> para evaluar la exactitud del modelo en la clasificación, así como el <strong>F1-Score</strong>.</p>

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
    } else if (project === 'proyecto4') {
        detailsText = `
<div class="program-details">
    <h4 class="program-title">Detección de noticias falsas</h4>
    <div class="program-info">
        <div class="program-text">
            <p class="program-description">Este análisis tiene como objetivo principal predecir si una noticia es "REAL" o "FAKE", empleando técnicas de procesamiento de texto y modelos de clasificación. El conjunto de datos utilizado incluye noticias con su título, contenido y una etiqueta que indica si son reales o falsas.</p>

            <p class="program-description">Para el preprocesamiento de los datos, se comenzó cargando la información en un DataFrame, lo que permitió explorar las columnas disponibles, como 'title' (el título de la noticia), 'text' (el contenido de la noticia) y 'label' (la etiqueta que define si es REAL o FAKE). En esta etapa inicial, se llevó a cabo un análisis exploratorio con el fin de comprender la cantidad de títulos y textos únicos, así como la distribución de las etiquetas correspondientes.</p>

            <p class="program-description">El siguiente paso fue centrarse en la limpieza y transformación del texto. Primero, se crearon nuevas variables, como por ejemplo, la combinación del título y el contenido de las noticias en una sola columna, lo que facilitaría el análisis. Las palabras de los textos fueron tokenizadas, es decir, se descompusieron en unidades significativas. Luego, se procedió a eliminar las stopwords, empleando la biblioteca <strong>nltk</strong> para su identificación. A continuación, se utilizó el <strong>TfidfVectorizer</strong>, que permitió transformar los textos en representaciones numéricas a través de matrices de frecuencias, facilitando así su utilización en los modelos de Machine Learning.</p>

            <p class="program-description">En cuanto a los modelos de clasificación, se implementaron varias opciones. Uno de ellos fue un modelo de <strong>regresión logística</strong>, diseñado para calcular la probabilidad de que una noticia pertenezca a la clase "REAL" o "FAKE". También se probó un modelo de <strong>Support Vector Machine (SVM) con LinearSVC</strong>, que se enfocó en encontrar el hiperplano óptimo que permitiera separar las noticias reales de las falsas. Además, se optó por el uso de un <strong>Random Forest Classifier</strong>, un modelo de ensamble basado en múltiples árboles de decisión, que mejoró la precisión y robustez en la clasificación.</p>

            <p class="program-description">Para evaluar el rendimiento de los modelos, se dividieron los datos en un conjunto de entrenamiento y otro de prueba. Esta división permitió observar cómo se comportaban los modelos frente a datos no vistos previamente. Las principales métricas utilizadas en la evaluación fueron la <strong>precisión</strong> y el <strong>recall</strong> o sensibilidad, que mide la capacidad del modelo para detectar correctamente las noticias reales. Además, se calculó el <strong>F1-Score</strong>, que combina precisión y recall para ofrecer una medida balanceada del rendimiento del modelo, y se empleó una matriz de confusión para analizar en detalle los verdaderos positivos, falsos negativos, verdaderos negativos y falsos positivos.</p>

            <p><strong class="highlight2">Año de realización:</strong> <span class="normal-text">2024</span></p>

            <!-- Botones para descargar los PDFs -->
            <div class="download-buttons">
                <a href="prediccion_noticias/Libreta_Alejandro_Sánchez_FakeNews.ipynb.ipynb" class="btn-small" download>Descargar libreta</a>
                <a href="https://drive.google.com/file/d/11tfGCD0clE-VrafI63FcgdmbsD8iTcFu/view?usp=drive_link" class="btn-small" download>Descargar Proyecto</a>
            </div>

        </div>
        <div class="program-images">
            <img src="images/fake_news_prediction.png" alt="Imagen del Proyecto 1" class="program-image" onclick="openFullscreen(this)">
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
                                <p>Detección de noticias falsas</p>
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

