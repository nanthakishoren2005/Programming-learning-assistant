
# --- Imports (must be at the top) ---
from flask import Blueprint, request, jsonify, current_app
from models.user import User
from extensions import db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt, get_jwt_identity

# --- Blueprint definition (must be before usage) ---
auth_bp = Blueprint('auth', __name__)

# --- In-memory JWT blacklist ---
token_blacklist = set()

# --- Routes ---
@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'Missing required fields'}), 400

    if User.query.filter((User.username == username) | (User.email == email)).first():
        return jsonify({'error': 'User already exists'}), 409

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Missing username or password'}), 400

    # Allow login with either username or email
    user = User.query.filter(
        (User.username == username) | (User.email == username)
    ).first()
    if not user or not user.check_password(password):
        return jsonify({'error': 'Invalid credentials'}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({'access_token': access_token, 'username': user.username, 'message': 'Login successful'})

@auth_bp.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    jti = get_jwt()['jti']
    token_blacklist.add(jti)
    return jsonify({'message': 'Successfully logged out'}), 200

@auth_bp.route('/reset-password', methods=['POST'])
@jwt_required()
def reset_password():
    user_id = get_jwt_identity()
    data = request.get_json()
    old_password = data.get('old_password')
    new_password = data.get('new_password')

    if not old_password or not new_password:
        return jsonify({'error': 'Missing required fields'}), 400

    user = User.query.get(user_id)
    if not user or not user.check_password(old_password):
        return jsonify({'error': 'Invalid credentials'}), 401

    user.set_password(new_password)
    db.session.commit()
    return jsonify({'message': 'Password updated successfully'})

# Token blacklist is checked via JWTManager's token_in_blocklist_loader in main.py
