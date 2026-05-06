import requests
import os
from flask import Blueprint, request, jsonify

chat_bp = Blueprint('chat', __name__)

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"

SYSTEM_PROMPT = """You are an expert programming tutor AI assistant called "Learnix AI". 
Your ONLY purpose is to help users learn programming — specifically Python, HTML, and CSS.

STRICT RULES:
1. ONLY answer questions related to programming, coding, software development, web development, algorithms, data structures, and computer science concepts.
2. If a user asks ANY question that is NOT related to programming or coding, politely decline.
3. When explaining code, use markdown code blocks with the appropriate language tag.
4. BE EXTREMELY BRIEF. Respond with the minimum amount of text needed to be helpful. Avoid long introductions or conclusions. Aim for "speed-first" responses.
5. Use short code snippets as the primary way of explaining.
6. Use bold text for key terms.
7. Be direct and technical.
"""


@chat_bp.route('/ask', methods=['POST'])
def ask():
    data = request.get_json()
    user_message = data.get('message', '').strip()
    lang = data.get('lang', 'python')

    if not user_message:
        return jsonify({'error': 'Message is required'}), 400

    try:
        payload = {
            "contents": [
                {
                    "role": "user",
                    "parts": [{"text": f"[Context: {lang}]\n{user_message}"}]
                }
            ],
            "systemInstruction": {
                "parts": [{"text": SYSTEM_PROMPT}]
            },
            "generationConfig": {
                "temperature": 0.4,
                "topK": 32,
                "topP": 0.9,
                "maxOutputTokens": 500
            }
        }

        response = requests.post(
            GEMINI_URL,
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=30
        )

        if response.status_code != 200:
            error_detail = response.json().get('error', {}).get('message', 'Unknown error')
            return jsonify({'error': f'Gemini API error: {error_detail}'}), 502

        result = response.json()
        # Extract the text from the Gemini response
        candidates = result.get('candidates', [])
        if not candidates:
            return jsonify({'error': 'No response from AI'}), 502

        ai_text = candidates[0].get('content', {}).get('parts', [{}])[0].get('text', '')
        return jsonify({'response': ai_text})

    except requests.exceptions.Timeout:
        return jsonify({'error': 'AI is taking too long to respond. Please try again.'}), 504
    except requests.exceptions.ConnectionError:
        return jsonify({'error': 'Could not connect to AI service. Check your internet connection.'}), 503
    except Exception as e:
        return jsonify({'error': f'Server error: {str(e)}'}), 500
