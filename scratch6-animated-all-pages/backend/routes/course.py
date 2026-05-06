from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

course_bp = Blueprint('course', __name__)

@course_bp.route('/', methods=['GET'])
@jwt_required()
def get_courses():
    return jsonify({'courses': []})
