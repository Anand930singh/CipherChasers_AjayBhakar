from flask import Flask, request, jsonify
import pickle
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

app = Flask(__name__)
model = load_model('vulnerability_detection_model.h5')
with open('tokenizer.pkl', 'rb') as f:
    tokenizer = pickle.load(f)

max_sequence_length = 128  
vulnerability_types = {
    0: "Dangerous Delegatecall (DE)",
    1: "Integer Overflow (OF)",
    2: "Reentrancy (RE)",
    3: "Timestamp Dependency (TP)"
}

def preprocess_input(text):
    """Preprocess the input Solidity code for prediction."""
    seq = tokenizer.texts_to_sequences([text])
    padded = pad_sequences(seq, maxlen=max_sequence_length)
    return padded

@app.route('/predict', methods=['POST'])
def predict_vulnerability():
    data = request.json
    if 'code' not in data:
        return jsonify({"error": "No code provided"}), 400

    solidity_code = data['code']

    input_data = preprocess_input(solidity_code)
    predictions = model.predict(input_data)
    predicted_class = np.argmax(predictions, axis=1)[0]
    predicted_vulnerability = vulnerability_types.get(predicted_class, "Unknown")

    return jsonify({
        "solidity_code": solidity_code.strip(),
        "predicted_vulnerability": predicted_vulnerability
    })

if __name__ == '__main__':
    app.run(debug=True)
