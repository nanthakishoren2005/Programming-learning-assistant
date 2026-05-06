
from flask import Flask, send_from_directory
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from routes.auth import auth_bp
from routes.course import course_bp
from routes.chat import chat_bp
from extensions import db, bcrypt
import os

# ── Path to the frontend files (one level up from backend/) ──
FRONTEND_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))

app = Flask(__name__, static_folder=None)  # disable default /static
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'supersecretkey')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'jwt-secret-string')

db.init_app(app)
bcrypt.init_app(app)
jwt = JWTManager(app)

# ── Register API Blueprints ──
app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(course_bp, url_prefix='/course')
app.register_blueprint(chat_bp, url_prefix='/chat')

# ── Create database tables if they don't exist ──
with app.app_context():
    db.create_all()

# ── Serve frontend static files ──
@app.route('/')
def serve_index():
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    """Serve frontend assets (css/, js/, img/, etc.)"""
    file_path = os.path.join(FRONTEND_DIR, path)
    if os.path.isfile(file_path):
        return send_from_directory(FRONTEND_DIR, path)
    # Fallback to index.html for SPA-style routing
    return send_from_directory(FRONTEND_DIR, 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
