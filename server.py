from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to my personal website backend!"

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    print(f"Received Contact Message: {data}")
    return jsonify({"message": "Thanks for reaching out, I'll get back to you soon!"})

if __name__ == '__main__':
    app.run(debug=True)
