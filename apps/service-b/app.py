from flask import Flask, jsonify
from flask_cors import CORS
import socket
import datetime

app = Flask(__name__)

# Your actual frontend URL
FRONTEND_ORIGIN = "https://frontend-abdulrafey5-dev.apps.rm2.thpm.p1.openshiftapps.com"

# CORS configuration
CORS(
    app,
    resources={r"/*": {"origins": FRONTEND_ORIGIN}},
    supports_credentials=False,
    allow_headers=["Content-Type", "Authorization"],
    methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"]
)

# Health check route
@app.route('/health')
def health():
    return 'OK'

# Main API route
@app.route('/api')
def api():
    return jsonify(
        service='service-b',
        host=socket.gethostname(),
        time=str(datetime.datetime.utcnow())
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)

