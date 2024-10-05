from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
from scipy.sparse import hstack
from textblob import TextBlob
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

# Inicialización de la aplicación Flask
app = Flask(__name__)
CORS(app)  # Permitir CORS para comunicación con Angular

# Cargar el vectorizador y el modelo
with open(r'backend\model\vectorizer.pkl', 'rb') as vec_file:
    vectorizer = pickle.load(vec_file)
with open(r'backend\model\best_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

# Inicializar los analizadores de sentimiento
vader_analyzer = SentimentIntensityAnalyzer()

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Recibir título y texto
    title = data.get('title', '')
    text = data.get('text', '')
    
    # Calcular las características adicionales
    title_length = len(title)
    text_length = len(text)
    sentimiento_tb = TextBlob(text).sentiment.polarity
    sentiment_scores = vader_analyzer.polarity_scores(text)
    compound = sentiment_scores['compound']
    positiva = sentiment_scores['pos']
    negativa = sentiment_scores['neg']
    neutral = sentiment_scores['neu']
    
    # Vectorizar el texto
    X_text = vectorizer.transform([text])
    
    # Convertir las características adicionales en una matriz
    additional_features = [[title_length, text_length, sentimiento_tb, compound, positiva, negativa, neutral]]
    
    # Combinar el texto vectorizado con las características adicionales
    X_combined = hstack([X_text, additional_features])
    
    # Predecir con el modelo
    prediction = model.predict(X_combined)
    probability = model.predict_proba(X_combined)

    response = {
        'prediction': prediction[0],
        'probability': probability[0].tolist()
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
